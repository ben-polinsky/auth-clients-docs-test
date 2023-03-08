/*---------------------------------------------------------------------------------------------
* Copyright (c) Bentley Systems, Incorporated. All rights reserved.
* See LICENSE.md in the project root for license terms and full copyright notice.
*--------------------------------------------------------------------------------------------*/
// Code based on the blog article @ https://authguidance.com

/** @packageDocumentation
 * @module Authentication
 */

import { Logger } from "@itwin/core-bentley";
import type { AuthorizationErrorJson, AuthorizationRequest, AuthorizationRequestResponse,
  AuthorizationResponseJson, AuthorizationServiceConfiguration} from "@openid/appauth";
import {
  AuthorizationError, AuthorizationRequestHandler, AuthorizationResponse, BasicQueryStringUtils,
} from "@openid/appauth";
import { NodeCrypto } from "@openid/appauth/built/node_support";
import type { ElectronAuthorizationEvents } from "./Events";
import { shell } from "electron";

const electronAuthLoggerCategory = "electron-auth";
/**
 * Utility to setup a local web server that listens to authorization responses to the browser and make the necessary redirections
 * @internal
 */
export class ElectronMainAuthorizationRequestHandler extends AuthorizationRequestHandler {
  private _authorizationPromise: Promise<AuthorizationRequestResponse> | null = null;
  private _authorizationEvents: ElectronAuthorizationEvents;

  /**
   * Constructor
   */
  public constructor(authorizationEvents: ElectronAuthorizationEvents) {
    super(new BasicQueryStringUtils(), new NodeCrypto());
    this._authorizationEvents = authorizationEvents;
  }

  /**
   * Makes an authorization request on the system browser
   */
  public async performAuthorizationRequest(serviceConfiguration: AuthorizationServiceConfiguration, authRequest: AuthorizationRequest): Promise<void> {
    Logger.logTrace(electronAuthLoggerCategory, "Making authorization request", () => ({ serviceConfiguration, authRequest }));

    // Setup a promise to process the authorization response
    this._authorizationPromise = new Promise<AuthorizationRequestResponse>((resolve, _reject) => {

      // Wrap the response from the web browser (with the authorization code)
      this._authorizationEvents.onAuthorizationResponse.addOnce((authErrorJson: AuthorizationErrorJson | null, authResponseJson: AuthorizationResponseJson | null) => {

        // Resolve the full response including the request
        const authRequestResponse: AuthorizationRequestResponse = {
          request: authRequest,
          error: authErrorJson ? new AuthorizationError(authErrorJson) : null,
          response: authResponseJson ? new AuthorizationResponse(authResponseJson) : null,
        };
        resolve(authRequestResponse);

        // Ask the base class to call our completeAuthorizationRequest - this calls the registered notifier to broadcast the event outside of the client
        this.completeAuthorizationRequestIfPossible(); // eslint-disable-line @typescript-eslint/no-floating-promises
      });
    });

    // Compose the request and invoke in the browser
    const authUrl = this.buildRequestUrl(serviceConfiguration, authRequest);
    const error = await shell.openPath(authUrl);
    if (error)
      Logger.logError(electronAuthLoggerCategory, error);
  }

  /**
   * Checks if an authorization flow can be completed, and completes it.
   * The handler returns a `Promise<AuthorizationRequestResponse>` if ready, or a `Promise<null>`
   * if not ready.
   */
  protected async completeAuthorizationRequest(): Promise<AuthorizationRequestResponse | null> {
    return this._authorizationPromise;
  }
}
