import { useContext } from "react";
import { userStateContext } from "../../admin/context/ContextProvider";
import "./login.css";
import { Navigate } from "react-router-dom";
import axiosClient from "../../axios.js";
import { useState } from "react";
const Login = () => {
   
    const { userToken, setCurrentUser, setUserToken } = useContext(userStateContext); // Corrected line
    if (userToken) {
        return <Navigate to="/" />;
    };
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({ __html: "" });
    const onSubmit = (ev) => {
        ev.preventDefault();
        setError({ __html: "" });

        axiosClient
            .post("/login", {
                email,
                password,
            })
            .then(({ data }) => {
                setCurrentUser(data.user);
                setUserToken(data.token);
            })
            .catch((error) => {
                if (error.response) {
                    const finalErrors = Object.values(
                        error.response.data.errors
                    ).reduce((accum, next) => [...next, ...accum], []);
                    console.log(finalErrors);
                    setError({ __html: finalErrors.join("<br>") });
                }
                console.error(error);
            });
    };

    return (
        <>
            <div className="main-container">
                <div className="form-container">
                    <div className="form-body">
                        <h2 className="title">Log in with</h2>
                        <div className="social-login">
                            <ul>
                                <li className="google">
                                    <a href="#">Google</a>
                                </li>
                                <li className="fb">
                                    <a href="#">Facebook</a>
                                </li>
                            </ul>
                        </div>

                        <div className="_or">or</div>

                        <form
                            action="login"
                            method="POST"
                            onSubmit={onSubmit}
                            className="the-form"
                        >
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your Password"
                            />

                            <input type="submit" value="Log In" />
                        </form>
                    </div>

                    <div className="form-footer">
                        <div>
                            <span>Don't have an account?</span>{" "}
                            <a href="">Sign Up</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

  

export default Login;
