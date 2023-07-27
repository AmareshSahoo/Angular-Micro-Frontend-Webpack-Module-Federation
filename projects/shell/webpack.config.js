const {
  shareAll,
  share,
  withModuleFederationPlugin,
  SharedMappings
} = require("@angular-architects/module-federation/webpack");
const sharedMappings = new SharedMappings();


module.exports = withModuleFederationPlugin({
  remotes: {
    mfe1: "http://localhost:4201/remoteEntry.js",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
    }),
  },

  // this specifies the shared libraries so that these libraries are singelon instances -
  // meaning that every application consumes the same:

  // shared: share({
  //   "@angular/core": {
  //     singleton: true,
  //     strictVersion: true,
  //     requiredVersion: "auto",
  //   },
  //   "@angular/common": {
  //     singleton: true,
  //     strictVersion: true,
  //     requiredVersion: "auto",
  //   },
  //   "@angular/common/http": {
  //     singleton: true,
  //     strictVersion: true,
  //     requiredVersion: "auto",
  //   },
  //   "@angular/router": {
  //     singleton: true,
  //     strictVersion: true,
  //     requiredVersion: "auto",
  //   },
  //   ...sharedMappings.getDescriptors(),
  // }),
});
