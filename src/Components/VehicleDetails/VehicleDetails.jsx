/* eslint-disable react/prop-types */
import css from "./VehicleDetails.module.css";

export default function VehicleDetails({ truck }) {
  return (
    <ul className={css.list}>
      <li className={css.listItem}>
        <span>Form</span>
        <span>{truck.form ? truck.form : null}</span>
      </li>
      <li className={css.listItem}>
        <span>Length</span>
        <span>{truck.length ? truck.length : null}</span>
      </li>
      <li className={css.listItem}>
        <span>Width</span>
        <span>{truck.width ? truck.width : null}</span>
      </li>
      <li className={css.listItem}>
        <span>Height</span>
        <span>{truck.height ? truck.height : null}</span>
      </li>
      <li className={css.listItem}>
        <span>Tank</span>
        <span>{truck.tank ? truck.tank : null}</span>
      </li>
      <li className={css.listItem}>
        <span>Consumption</span>
        <span>{truck.consumption ? truck.consumption : null}</span>
      </li>
    </ul>
  );
}
