import React from "react";
import Product from "./Product";
import product1 from "./images/products/product1.png";
import product2 from "./images/products/product2.png";
import product3 from "./images/products/product3.png";
import product4 from "./images/products/product4.png";
import avatar1 from "./images/avatars/avatar1.png";
import avatar2 from "./images/avatars/avatar2.png";
import avatar3 from "./images/avatars/avatar3.png";
import avatar4 from "./images/avatars/avatar4.png";

// generate votes
function generateVoteCount() {
  return Math.floor(Math.random() * 50 + 15);
}

// data to display

const productsArray = [
  {
    id: 1,
    title: "Yellow Pail",
    description: "On-demand sand castle construction expertise.",
    url: "#",
    votes: generateVoteCount(),
    submitterAvatarUrl: avatar1,
    productImageUrl: product1,
  },
  {
    id: 2,
    title: "Mailchimp",
    description: "La plateforme de marketing web par excellence.",
    url: "https://mailchimp.com",
    votes: 18,
    submitterAvatarUrl: avatar2,
    productImageUrl: product2,
  },
  {
    id: 3,
    title: "Trello",
    description: "La gestion de projet à portée de main.",
    url: "https://trello.com",
    votes: 7,
    submitterAvatarUrl: avatar3,
    productImageUrl: product3,
  },
  {
    id: 4,
    title: "Slack",
    description: "La messagerie instantanée repensée.",
    url: "https://slack.com",
    votes: 23,
    submitterAvatarUrl: avatar4,
    productImageUrl: product4,
  },
];

//console.log(generateVoteCount());
class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productsState: [],
    };

    this.handleProductUpVote = this.handleProductUpVote.bind(this);
  }

  componentDidMount() {
    this.setState({ productsState: productsArray });
  }

  handleProductUpVote = (productId) => {
    /* const products = this.state.productsState;
    products.forEach((product) => {
      if (product.id === productId) {
        product.votes = product.votes + 1;
      }
    }); */

    const nextProducts = this.state.productsState.map((product) => {
      if (product.id === productId) {
        return Object.assign({}, product, {
          votes: product.votes + 1,
        });
      } else {
        return product;
      }
    });

    this.setState({ productsState: nextProducts });
    //console.log(`${productId} was upvoted`);
  };

  render() {
    const products = this.state.productsState.sort((a, b) => b.votes - a.votes);
    const productComponents = products.map((product) => (
      <Product
        id={product.id}
        title={product.title}
        description={product.description}
        url={product.url}
        votes={product.votes}
        submitterAvatarUrl={product.submitterAvatarUrl}
        productImageUrl={product.productImageUrl}
        onVote={this.handleProductUpVote}
        key={product.id}
      />
    ));
    return <div className="ui unstackable items">{productComponents}</div>;
  }
}

export default ProductList;
