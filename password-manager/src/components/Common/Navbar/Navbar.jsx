import React, { useState } from 'react'; // Import useState
import Styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Navbar() {
    const isAuthenticated = useAuth();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to manage dropdown visibility

    const navigate = useNavigate();

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const Logout = async (e) => {

        try {
            const response = await axios.get("http://localhost:8080/auth/logout", {
                withCredentials: true
            });


            if (response.status === 202) {
                navigate("/login")
            }




        } catch (error) {
            console.error(error);
            console.log("error");
        }
    };

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
                        <div onClick={toggleDropdown}>
                            <FontAwesomeIcon icon={faChevronDown} className={Styles.arrowDown} />
                        </div>


                        {isDropdownOpen && (
                            <div className={Styles.dropdownMenu}>
                                <span className={Styles.dropdownItem}>Profile Settings</span>
                                <span onClick={Logout} className={Styles.dropdownItem}>Logout</span>
                            </div>
                        )}
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default Navbar;
