import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateTour = ({ rerender }) => {
    const [ name, setName ] = useState('');
    const [ info, setInfo ] = useState('');
    const [ image, setImage ] = useState('');
    const [ price, setPrice ] = useState('');
    const url = 'https://my-travel-tours-api.herokuapp.com/tours';
    const [ isPending, setIsPending ] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        const tour = { name, info, image, price };

        setIsPending(true);

        fetch(url, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(tour)
        }).then(() => {
            console.log('new blog added');
            setIsPending(false);
            navigate('/', { replace: true });
        })
    }

    return ( 
        <>
            <div className="create">
                <h2 className="create-tour-title">Add a new tour</h2>
                <form onSubmit={handleSubmit}>
                    <label>Tour title:</label>
                    <input value={ name } onChange={(e) => setName(e.target.value)} type="text" required />
                    <label>Tour info:</label>
                    <textarea
                        required
                        value={ info }
                        onChange={(e) => setInfo(e.target.value)}></textarea>
                    <label>Image URL:</label>
                    <input value={ image } onChange={(e) => setImage(e.target.value)} type="text" required />
                    <label>Price:</label>
                    <input value={ price } onChange={(e) => setPrice(e.target.value)} type="number" required />
                    { !isPending && <button>Add tour</button> }
                    { isPending && <button disabled>Adding tour...</button> }
                    <p>{ name }</p>
                    <p>{ info }</p>
                    <p>{ image }</p>
                    <p>{ price }</p>
                </form>
            </div>
        </>
     );
}
 
export default CreateTour;