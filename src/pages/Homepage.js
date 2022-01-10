import Header from "../components/Header";
import Loading from "../components/Loading";
import NoTours from "../components/NoTours";
import Tours from "../components/Tours";

const Homepage = ({ fetchTours, removeTour, loading, error, data}) => {
    return ( 
        <>
            {loading && <Loading />}
            {error && <div>{ error }</div>}
            {data.length === 0 && <NoTours fetchTours={ fetchTours }/>}
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
 
export default Homepage;