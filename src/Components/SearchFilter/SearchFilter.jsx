import Location from "../Location/Location";
import Equipment from "../Eguipment/Eguipment";
import TruckType from "../TruckType/TruckType";

import css from "./SearchFilter.module.css";

export default function SearchFilter() {
  return (
    <div className={css.wrapper}>
      <Location />
      <h3 className={css.title}>Filters</h3>
      <Equipment />
      <TruckType />
    </div>
  );
}
