import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import { useEffect } from "react";
import Row from "../components/Row";
import { mockMovies } from "../constants/mockData";
import { useDispatch, useSelector } from "react-redux";
import {
  getMovies,
  getMoviesError,
  getMoviesStatus,
  selectAllMovies,
} from "../slices/movieSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const status = useSelector(getMoviesStatus);
  const movies = useSelector(selectAllMovies);
  const error = useSelector(getMoviesError);


  useEffect(() => {
    if (status === "idle") {
      dispatch(getMovies());
    }
  });

  return (
    <div
      className="page"
      style={{ backgroundColor: "#111", overflow: "hidden" }}
    >
      <Navbar />
      <Banner />
      <Row title="Top Rated" movies={mockMovies.movies["Top Rated"]} />
      <Row title="Comedy" movies={mockMovies.movies["Comedy"]} />
      <Row title="Documentaries" movies={mockMovies.movies["Documentaries"]} />
      <Row title="Horror" movies={mockMovies.movies["Horror"]} />
      <Row title="Romance" movies={mockMovies.movies["Romance"]} />
    </div>
  );
};

export default HomePage;
