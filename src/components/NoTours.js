const NoTours = ({ fetchTours }) => {
    return ( 
        <>
            <main className="app">
                <section className="app_container no-tours">
                <h2 className="create_header__title">No more tours. Refresh?</h2>
                <button onClick={() => fetchTours()} className="cta-button">Refresh</button>
                </section>
            </main>
        </>
     );
}
 
export default NoTours;