import { useDispatch, useSelector } from "react-redux";

import { selectForm } from "../../Redux/filters/selector";
import { setForm } from "../../Redux/filters/slice";

import icons from "../../../public/icons/icons.svg";
import { type } from "./type";

import css from "./TruckType.module.css";

export default function TruckType() {
  const dispatch = useDispatch();
  const selectedFormType = useSelector(selectForm);

  const handleClick = (value) => {
    if (selectedFormType === value) {
      dispatch(setForm(""));
    } else {
      dispatch(setForm(value));
    }
  };

  return (
    <div className={css.div}>
      <p className={css.text}>Vehicle type</p>
      <hr className={css.line} />
      <ul className={css.inputsWrapper}>
        {type.map(({ name, value }) => (
          <li key={value} className={css.listItem}>
            <label
              className={`${css.label} ${
                selectedFormType === value ? css.checked : ""
              }`}
            >
              <input
                className={css.input}
                type="radio"
                name="typeForm"
                aria-label={name}
                value={value}
                onClick={() => handleClick(value)}
              />
              <div className={css.contentWrapper}>
                <svg width={32} height={32}>
                  <use href={`${icons}#${value}`} />
                </svg>
                <span>{name}</span>
              </div>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
