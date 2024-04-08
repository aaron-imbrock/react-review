import { Component } from "react";
import HornedBeast from "./HornedBeast";

class Gallery extends Component {
  render() {
    return (
      <>
        <h2>Gallery of Horns</h2>
        <HornedBeast
          title="blue wheel"
          imageUrl="https://kubernetes.io/images/wheel.svg"
          description="description"
        />
        <HornedBeast
          title="title"
          imageUrl="https://kubernetes.io/images/wheel.svg"
          description="description"
        />
      </>
    );
  }
}

export default Gallery;
