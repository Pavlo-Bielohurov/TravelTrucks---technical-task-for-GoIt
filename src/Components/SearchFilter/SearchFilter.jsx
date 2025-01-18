import Location from "../Location/Location";
import Equipment from "../Eguipment/Eguipment";
import TruckType from "../TruckType/TruckType";

import css from "./SearchFilter.module.css";

export default function SearchFilter() {
  return (
    <div className={css.wrapper}>
      <Location />
      <p className={css.text}>Filters</p>
      <Equipment />
      <TruckType />
    </div>
  );
}
