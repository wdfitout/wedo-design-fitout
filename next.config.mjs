/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
         /* residential */
      { source: '/home-interior-design-dubai/luxury-apartment-interior-design-in-palm-jumeirah', destination: '/palm-jumeirah-apartment', permanent: true },
      { source: '/home-interior-design-dubai/apartment-interior-design-in-dubai-marina', destination: '/dubai-marina-luxury-apartment', permanent: true },
      { source: '/home-interior-design-dubai/duplex-apartment-interior-design-near-atlantis-the-royal', destination: '/royal-atlantis-2-bedroom-apartment', permanent: true },
      { source: '/home-interior-design-dubai/apartment-interior-design-atlantis-the-royal', destination: '/royal-atlantis-apartment', permanent: true },
      { source: '/home-interior-design-dubai/luxury-interior-design-in-emaar-beachfront', destination: '/emaar-beach-front-marina-vista-apartment', permanent: true },
      { source: '/home-interior-design-dubai/royal-villa-interior-design-in-al-manara-dubai', destination: '/al-manara-luxury-villa', permanent: true },
      { source: '/home-interior-design-dubai/luxury-penthouse-interior-design-in-dafza-2w-dubai', destination: '/palm-jumeirah-2-bedroom-penthouse', permanent: true },
      { source: '/home-interior-design-dubai/classic-villa-interior-design-in-jumeirah-beach-residence', destination: '/jumeirah-beach-residence-villa', permanent: true },
      { source: '/home-interior-design-dubai/modern-penthouse-interior-design-in-dafza-6w-dubai', destination: '/palm-jumeirah-6-bedroom-penthouse', permanent: true },
      { source: '/home-interior-design-dubai/apartment-interior-design-near-al-wasl-dubai', destination: '/al-wasl-apartment', permanent: true },
      { source: '/home-interior-design-dubai/modern-villa-interior-design-majan-dubai', destination: '/majan-villa-design', permanent: true },
       /* restaurant */
      { source: '/restaurant-interior-design-dubai/restaurant-cafe-interior-design-in-downtown-dubai', destination: '/downtown-dubai-restaurant', permanent: true },
      { source: '/restaurant-interior-design-dubai/cafe-interior-design-in-al-quoz-dubai', destination: '/al-quoz-cafe-interior', permanent: true },
      { source: '/restaurant-interior-design-dubai/central-kitchen-interior-design-near-al-quoz-dubai', destination: '/al-quoz-central-kitchen', permanent: true },
      { source: '/restaurant-interior-design-dubai/lounge-interior-design-in-barsha-heights-dubai', destination: '/al-barsha-lounge', permanent: true },
      { source: '/restaurant-interior-design-dubai/restaurant-lounge-interior-design-in-jbr-dubai', destination: '/jbr-restaurant-interior', permanent: true },
      { source: '/restaurant-interior-design-dubai/elegant-interior-design-haagen-dazs-dubai', destination: '/palm-jumeirah-f&b', permanent: true },
      { source: '/restaurant-interior-design-dubai/modern-cafe-interior-design-in-al-safa-dubai', destination: '/al-safa-cafe-design', permanent: true },
      { source: '/restaurant-interior-design-dubai/restaurant-interior-design-near-world-trade-center-dubai', destination: '/world-trade-center-restaurant', permanent: true },
      { source: '/restaurant-interior-design-dubai/restaurant-interior-design-in-business-bay-dubai', destination: '/business-bay-restaurant', permanent: true },
      { source: '/restaurant-interior-design-dubai/luxury-cafe-interior-design-in-downtown-dubai', destination: '/downtown-cafe-design', permanent: true },
      { source: '/restaurant-interior-design-dubai/espresso-cafe-bar-interior-design-al-sufouh-dubai', destination: '/al-sufouh-espresso-bar', permanent: true },
      { source: '/restaurant-interior-design-dubai/restaurant-cafe-interior-design-near-bluewaters-island-dubai', destination: '/bluewaters-cafe-interior', permanent: true },
      { source: '/restaurant-interior-design-dubai/chic-cafe-bar-interior-design-dubai', destination: '/business-bay-cafe-interior', permanent: true },
      { source: '/restaurant-interior-design-dubai/modern-restaurant-interior-design-dubai', destination: '/dubai-restaurant-interior-fit-out', permanent: true },
      { source: '/restaurant-interior-design-dubai/premium-restaurant-interior-design-dubai', destination: '/dubai-mall-restaurant', permanent: true },
       /* retail */
      { source: '/retail-interior-design-dubai/luxury-facial-studio-design-in-dubai-hills-mall', destination: '/dubai-hills-mall-facial-studio', permanent: true },
      { source: '/retail-interior-design-dubai/tess-avenue-beauty-salon-interior-design-jumeirah-1-dubai', destination: '/jumeirah-1-beauty-salon', permanent: true },
      { source: '/retail-interior-design-dubai/barber-shop-interior-design-in-palm-jumeirah-dubai', destination: '/palm-jumeirah-barber-shop', permanent: true },
      { source: '//retail-interior-design-dubai/clothing-store-premium-interior-design-in-al-wasl-dubai', destination: '/al-wasl-clothing-store', permanent: true },
      { source: '/retail-interior-design-dubai/boutique-interior-design-in-umm-suqeim-dubai', destination: '/umm-suqeim-boutique', permanent: true },
       /* commercial */
      { source: '/commercial-interior-design-dubai/modern-office-interior-fit-out-near-dubai-knowledge-park', destination: '/dubai-knowledge-park-office-fit-out', permanent: true },
      { source: '/commercial-interior-design-dubai/innovative-office-interior-fit-out-dubai', destination: '/business-bay-office-fit-out', permanent: true },
      { source: '/commercial-interior-design-dubai/office-interior-fit-out-dubai', destination: '/dubai-office-interior', permanent: true },
      { source: '/commercial-interior-design-dubai/stylish-real-estate-office-interior-fit-out-in-al-safa-dubai', destination: '/al-safa-real-estate-office', permanent: true },
      { source: '/commercial-interior-design-dubai/travel-agency-office-interior-fit-out-in-business-bay-dubai', destination: '/business-bay-travel-agency', permanent: true },
    ];
  },
};

export default nextConfig;
