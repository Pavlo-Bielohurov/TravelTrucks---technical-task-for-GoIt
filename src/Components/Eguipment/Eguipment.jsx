import { useDispatch, useSelector } from "react-redux";

import { toggleFilters } from "../../Redux/filters/slice";
import { selectFilters } from "../../Redux/filters/selector";

import icons from "/icons/icons.svg";
// import { capitalize } from "../../helpers/utils";

import css from "./Eguipment.module.css";

export const Equipment = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  const options = Object.keys(filters);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    dispatch(toggleFilters({ name, checked }));
  };

  return (
    <div className={css.div}>
      <legend className={css.title}>Vehicle equipment</legend>
      <hr className={css.line} />
      <ul className={css.inputsWrapper}>
        {options.map((item) => (
          <li key={item} className={css.listItem}>
            <label
              className={`${css.label} ${filters[item] ? css.checked : ""}`}
            >
              <input
                className={css.input}
                type="checkbox"
                name={item}
                checked={filters[item]}
                onChange={handleChange}
              />
              <div className={css.contentWrapper}>
                <svg width={32} height={32}>
                  <use href={`${icons}#${item}`} />
                </svg>
                <span>{item}</span>
              </div>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Equipment;
