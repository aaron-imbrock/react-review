import { Component } from "react";
import HornedBeast from "./HornedBeast";
import hornedBeastData from "../data/hornedBeastsData.json";

class Gallery extends Component {
  render() {
    return (
      <>
        <h2 className="text-2xl font-bold underline">Beasts</h2>
          {hornedBeastData.map((beast) => (
            <HornedBeast
              key={beast._id}
              image_url={beast.image_url}
              title={beast.title}
              description={beast.description}
              keyword={beast.keyword}
              horns={beast.horns}
            />
          ))}
      </>
    );
  }
}

export default Gallery;
