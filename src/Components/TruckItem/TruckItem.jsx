/* eslint-disable react/prop-types */
import { Link } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import { selectLocation } from "../../Redux/filters/selector";
import { addFavorite, removeFavorite } from "../../Redux/favorite/slice";
import { selectFavoritesList } from "../../Redux/favorite/selector";

import SpecificationList from "../SpecificationList/SpecificationList";

import icons from "/icons/icons.svg";
import css from "./TruckItem.module.css";

export default function TruckItem({ truck }) {
  const dispatch = useDispatch();
  const selectedLocation = useSelector(selectLocation);
  const favoritesList = useSelector(selectFavoritesList);
  const isFavorite = favoritesList.some((item) => item.id === truck.id);
  const isSelectedLocation =
    selectedLocation.split(",")[0] === truck.location.split(",")[1].trim();

  const toggleFavoriteClick = () => {
    if (!isFavorite) {
      dispatch(addFavorite(truck));
    } else {
      dispatch(removeFavorite(truck.id));
    }
  };

  return (
    <>
      <img
        className={css.img}
        src={truck.gallery[0].original}
        alt={truck.name}
        width="292"
        height="320"
      />
      <div>
        <div className={css.wrapperContent}>
          <h2 className={css.title}>{truck.name}</h2>
          <div className={css.wrapperItemContent}>
            <p className={css.price}>{`€${truck.price.toFixed(2)}`}</p>
            <button
              className={`${css.btnHeart} ${isFavorite ? css.active : ""}`}
            >
              <svg
                width={24}
                height={24}
                className={css.icon}
                aria-label="Add to favorites"
                onClick={toggleFavoriteClick}
              >
                <use href={`${icons}#heart`} />
              </svg>
            </button>
          </div>
        </div>
        <div className={css.wrapperItem}>
          <div className={css.item}>
            <svg width={16} height={16} aria-label="Rating">
              <use href={`${icons}#icon-star`} />
            </svg>
            <p>{`${truck.rating}(${truck.reviews.length} Reviews)`}</p>
          </div>
          <div
            className={`${css.itemLocation} ${
              isSelectedLocation ? css.activeLocation : ""
            }`}
          >
            <svg
              width={16}
              height={16}
              aria-label="Location"
              className={css.icon}
            >
              <use href={`${icons}#map`} />
            </svg>
            <p>{truck.location}</p>
          </div>
        </div>
        <p className={css.description}>{truck.description}</p>
        <SpecificationList truck={truck} />
        <Link
          to={`/catalog/${truck.id}/features`}
          className={css.btn}
          aria-label="Show more information about truck"
        >
          Show more
        </Link>
      </div>
    </>
  );
}
