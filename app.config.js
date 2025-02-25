export default {
  expo: {
    name: 'YourAppName',
    slug: 'your-app-slug',
    version: '1.0.0',
    assetBundlePatterns: ['**/*'],
    splash: {
      image: './assets/images/logo.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff', // Match this to your app's background color
    },
    // Configure the status bar to match your splash screen
    statusBar: {
      backgroundColor: '#ffffff', // Match this to your splash screen background
      barStyle: 'dark-content', // Use 'light-content' if your logo is light-colored
    },
  },
};