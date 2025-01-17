/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import TruckItem from "../TruckItem/TruckItem";
import { selectTrucks } from "../../Redux/Trucks/selectors";
import css from "./TrucksList.module.css";

export default function TrucksList() {
  const trucks = useSelector(selectTrucks);

  return (
    <div className={css.container}>
      <ul className={css.trucksList}>
        {trucks.map((truck) => (
          <li key={truck.id} className={css.TruckItem}>
            <TruckItem truck={truck} />
          </li>
        ))}
      </ul>
    </div>
  );
}
