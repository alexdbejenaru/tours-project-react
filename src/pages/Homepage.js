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
            {data && data.length!==0 ? (
            <main className="app">
                <section className="app_container">
                <Header />
                <Tours fetchTours={ fetchTours } removeTour={removeTour} data={ data }/>
                </section>
            </main>
            ) : <></>}
        </>
    );
}
 
export default Homepage;