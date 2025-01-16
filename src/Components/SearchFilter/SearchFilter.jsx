import css from "./SearchFilter.module.css";
import Button from "../Button/Button";

export default function SearchFilter() {
  return (
    <div className={css.div}>
      <p>Location</p>
      <p>Filters</p>
      <Button text="Search" />
    </div>
  );
}
