import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";
import Navigation from "../Navigation/Navigation";
// import "./App.css";

const CatalogPage = lazy(() =>
  import("../../Pages/CatalogPage/CatalogPage.jsx")
);
const DetailsPage = lazy(() =>
  import("../../Pages/DetalisPage/DetailsPage.jsx")
);
const FavoritePage = lazy(() =>
  import("../../Pages/FavoritePage/FavoritePage.jsx")
);
const HomePage = lazy(() => import("../../Pages/HomePage/HomePage.jsx"));
const NotFoundPage = lazy(() =>
  import("../../Pages/NorFoundPage/NotFoundPage.jsx")
);
const Features = lazy(() => import("../Features/Features.jsx"));
const Reviews = lazy(() => import("../Reviews/Reviews.jsx"));

function App() {
  return (
    <Suspense fallback={<h1>Loader</h1>}>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<DetailsPage />}>
          <Route path="features" element={<Features />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
