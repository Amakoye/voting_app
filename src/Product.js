import React from "react";

class Product extends React.Component {
  constructor(props) {
    super(props);

    this.handleUpVote = this.handleUpVote.bind(this);
  }
  handleUpVote() {
    this.props.onVote(this.props.id);
  }
  render() {
    const {
      productImageUrl,
      votes,
      url,
      title,
      description,
      submitterAvatarUrl,
    } = this.props;
    return (
      <div className="item">
        <div className="image">
          <img src={productImageUrl} alt="" />
        </div>
        <div className="middle aligned content">
          <div className="header">
            <a href="#!" onClick={this.handleUpVote}>
              <i className="large caret up icon" />
              {votes}
            </a>
          </div>
          <div className="description">
            <a href={url}>{title}</a>
            <p>{description}</p>
          </div>
          <div className="extra">
            <span>Submitted By:</span>
            <img className="ui avatar image" src={submitterAvatarUrl} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
