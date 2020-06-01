module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],

  pwa: {
    name: 'LCP',
    short_name: "La Casa de mi Padre",
    icons: [
        {
            src: "./public/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png"
        },
        {
            src: "./public/android-chrome-384x384.png",
            sizes: "384x384",
            type: "image/png"
        }
    ],
    theme_color: "#275287",
    background_color: "#275287",
    display: "standalone"
  }
}