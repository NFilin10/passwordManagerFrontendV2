// Navbar.js
import Styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import useAuth from "../../../hooks/useAuth";

function Navbar() {
    const isAuthenticated = useAuth();

    return (
        <div className={Styles.wrapper}>
            <div className={Styles.main}>
                <div className={Styles.appName}>
                    <a href="/"><h4>KeePass</h4></a>
                </div>

                {isAuthenticated ? (
                    <div className={Styles.profile}>
                        <a className={Styles.profileSection} href="#">
                            <span><strong>Hi, nfilin</strong></span>
                            <img className={Styles.profileImg}
                                 src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                                 alt="Profile" />
                        </a>
                        <FontAwesomeIcon icon={faChevronDown} className={Styles.arrowDown} />
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default Navbar;
