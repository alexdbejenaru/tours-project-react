import { Link } from "react-router-dom";

const Header = () => {
    return ( 
        <>
        <div className="header-container">
            <h1 className="main-title">NewCity Tours</h1>
            <Link to="/create" href="/create"><button className="cta-button">Add a new tour!</button></Link>
        </div>
        </>
     );
}
 
export default Header;