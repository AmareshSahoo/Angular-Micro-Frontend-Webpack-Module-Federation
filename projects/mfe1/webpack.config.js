const {
  shareAll,
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'mfe1',
  exposes: {
    './FlightsModule': './projects/mfe1/src/app/flights/flights.module.ts',
    './LazyComponent': './projects/mfe1/src/app/flights/lazy/lazy.component.ts',
    './PublicModule': './projects/mfe1/src/public.d.ts'
  },
  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
    }),
  },
});
