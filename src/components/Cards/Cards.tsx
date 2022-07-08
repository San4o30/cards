import React, { FC } from "react";
import IPhotos from "../Api/interfaces";
import Card from "./Card/Card";
import styles from "./Cards.module.css";
import CardWithStars from "./CardWithStars/CardWithStars";

interface CardsProps {
  hotels: IPhotos[];
}

const Cards: FC<CardsProps> = ({ hotels }) => {
  return (
    <div className={styles.cards}>
      {hotels.map((hotel) =>
        hotel.stars ? (
          <CardWithStars hotel={hotel}/>
        ) : (
          <Card hotel={hotel}/>
        )
      )}
    </div>
  );
};

export default Cards;
