import { Component } from "react";

class HornedBeast extends Component {
  render() {
    return (
      <>
<div
  id={this.props.id}
  className="shadow big-white rounded-lg mb-5 flex" // Use flex to enable flexbox
>
  {/* Image container */}
  <div className="flex-none"> {/* This ensures the image container does not grow or shrink */}
    <img
      title={this.props.title}
      src={this.props.image_url}
      alt={this.props.description}
      className="rounded-l-lg" // If you want the image to have a rounded left edge matching the container
    />
  </div>

  {/* Text content container */}
  <div className="flex-grow p-4"> {/* flex-grow allows the text container to take up remaining space, p-4 for some padding */}
    <h2 className="text-1xl font-bold underline">{this.props.title}</h2>
    <p>{this.props.description}</p>
    <p>Horns: {this.props.horns}</p>
    <p>Keywords: {this.props.keyword}</p>
  </div>
</div>

      </>
    );
  }
}

export default HornedBeast;
