import css from "./Button.module.css";

// eslint-disable-next-line react/prop-types
export default function Button({ text, onClick, type }) {
  return (
    <button className={css.button} onClick={onClick} type={type}>
      {text}
    </button>
  );
}
