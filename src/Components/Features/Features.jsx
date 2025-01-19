import { useSelector } from "react-redux";

import { selectTruckById } from "../../redux/trucks/selectors";

import SpecificationList from "../SpecificationList/SpecificationList";
import VehicleDetails from "../VehicleDetails/VehicleDetails";
import BookingForm from "../BookingForm/BookingForm";

import css from "./Features.module.css";

export default function Features() {
  const truck = useSelector(selectTruckById);

  return (
    <div className={css.featuresContainer}>
      <div className={css.contentWrapper}>
        <div className={css.specificationListWrapper}>
          <SpecificationList truck={truck} />
        </div>
        <div className={css.specificationListWrapper}>
          <h3 className={css.title}>Vehicle details</h3>
          <VehicleDetails truck={truck} />
        </div>
      </div>
      <BookingForm />
    </div>
  );
}
