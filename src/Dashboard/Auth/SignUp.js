import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
export default function SignUp() {
    return (
        <>
            <div className="login-container">
                <div>
                    <h1 className="brand-logo">madgicx</h1>
                </div>
                <h5>The SuperApp for Meta Advertisers</h5>
                <div className="review-section">
                    <div>
                        <img src="https://via.placeholder.com/30" alt="G2 Review" />
                        <p>145+ Reviews</p>
                        <span>4.7</span>
                    </div>
                    <div>
                        <img src="https://via.placeholder.com/30" alt="Other Review" />
                        <p>51+ Reviews</p>
                        <span>4.8</span>
                    </div>
                </div>

                <button className="btn-google"> <FontAwesomeIcon icon={faGoogle} className="me-2" />Log in with Google</button>
                <p>or</p>
                <button className="btn-email"><FontAwesomeIcon icon={faEnvelope} className="me-2" />Log in with Email</button>
                <div >
                    <p>Already have Account? <Link to={'/Login'} className="text-decoration-none">Login</Link></p>
                </div>
            </div>

            <footer>
                <p>GUESS | LIU·JO | RIP CURL | SNIPES | JAMES ALLEN | DAMAC</p>
            </footer>
        </>
    )
}