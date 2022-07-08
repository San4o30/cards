import React from "react";
import Cards from "../Cards/Cards";
import IPhotos from "./interfaces";
import { photo1, photo2, photo3, photo4, photo5 } from "../../assets/index"
const hotels: IPhotos[] = [
  {
    photo: photo1,
    name: "Hotel Blue Haven",
    stars: true,
    info: "Aute quis duis excepteur excepteur ipsum cat eiusmod consectetur enim laborum magna llit. Ipsum est fugiat velit ea llamco do esse ut in veniam sun in onsequat. Aute quis duis epteur excepteur ipsum occaecat eiusmod nsectetur enim laborum magna mollit. Ipsum est fugiat velit ea ullamco do",
    location: "1749 Wheeler Ridge  Delaware",
    guests: "2 x Guests",
    room: "1 x Room",
    oldCost: "$ 10,500",
    newCost: "$ 8,500",
  },
  {
    photo: photo2,
    name: "LUX* Belle Mare",
    location: "1749 Wheeler Ridge  Delaware",
    guests: "2 x Guests",
    room: "1 x Room",
    oldCost: "$ 8,500",
    newCost: "$ 3,000",
  },
  {
    photo: photo3,
    name: "White Palace",
    location: "1749 Wheeler Ridge  Delaware",
    guests: "2 x Guests",
    room: "1 x Room",
    oldCost: "$ 10,500",
    newCost: "$ 9,500",
  },
  {
    photo: photo4,
    name: "Luxury Place",
    location: "1749 Wheeler Ridge  Delaware",
    guests: "2 x Guests",
    room: "1 x Room",
    oldCost: "$ 4,500",
    newCost: "$ 2,500",
  },
  {
    photo: photo5,
    name: "Hotel Five Star",
    location: "1749 Wheeler Ridge  Delaware",
    guests: "2 x Guests",
    room: "1 x Room",
    oldCost: "$ 6,500",
    newCost: "$ 3,500",
  },
];

const Api = () => {
  return <Cards hotels={hotels}/>;
};

export default Api;
