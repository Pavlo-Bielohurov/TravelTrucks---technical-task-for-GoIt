import css from "./CatalogPage.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import SearchFilter from "../../Components/SearchFilter/SearchFilter";
import TrucksList from "../../Components/TrucksList/TrucksList";
import { getTrucks } from "../../Redux/Trucks/operations";
import { selectTrucks } from "../../Redux/Trucks/selectors";

export default function CatalogPage() {
  const dispatch = useDispatch();
  const trucks = useSelector(selectTrucks);
  useEffect(() => {
    dispatch(getTrucks());
  }, [dispatch]);

  return (
    <section className={css.section}>
      <SearchFilter />
      <TrucksList trucks={trucks} />
      <h1>CatalogPage</h1>
    </section>
  );
}
