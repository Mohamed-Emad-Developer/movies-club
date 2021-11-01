import "./App.css";
import { useState, useEffect } from "react";
import Footer from "./layout/Footer/Footer";
import Header from "./layout/Header/Header";
import { FaAngleDoubleUp } from "react-icons/fa";
import Movies from "./components/Movies";
const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

// const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=${Math.floor(
//   Math.random() * 100 + 1
// )}`;

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [title, setTitle] = useState("All Movies");
  // for getting all movies in specific API
  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  };
  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  // -----------------------------------------------------------------
  // for submit search term
  const handleOnSubmit = (e) => {
    e.preventDefault();

    // if searchTerm has a value
    if (searchTerm) {
      // for getting all movies in SEARCH_API
      getMovies(SEARCH_API + searchTerm);
    }
  };
  const handleOnChangeEvent = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <>
      <Header
        onSearch={handleOnSubmit}
        value={searchTerm}
        onChange={handleOnChangeEvent}
      />
      <div className="container">
        <h1 className="text-light">{title}</h1>
        <Movies movies={movies} />
      </div>
      <Footer />
      <a href="#header">
        <FaAngleDoubleUp className="up shadow-lg border" style={{}} />
      </a>
    </>
  );
}

export default App;
