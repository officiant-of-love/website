module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'wedding-hero': 'url(./pages/Weddings/assets/wedding-flowers.jpg)',
        'about-hero': 'url(./pages/About/assets/About.jpg)',
        'funeral-hero': 'url(./pages/Funerals/assets/funerals.jpg)',
        'contact-hero': 'url(./pages/Contact/assets/book.jpg)'
      }
    },
  },
  plugins: [],
}
