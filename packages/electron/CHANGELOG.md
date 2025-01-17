# Change Log - @itwin/electron-authorization

This log was last generated on Wed, 29 Mar 2023 09:49:21 GMT and should not be manually modified.

## 0.13.0
Wed, 29 Mar 2023 09:49:21 GMT

### Minor changes

- ### Breaking changes:
- Changes to `ElectronMainAuthorizationConfiguration`:
  - Property `scope` renamed to `scopes`
  - Property `redirectUri: string | undefined` changed to `redirectUris: string[]`
- Parameter `prompt=consent` is no longer unconditionally added to all OIDC Authentication requests
- Parameter `access_type=offline` is no longer added to OIDC Authentication requests (should have no effect on behavior)
- `TokenStore` is no longer exposed from `ElectronMainAuthorization`
- `ElectronRendererAuthorization` constructor now accepts `ElectronRendererAuthorizationConfiguration` with a required `clientId` parameter.

## 0.12.0
Tue, 14 Mar 2023 20:05:10 GMT

### Minor changes

- Drop support for Node 12, Node 14 and Node 16.

### Patches

- Replace npm open package for electron.shell.openPath

## 0.11.0
Thu, 23 Feb 2023 22:01:20 GMT

### Minor changes

- Drop support for Electron 14, 15, 16, 17, 22. Start supporting Electron 23.

## 0.10.1
Tue, 10 Jan 2023 15:45:09 GMT

### Patches

- Enabled linux usage for tokenstore

## 0.10.0
Tue, 03 Jan 2023 21:06:26 GMT

### Minor changes

- Update minimum iTwin.js version to 3.3.0

## 0.9.0
Fri, 23 Dec 2022 16:03:26 GMT

### Minor changes

- Add Electron 22 as supported Electron version.

### Patches

- fix for minor documentation inconsistencies

## 0.8.5
Thu, 25 Aug 2022 13:58:56 GMT

### Patches

- Add Electron as peer dependency.

## 0.8.4
Tue, 03 May 2022 00:43:48 GMT

### Patches

- Include issuerUrl in Electron client TokenStore key

## 0.8.3
Wed, 02 Feb 2022 20:20:14 GMT

### Patches

- update keytar version

## 0.8.2
Tue, 01 Feb 2022 18:01:38 GMT

### Patches

- Update invalid "this" reference

## 0.8.1
Tue, 25 Jan 2022 15:34:41 GMT

### Patches

- update core dependencies

## 0.8.0
Mon, 24 Jan 2022 19:35:01 GMT

### Minor changes

- Update to use iTwin.js 3.0 official release

## 0.7.0
Fri, 17 Dec 2021 19:52:59 GMT

### Minor changes

- Replaced initialize with silent signin

## 0.6.0
Wed, 15 Dec 2021 20:20:04 GMT

### Minor changes

- pin deps to core rc

## 0.5.1
Thu, 02 Dec 2021 18:07:16 GMT

### Patches

- Automatically adds offline_access scope if not already included

## 0.5.0
Mon, 29 Nov 2021 22:10:32 GMT

### Minor changes

- Renaming barrel files to match electron naming scheme

## 0.4.0
Mon, 29 Nov 2021 15:30:19 GMT

### Minor changes

- Changed ElectronAuthorizationBackend name to ElectronAuthorizationMain and ElectronAppAuthorization to ElectronAuthorizationRenderer

