  function generateVoteCount() {
    return Math.floor((Math.random() * 50) + 15);
  }

  const products = [
    {
      id: 1,
      title: 'Yellow Pail',
      description: 'On-demand sand castle construction expertise.',
      url: '#',
      votes: generateVoteCount(),
    //   submitterAvatarUrl: 'images/avatars/128.jpg',
      productImageUrl: 'https://kodi.tv/sites/default/files/styles/medium_crop/public/addon_assets/script.tvguide/icon/icon.png?itok=PpMuF3Da',
    },
    {
      id: 2,
      title: 'Supermajority: The Fantasy Congress League',
      description: 'Earn points when your favorite politicians pass legislation.',
      url: '#',
      votes: generateVoteCount(),
    //   submitterAvatarUrl: 'images/avatars/lolo.jpg',
      productImageUrl: 'http://warpcomputers.com/wp-content/uploads/2013/07/laptop_grey.png',
    },
    {
      id: 3,
      title: 'Tinfoild: Tailored tinfoil hats',
      description: 'We already have your measurements and shipping address.',
      url: '#',
      votes: generateVoteCount(),
    //   submitterAvatarUrl: 'images/avatars/130.jpg',
      productImageUrl: 'http://images.clipartpanda.com/iphone-cell-phone-clipart-1269412051580799207mobile_001.png',
    },
    {
      id: 4,
      title: 'Haught or Naught',
      description: 'High-minded or absent-minded? You decide.',
      url: '#',
      votes: generateVoteCount(),
    //   submitterAvatarUrl: 'images/avatars/131.jpg',
      productImageUrl: 'https://static.wixstatic.com/media/82eb18_3d6700ea6a464bdbb3700bd635a8d2c8.jpg_256',
    },
  ];

export {products, generateVoteCount};
