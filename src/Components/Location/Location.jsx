import { useDispatch, useSelector } from "react-redux";

import { selectLocation } from "../../Redux/filters/selector";
import { setLocation } from "../../Redux/filters/slice";

import icons from "../../../public/icons/icons.svg";

import { citiList } from "../../../public/citiList";

import css from "./Location.module.css";

const LocationSelect = () => {
  const dispatch = useDispatch();
  const selectedLocation = useSelector(selectLocation);

  const handleChange = (e) => {
    dispatch(setLocation(e.target.value));
  };

  return (
    <div className={css.wrapper}>
      <label className={css.label} htmlFor="location-select">
        Location
      </label>
      <div className={css.selectWrapper}>
        <svg className={css.icon} width={20} height={20}>
          <use href={`${icons}#map`} />
        </svg>
        <select
          className={css.customSelect}
          id="location-select"
          value={selectedLocation}
          onChange={handleChange}
        >
          <option value="">City</option>
          {citiList.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default LocationSelect;
