export default {
  expo: {
    name: 'YourAppName',
    slug: 'your-app-slug',
    version: '1.0.0',
    assetBundlePatterns: ['**/*'],
    splash: {
      image: './assets/images/logo.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    statusBar: {
      backgroundColor: '#ffffff',
      barStyle: 'dark-content',
    },
    extra: {
      eas: {
        projectId: "7a452961-afde-4d89-b9aa-75f1792d3437"
      }
    },
    android: {
      package: "com.yourcompany.yourappname"
    }
  }
};