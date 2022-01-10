import Header from "../components/Header";
import Loading from "../components/Loading";
import Tours from "../components/Tours";

const Homepage = ({ fetchTours, removeTour, loading, error, data}) => {
    if (data.length === 0) {
        return (
          <main className="app">
            <section className="app_container no-tours">
              <h2 className="create_header__title">No more tours. Refresh?</h2>
              <button onClick={() => fetchTours()} className="cta-button">Refresh</button>
            </section>
          </main>
        )
    } else {
        return ( 
            <>
                {loading && <Loading />}
                {error && <div>{ error }</div>}
                {data && (
                <main className="app">
                    <section className="app_container">
                    <Header />
                    <Tours removeTour={removeTour} data={ data }/>
                    </section>
                </main>
                )}
            </>
         );
    }
}
 
export default Homepage;