import { useState, useEffect } from "react";
import Header from "./components/Header";
import Loading from "./components/Loading";
import Tours from "./components/Tours";


function App() {
  const url = 'https://my-travel-tours-api.herokuapp.com/tours';
  const [ data, setData ] = useState(null);
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
    {loading && <Loading />}
    {error && <div>{ error }</div>}
    {data && (
      <main className="app">
        <section className="app_container">
          <Header />
          <Tours data={ data }/>
        </section>
      </main>
    )}
    </>
  );
}

export default App;
