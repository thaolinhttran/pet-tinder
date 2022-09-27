import logo from '../assets/logo.png'
import {useState} from 'react'
const Nav = ({setShowModal, showModal, setIsSignUp}) => {
    const [isSignedIn, setIsSignedIn] = useState(false);
    
    const handleClick = () => {
        setShowModal(true)
        setIsSignUp(false)
    }

    const authToken = true;

    return (
        <nav className="logo-container">
            <img className ="logo" src={logo}/>
        <div>
        {!isSignedIn && 
        (<button 
        className = "nav-button"
        onClick={handleClick}
        disabled={showModal}
        >
            Log in
            </button>
        )}
        {isSignedIn &&(
            <button className = "nav-button"
            onClick={handleClick}>
                Create Pet
            </button>
        )}
        </div>
        </nav>
    )
}

export default Nav;