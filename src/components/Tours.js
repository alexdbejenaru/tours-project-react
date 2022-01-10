import Tour from "./Tour";

const Tours = ({ removeTour, data }) => {
    const tours = data;
    return ( 
        <>
            <div className="tours-container">
                {tours.map((tour, index) => (
                    <Tour removeTour={ removeTour } index={ index } tour={ tour }/>
                ))}
            </div>
        </>
     );
}
 
export default Tours;