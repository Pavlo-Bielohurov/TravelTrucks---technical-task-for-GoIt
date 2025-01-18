import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { getAllTrucks } from "../../Redux/Trucks/operations";
import { selectLimit } from "../../Redux/Trucks/selectors";
import { resetPage } from "../../Redux/Trucks/slice";
import {
  selectFilters,
  selectForm,
  selectLocation,
} from "../../Redux/filters/selector";

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
      {/* <Container> */}
      {/* <PageContainer> */}
      <SearchFilter />
      <TrucksList />
      {/* </PageContainer> */}
      {/* </Container> */}
    </div>
  );
}
