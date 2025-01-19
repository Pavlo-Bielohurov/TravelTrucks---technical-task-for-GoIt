import { useDispatch, useSelector } from "react-redux";
import { Outlet, useParams } from "react-router";
import { useEffect } from "react";
import { NavLink } from "react-router";
import clsx from "clsx";

import { selectTruckById, selectIsLoading } from "../../Redux/trucks/selectors";
import { getTruckById } from "../../Redux/trucks/operations";

import DetailsTruckItem from "../../Components/DetailsTruckItem/DetailsTruckItem";
import Loader from "../../Components/Loader/Loader";
import BookingForm from "../../Components/App/BookingForm/BookingForm";
// import Menu from "../../components/Menu/Menu";

import css from "./DetailsPage.module.css";

const getClassName = (props) => {
  return clsx(css.link, props.isActive && css.active);
};

// const paths = ["features", "reviews"];

export default function DetailsPage() {
  const dispatch = useDispatch();
  const truck = useSelector(selectTruckById);
  const isLoading = useSelector(selectIsLoading);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getTruckById(id));
  }, [dispatch, id]);

  return (
    <div className={css.mainWrapper}>
      {isLoading && <Loader />}
      {truck && (
        <>
          <DetailsTruckItem />
          <ul className={css.currentCamperDetails}>
            <li>
              <NavLink to="features" className={getClassName}>
                Features
              </NavLink>
            </li>
            <li>
              <NavLink to="reviews" className={getClassName}>
                Reviews
              </NavLink>
            </li>
          </ul>
          {/* <hr className={css.horizontLine} /> */}
          <div className={css.wrapperBottom}>
            <div className={css.outlet}>
              <Outlet />
            </div>
            <div className={css.formWrapper}>
              <BookingForm />
            </div>
          </div>
          {/* <Menu paths={paths} /> */}
          {/* <Outlet /> */}
        </>
      )}
    </div>
  );
}
