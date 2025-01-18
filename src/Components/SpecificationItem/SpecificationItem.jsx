/* eslint-disable react/prop-types */
import icons from "/icons/icons.svg";

import css from "./SpecificationItem.module.css";

export default function SpecificationItem({ text, icon }) {
  return (
    <>
      <svg height={20} width={20} className={css.icon}>
        <use href={`${icons}#${icon}`} />
      </svg>
      <p>{text}</p>
    </>
  );
}
