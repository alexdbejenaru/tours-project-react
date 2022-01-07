import Tour from "./Tour";

const Tours = ({ data }) => {
    const tours = data;
    return ( 
        <>
            <div className="tours-container">
                {tours.map((tour, index) => (
                    <Tour index={ index } tour={ tour }/>
                ))}
            </div>
        </>
     );
}
 
export default Tours;