import {useState} from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom"; // Ensure this is included


function Login() {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate(); // Initialize the navigate function

    const LoginIn = async (e) => {
        const data = { email: login, password: password };

        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8080/auth/login", {
                password: data.password,
                email: data.email,
            }, {
                withCredentials: true
            });


            if (response.status === 401) {
                throw new Error('Incorrect login or password');
            }


        } catch (error) {
            console.error(error);
            console.log("error");
        }
    };

    return (

        <div>
            <div>

                <div className="login">
                    <form>
                        <label  aria-hidden="true">Login</label>
                        <input  onChange={(e) => setLogin(e.target.value)} type="email" name="email" placeholder="Email" />
                        <input  onChange={(e) => setPassword(e.target.value)} type="password" name="pswd" placeholder="Password" />
                        <button onClick={LoginIn}>Login</button>
                        {/*<button onClick={routeChangeSignUp} className={Styles.button}>Signup</button>   */}

                    </form>
                </div>
            </div>
        </div>


    )
}

export default Login;