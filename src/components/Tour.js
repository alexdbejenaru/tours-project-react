import { useState } from "react";

const Tour = ({ removeTour, tour }) => {
    const [ readMore, setReadMore ] = useState(false);
    return ( 
        <div key={tour.id} className="tour">
            <h1 className="tour_title">{tour.name}</h1>
            <img className="tour_image" src={tour.image} alt={tour.name} />
            <p className="tour_text">
                {readMore ? tour.info : `${tour.info.substring(0, 200)}...`}<span className="show-more-btn" onClick={() => setReadMore(!readMore)}>{readMore ? ' Show less' : ' Read more...'}</span>
            </p>
            <div className="tour_footer">
                <button onClick={() => removeTour(tour.id)} className="cta-button delete-btn">Delete tour</button>
                <p className="tour_price">{tour.price}<span>$</span></p>
            </div>
        </div>
     );
}
 
export default Tour;