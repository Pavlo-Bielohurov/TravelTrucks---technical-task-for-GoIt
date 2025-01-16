import css from "./HomePage.module.css";
import Button from "../../Components/Button/Button";
import { Link } from "react-router";
export default function HomePage() {
  return (
    <section className={css.section}>
      <div className={css.div}>
        <h1 className={css.title}>Campers of your dreams</h1>
        <p className={css.text}>
          You can find everything you want in our catalog
        </p>
        <Link to="/catalog" className={css.link}>
          <Button text="View Now" type="button" />
        </Link>
      </div>
    </section>
  );
}
