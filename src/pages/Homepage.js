import Header from "../components/Header";
import Loading from "../components/Loading";
import Tours from "../components/Tours";

const Homepage = ({ loading, error, data}) => {
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
 
export default Homepage;