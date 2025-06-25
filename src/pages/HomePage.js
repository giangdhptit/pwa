import Navbar from "../components/Navbar"
import Banner from "../components/Banner"
import { useEffect } from "react";
import Row from "../components/Row";
import { mockMovies } from "../constants/mockData";

const HomePage = () => {

/**
 * fetch the data from the backend
 *
 *save it in a state

 state => {categ1: [], categ2: []}


 */

 useEffect(() => {
/**fetch the data from the backend */
// *save it in a state

//  state => {categ1: [], categ2: []}
 })

  return (
    <div
      className="page"
      style={{ backgroundColor: "#111", overflow: "hidden" }}
    >
      <Navbar />
      <Banner />
      <Row title="Top Rated" movies={mockMovies.movies["Top Rated"]}/>
    </div>
  );
};

export default HomePage;
