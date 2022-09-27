import {useState} from 'react'

const AuthModal = ({setShowModal, isSignUp, setIsSignedIn}) => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmedPassword, setConfirmedPassword] = useState(null)
    const [error, setError] = useState(null)

    console.log(email, password, confirmedPassword);

    const handleClick = () =>{
        setShowModal(false);
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        try {
            if(isSignUp && password !== confirmedPassword){
                setError('Password need to match!')
            }
            console.log('make a post request to our database')
        } catch(error){
            console.log(error);
        }
        setIsSignedIn(true);
    }

    return (
        <div className="auth-modal">
            <div className="close-icon" onClick={handleClick}>ⓧ</div>
            <h2>{isSignUp? 'CREATE ACCOUNT': 'LOG IN'}</h2>
            <p>By clicking Log In, you agree to our terms. Learn how we process your data in our Private Policy and Cookie Policy.</p>
            <form onSubmit={handleSubmit}>
                <input
                type="email"
                id="email"
                name="email"
                placeholder="email"
                required={true}
                onChange={(e) => setEmail(e.target.value)}
                />
                <input
                type="password"
                id="password"
                name="password"
                placeholder="password"
                required={true}
                onChange={(e) => setPassword(e.target.value)}
                />
                {isSignUp && <input
                type="password"
                id="password-check"
                name="password-check"
                placeholder="confirm password"
                required={true}
                onChange={(e) => setConfirmedPassword(e.target.value)}
                />}

                <input className="secondary-button" type="submit"/>
                <p>{error}</p>
            </form>
            <hr/>
        </div>
    )
}

export default AuthModal;