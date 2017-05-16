import React, { Component } from "react";
import { Reaction } from "/client/api";

class Brand extends Component {
  render() {
    return (
      <div>
        <a className="brand" href={Reaction.Router.pathFor("/")}>
          {this.props.logo &&
            <div className="logo">
              <img src={this.props.logo.url()} />
            </div>
          }
          <span className="title">{this.props.shop.name}</span>
        </a>
      </div>
    );
  }
}

export default Brand;