import Tour from "./Tour";

const Tours = ({ fetchTours, removeTour, data }) => {
    const tours = data;
    return ( 
        <>
            <div className="tours-container">
                {tours.map((tour, index) => (
                    <Tour key={index} fetchTours={ fetchTours } removeTour={ removeTour } index={ index } tour={ tour }/>
                ))}
            </div>
        </>
     );
}
 
export default Tours;