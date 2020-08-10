window.Seed = (function () {
  function generateVoteCount() {
    return Math.floor(Math.random() * 50 + 15);
  }

  const products = [
    {
      id: 1,
      title: "Yellow Pail",
      description: "On-demand sand castle construction expertise.",
      url: "#",
      votes: generateVoteCount(),
      submitterAvatarUrl: "./images/avatars/avatar1.png",
      productImageUrl: "./images/products/product1.png",
    },
    {
      id: 2,
      title: "Mailchimp",
      description: "La plateforme de marketing web par excellence.",
      url: "https://mailchimp.com",
      votes: 18,
      submitterAvatarUrl: "./images/avatars/avatar2.png",
      imageUrl: "./images/products/product2.png",
    },
    {
      id: 3,
      title: "Trello",
      description: "La gestion de projet à portée de main.",
      url: "https://trello.com",
      votes: 7,
      submitterAvatarUrl: "images/avatars/veronika.jpg",
      imageUrl: "./images/products/product3.png",
    },
    {
      id: 4,
      title: "Slack",
      description: "La messagerie instantanée repensée.",
      url: "https://slack.com",
      votes: 23,
      submitterAvatarUrl: "./images/avatars/avatar4.png",
      imageUrl: "./images/products/product4.png",
    },
  ];

  return { products: products };
})();
