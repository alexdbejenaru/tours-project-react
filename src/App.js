import { useState, useEffect } from "react";
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateTour from "./pages/CreateTour";


function App() {
  const url = 'https://my-travel-tours-api.herokuapp.com/tours';
  const [ data, setData ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(false);
  
  const fetchTours = () => {
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json()
      }
      throw response;
    })
    .then(data => {
      setData(data);
    })
    .catch(error => {
      console.error('Error fetching data: ' + error);
      setError(error);
    })
    .finally(() => {
      setLoading(false);
    })
  }
  
  useEffect(() => {
    fetchTours();
  }, [])

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Homepage loading={ loading } error={ error } data={ data } />} />
          <Route path="/create" element={<CreateTour />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
