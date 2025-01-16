import css from "./CatalogPage.module.css";
import SearchFilter from "../../Components/SearchFilter/SearchFilter";
import TrucksList from "../../Components/TrucksList/TrucksList";

export default function CatalogPage() {
  return (
    <section className={css.section}>
      <SearchFilter />
      <TrucksList />
      <h1>CatalogPage</h1>
    </section>
  );
}
