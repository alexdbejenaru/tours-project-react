const Tour = ({ index, tour }) => {
    return ( 
        <div key={index} className="tour">
            <h1 className="tour_title">{tour.name}</h1>
            <img className="tour_image" src={tour.image} alt={tour.name} />
            <p className="tour_text">{tour.info}</p>
            <div className="tour_footer">
                <button className="cta-button delete-btn">Delete tour</button>
                <p className="tour_price">{tour.price}<span>$</span></p>
            </div>
        </div>
     );
}
 
export default Tour;