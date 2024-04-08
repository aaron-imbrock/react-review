import { Component } from "react";

class HornedBeast extends Component {
  render() {
    return (
      <>
        <h2>{this.props.title}</h2>
        <img title={this.props.title} src={this.props.imageUrl} alt={this.props.description} />
        <p>{this.props.description}</p>
      </>
    );
  }
}

export default HornedBeast;
