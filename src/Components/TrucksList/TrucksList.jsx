import { useDispatch, useSelector } from "react-redux";

import {
  selectTrucks,
  selectError,
  selectHasNextPage,
  selectIsLoading,
  selectLimit,
  selectPage,
} from "../../redux/trucks/selectors";
import { incrementPage } from "../../redux/trucks/slice";
import { getAllTrucks } from "../../redux/trucks/operations";
import {
  selectFilters,
  selectForm,
  selectLocation,
} from "../../redux/filters/selector";

import TruckItem from "../TruckItem/TruckItem";
import Loader from "../Loader/Loader";

import filter from "../../utils/filter";

import { TbCamper } from "react-icons/tb";
import css from "./TrucksList.module.css";

export default function CampersList() {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const location = useSelector(selectLocation);
  const equipment = useSelector(selectFilters);
  const form = useSelector(selectForm);
  const limit = useSelector(selectLimit);
  const trucks = useSelector(selectTrucks);
  const isError = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const hasNextPage = useSelector(selectHasNextPage);

  const handleClick = () => {
    dispatch(incrementPage());
    const filters = filter({
      page: page + 1,
      limit,
      location,
      equipment,
      form,
    });
    dispatch(getAllTrucks(filters));
  };
  return (
    <>
      {isError ? (
        <div className={css.container}>
          <TbCamper size={220} className={css.icon} />
          <h2 className={css.title}>No Trucks Found</h2>
          <div>
            <p>No trucks found for the selected criteria</p>
            <p> Please, try adjusting your search criteria</p>
          </div>
        </div>
      ) : (
        <section className={css.trucksListSection}>
          <ul className={css.trucksList}>
            {trucks.map((truck) => {
              return (
                <li key={truck.id} className={css.trucksListItem}>
                  {<TruckItem truck={truck} />}
                </li>
              );
            })}
          </ul>
          {isLoading && <Loader />}
          {hasNextPage && (
            <button
              className={css.btn}
              type="button"
              disabled={isLoading}
              onClick={handleClick}
            >
              Load more
            </button>
          )}
        </section>
      )}
    </>
  );
}
