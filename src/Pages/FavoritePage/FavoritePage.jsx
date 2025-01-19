import { useSelector } from "react-redux";

import { selectFavoritesList } from "../../Redux/favorite/selector";
import { selectIsLoading } from "../../Redux/trucks/selectors";

import TruckItem from "../../Components/TruckItem/TruckItem";
import Loader from "../../Components/Loader/Loader";

import css from "./FavoritePage.module.css";

export default function FavoritesPage() {
  const trucks = useSelector(selectFavoritesList);
  const isLoading = useSelector(selectIsLoading);

  return (
    <div className={css.wrapper}>
      <ul className={css.trucksList}>
        {isLoading && <Loader />}
        {trucks.length > 0 ? (
          trucks.map((truck) => (
            <li key={truck.id} className={css.truckrItem}>
              <TruckItem truck={truck} />
            </li>
          ))
        ) : (
          <h2 className={css.text}>No favorites truck added</h2>
        )}
      </ul>
    </div>
  );
}
