/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";

import { selectFilters, selectForm } from "../../redux/filters/selector";

import { Specification } from "./Specification";
import SpecificationItem from "../SpecificationItem/SpecificationItem";

import css from "./SpecificationList.module.css";

export default function SpecificationList({ truck }) {
  const specifications = Specification(truck);
  const equipment = useSelector(selectFilters);
  const type = useSelector(selectForm);

  return (
    <ul className={css.specificationList}>
      {specifications
        .filter((specification) => specification.condition)
        .map((specification) => (
          <li
            key={`${truck.id}-${specification.id}`}
            className={`${css.specificationListItem} ${
              equipment[specification.id] || type === specification.id
                ? css.active
                : ""
            }`}
          >
            <SpecificationItem
              text={specification.text}
              icon={specification.icon}
            />
          </li>
        ))}
    </ul>
  );
}
