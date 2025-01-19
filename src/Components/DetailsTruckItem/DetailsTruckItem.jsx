import { useSelector } from "react-redux";

import { selectTruckById } from "../../Redux/trucks/selectors";

import icons from "/icons/icons.svg";

import css from "./DetailsTruckItem.module.css";

export default function DetailsTruckItem() {
  const truck = useSelector(selectTruckById);

  return (
    <section className={css.truckSection}>
      <h2 className={css.title}>{truck.name}</h2>
      <div className={css.wrapperItem}>
        <div className={css.item}>
          <svg width={16} height={16} aria-label="Rating">
            <use href={`${icons}#icon-star`} />
          </svg>
          <p>{`${truck.rating}(${truck.reviews.length} Reviews)`}</p>
        </div>
        <div className={css.item}>
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
      <p className={css.price}>{`€${truck.price.toFixed(2)}`}</p>
      <ul className={css.truckGallery}>
        {truck.gallery.map((item, index) => (
          <li className={css.truckGalleryItem} key={index}>
            <img
              className={css.truckGalleryImg}
              src={item.original}
              width={292}
              height={312}
              alt={truck.name}
            />
          </li>
        ))}
      </ul>
      <p className={css.description}>{truck.description}</p>
    </section>
  );
}
