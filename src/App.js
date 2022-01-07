import { useState, useEffect } from "react";
import Header from "./components/Header";


function App() {
  const url = 'https://my-travel-tours-api.herokuapp.com/tours';
  const [ data, setData ] = useState(null);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(false);
  
  useEffect(() => {
    fetch(url)
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
      console.log(data);
  }, [])

  return (
    <>
    <main className="app">
      <section className="app_container">
        <Header />
      </section>
    </main>
    </>
  );
}

export default App;
