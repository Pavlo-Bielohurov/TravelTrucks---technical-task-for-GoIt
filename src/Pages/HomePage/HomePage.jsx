import { Link } from "react-router";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <section className={css.hero}>
      <div className={css.container}>
        <h1 className={css.title}>Campers of your dreams</h1>
        <p className={css.text}>
          You can find everything you want in our catalog
        </p>
        <Link to="/catalog">
          <button type="button" className={css.btn}>
            View Now
          </button>
        </Link>
      </div>
    </section>
  );
}
