import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CreateTour = ({ fetchTours }) => {
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
            fetchTours();
        })
    }

    return ( 
        <section className="create-container">
            <div className="create">
                <div className="create_header">
                    <h2 className="create_header__title">Add a new tour</h2>
                    <Link to="/" href="/"><button className="cta-button create_header__btn">Go back to Homepage</button></Link>
                </div>
                <form className="create_form" onSubmit={handleSubmit}>
                    <label>Tour title</label>
                    <input value={ name } onChange={(e) => setName(e.target.value)} type="text" required />
                    <label>Tour info</label>
                    <textarea
                    rows="6"
                        required
                        value={ info }
                        onChange={(e) => setInfo(e.target.value)}></textarea>
                    <label>Image URL</label>
                    <input value={ image } onChange={(e) => setImage(e.target.value)} type="text" required />
                    <label>Price</label>
                    <input value={ price } onChange={(e) => setPrice(e.target.value)} type="number" required />
                    { !isPending && <button className="cta-button create_form__button">Add tour</button> }
                    { isPending && <button className="cta-button create_form__button" disabled>Adding tour...</button> }
                </form>
                <div className="create_preview">
                    <h2 className="create_preview__title">Preview</h2>
                    <p className="create_preview__fields"><span>Title: </span>{ name }</p>
                    <p className="create_preview__fields"><span>Info about tour: </span>{ info }</p>
                    <p className="create_preview__fields"><span>Price: </span>{ price }<span>$</span></p>
                </div>
            </div>
        </section>
     );
}
 
export default CreateTour;