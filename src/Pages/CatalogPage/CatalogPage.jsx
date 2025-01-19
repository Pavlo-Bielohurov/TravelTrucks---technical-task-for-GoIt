import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { getAllTrucks } from "../../redux/trucks/operations";
import { selectLimit } from "../../redux/trucks/selectors";
import { resetPage } from "../../redux/trucks/slice";
import {
  selectFilters,
  selectForm,
  selectLocation,
} from "../../redux/filters/selector";

import TrucksList from "../../Components/TrucksList/TrucksList";
import SearchFilter from "../../Components/SearchFilter/SearchFilter";

import filter from "../../utils/filter";

import css from "./CatalogPage.module.css";

export default function CatalogPage() {
  const dispatch = useDispatch();
  const limit = useSelector(selectLimit);
  const location = useSelector(selectLocation);
  const equipment = useSelector(selectFilters);
  const form = useSelector(selectForm);

  useEffect(() => {
    dispatch(resetPage());
    const filters = filter({
      page: 1,
      limit,
      location,
      equipment,
      form,
    });
    dispatch(getAllTrucks(filters));
  }, [dispatch, limit, location, equipment, form]);

  return (
    <div className={css.mainwrapper}>
      <div className={css.container}>
        <SearchFilter />
        <TrucksList />
      </div>
    </div>
  );
}
