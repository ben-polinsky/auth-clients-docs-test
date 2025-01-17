# Change Log - @itwin/oidc-signin-tool

This log was last generated on Thu, 16 Mar 2023 01:23:39 GMT and should not be manually modified.

## 3.7.1
Thu, 16 Mar 2023 01:23:39 GMT

### Patches

- add postInstall script hook to install playwright/chromium

## 3.7.0
Tue, 14 Mar 2023 20:05:10 GMT

### Minor changes

- Move from puppeteer to playwright
- Drop support for Node 12, Node 14 and Node 16.

## 3.6.1
Fri, 27 Jan 2023 18:50:06 GMT

### Patches

- remove old OIDC Authing test

## 3.6.0
Tue, 03 Jan 2023 21:06:26 GMT

### Minor changes

- Update minimum iTwin.js version to 3.3.0

## 3.5.0
Thu, 22 Sep 2022 14:49:41 GMT

### Minor changes

- Change getAccessTokenFromBackend() client cache to include more parameters besides email

## 3.4.1
Tue, 03 May 2022 00:43:48 GMT

### Patches

- Fix error message.

## 3.4.0
Wed, 06 Apr 2022 21:17:06 GMT

### Minor changes

- Upgrade puppeteer to 13.5.2

## 3.3.0
Mon, 21 Mar 2022 12:23:06 GMT

### Minor changes

- Add support for AzureAD and Authing OAuth providers.

### Patches

- Update callback handling to not require an id_token present. The 'openid' scope is now no longer required.

## 3.2.2
Thu, 27 Jan 2022 14:10:00 GMT

### Patches

- Update itwin/certa to be a direct dependency

## 3.2.1
Tue, 25 Jan 2022 15:34:41 GMT

### Patches

- Update core dependencies

## 3.2.0
Mon, 24 Jan 2022 19:35:01 GMT

### Minor changes

- Update to use iTwin.js 3.0 official release

## 3.1.0
Wed, 15 Dec 2021 20:20:04 GMT

### Minor changes

- pin deps to core rc

## 3.0.0
Thu, 02 Dec 2021 18:07:16 GMT

_Initial release_

