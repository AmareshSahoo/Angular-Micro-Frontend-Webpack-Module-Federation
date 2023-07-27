// Import share instead of shareAll:
const {
  share,
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'mfe1',

  exposes: {
    './FlightsModule': './projects/mfe1/src/app/flights/flights.module.ts',
    './LazyComponent': './projects/mfe1/src/app/flights/lazy/lazy.component.ts',
    './PublicModule': './projects/mfe1/src/public.d.ts'
  },
  // Explicitly share packages:
  shared: share({
    '@angular/core': {
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
    },
    '@angular/common': {
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
    },
    '@angular/common/http': {
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
    },
    '@angular/router': {
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
    },
  }),

  // Explicitly share mono-repo libs:
  sharedMappings: ['auth-lib'],
});
