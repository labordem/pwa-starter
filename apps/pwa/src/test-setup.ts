// @ts-expect-error https://thymikee.github.io/jest-preset-angular/docs/getting-started/test-environment
globalThis.ngJest = {
  testEnvironmentOptions: {
    errorOnUnknownElements: true,
    errorOnUnknownProperties: true,
  },
};
import 'jest-preset-angular/setup-jest';

import '@angular/localize/init';

// Workaround to bypass Jest bug :
import { TextEncoder } from 'node:util';
global.TextEncoder = TextEncoder;
