import { Rings } from "react-loader-spinner";

import css from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={css.div}>
      <Rings visible={true} height="100" width="100" color="#e44848" />
    </div>
  );
}
