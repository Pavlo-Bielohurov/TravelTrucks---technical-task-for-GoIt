import { Link } from "react-router";

import css from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <div className={css.div}>
      <h1 className={css.title}>We apologize, but such page does not exist!</h1>
      <Link to="/">
        <button type="button" className={css.btn}>
          Go Home
        </button>
      </Link>
    </div>
  );
}
