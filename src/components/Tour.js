import { useState } from "react";


const Tour = ({ fetchTours, removeTour, tour }) => {
    const [ readMore, setReadMore ] = useState(false);
    const url = 'https://my-travel-tours-api.herokuapp.com/tours/';

    const handleDelete = userId => {
        const requestOptions = {
          method: 'DELETE'
        };
      
        // Note: I'm using arrow functions inside the `.fetch()` method.
        // This makes it so you don't have to bind component functions like `setState`
        // to the component.
        fetch(url + userId, requestOptions).then((response) => {
          return response.json();
        }).then((result) => {
            console.log(result);
            fetchTours();
          // do what you want with the response here
        });
      }

    return ( 
        <div key={tour.id} className="tour">
            <h1 className="tour_title">{tour.name}</h1>
            <img className="tour_image" src={tour.image} alt={tour.name} />
            <p className="tour_text">
                {readMore ? tour.info : `${tour.info.substring(0, 200)}...`}<span className="show-more-btn" onClick={() => setReadMore(!readMore)}>{readMore ? ' Show less' : ' Read more...'}</span>
            </p>
            <div className="tour_footer">
                <button onClick={() => removeTour(tour.id)} className="cta-button delete-btn">Not interested</button>
                <button onClick={() => handleDelete(tour.id)} className="cta-button delete-btn-dtb">Delete blog from database</button>
                <p className="tour_price">{tour.price}<span>$</span></p>
            </div>
        </div>
     );
}
 
export default Tour;