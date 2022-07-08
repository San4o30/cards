import React, { FC } from "react";
import IPhotos from "../../Api/interfaces";
import styles from "./Card.module.css";
import { user, home, mapPin, star } from "../../../assets/index";

interface CardProps {
  hotel: IPhotos;
}
const Card: FC<CardProps> = ({ hotel }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_offer}><p>Flash Offer</p></div>
        <img className={styles.card_image} src={hotel.photo} alt="" />
      <div className={styles.card_content}>
        <div className={styles.card_content_info}>
          <h4 className={styles.card_content_info_title}>{hotel.name}</h4>
          <div className={styles.card_content_info_main}>
            <div className={styles.card_content_info_main_location}>
              <img src={mapPin} alt="" /> <p>{hotel.location}</p>
            </div>
            <div className={styles.card_content_info_main_guests}>
              <img src={user} alt="" /> <p>{hotel.guests}</p>
            </div>
            <div className={styles.card_content_info_main_room}>
              <img src={home} alt="" /> <p>{hotel.room}</p>
            </div>
            <span className={styles.card_content_info_main_oldCost}>{hotel.oldCost}</span>
          </div>
          <div className={styles.card_content_info_footer}>
            <p className={styles.card_content_info_footer_newCost}>{hotel.newCost}</p>
            <button className={styles.card_content_info_footer_btn}>Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
