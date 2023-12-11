import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import MoviesList from "./components/MoviesList";
import MovieDetails from "./components/MovieDetails";

function App() {

  return (
    <>


      <BrowserRouter>

        <Header />

        <Container className="my-5">

          <Routes>


            <Route path="/" element={< MoviesList />} />


            <Route path="/details/:id" element={<MovieDetails />} />


          </Routes>




        </Container>

      </BrowserRouter>






    </>
  );
}

export default App;
