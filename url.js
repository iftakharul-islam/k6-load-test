// urls.js
const site_url = 'example.com';
export const urls = [
    'https://'+site_url+'/',
    'https://'+site_url+'/discover/',
    'https://'+site_url+'/compare/',
    'https://'+site_url+'/plugin-search/',
    'https://'+site_url+'/blog/',
    'https://'+site_url+'/promote/',
    'https://'+site_url+'/wordpress-coupons-deals-offers/',
    // Add more URLs as needed
    'https://'+site_url+'/account/',
    'https://'+site_url+'/get-started/',

    // blog urls 
    'https://'+site_url+'/wordpress/',
    'https://'+site_url+'/tutorials/',
    'https://'+site_url+'/reviews/themes/',
    'https://'+site_url+'/reviews/themes/seo-friendly-themes/',
    'https://'+site_url+'/seo/',
    'https://'+site_url+'/reviews/',
    'https://'+site_url+'/reviews/themes/restaurant-themes/',
    'https://'+site_url+'/reviews/themes/real-estate-themes/',

  ];

  
  /*

  k6 run multi-url-test.js --out json=results.json
k6 convert results.json --type=html --out report.html

*/