module.exports = {
  packagerConfig: {
    asar: true,
  },
  publishers: [
    // {
    //   name: '@electron-forge/publisher-github',
    //   config: {
    //     repository: {
    //       owner: 'mikewongblinx',
    //       name: 'auto-update-test'
    //     },
    //     prerelease: true
    //   }
    // },
    {
      name: "@electron-forge/publisher-s3",
      config: {
        bucket: 'auto-update-test',
        region: "eu-west-2",
        public: true,
      },
    }
  ],
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
  ],
};
