import React, { useState } from "react";
import "./signup.css";
import axiosClient from "../../axios.js";
import { userStateContext } from "../context/ContextProvider";
import { Navigate } from "react-router-dom";
export const AddTeacher = () => {
    const [firstname, setFirstname] = useState("");
    const [middlename, setMiddlename] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phone_number, setphonenumber] = useState("");
    const [address, setAddress] = useState("");
    const [avatar, setAvatar] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState({ __html: "" });

    const onSubmit = (ev) => {
        ev.preventDefault();
        setError({ __html: "" });

        axiosClient
            .post("/signup", {
                firstname,
                middlename,
                lastname,
                email,
                phone_number,
                address,
                avatar,
                password,
                password_confirmation: confirmPassword,
            })
            .then(({ data }) => {
                console.log(data);
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
    const { userToken } = userStateContext;
    if (userToken) {
        return <Navigate to="/"></Navigate>;
    }
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

                        {error.__html && (
                            <div
                                className="errorMessage"
                                dangerouslySetInnerHTML={error}
                            ></div>
                        )}

                        <form
                            onSubmit={onSubmit}
                            action="signup"
                            method="POST"
                            className="the-form"
                            encType="multipart/form-data"
                        >
                            <label htmlFor="firstname">Firstname</label>
                            <input
                                type="text"
                                name="firstname"
                                id="firstname"
                                placeholder="Enter your firstname"
                                value={firstname}
                                onChange={(e) => setFirstname(e.target.value)}
                            />
                            <label htmlFor="middlename">Middlename</label>
                            <input
                                type="text"
                                name="middlename"
                                id="middlename"
                                placeholder="Enter your middlename"
                                value={middlename}
                                onChange={(e) => setMiddlename(e.target.value)}
                            />

                            <label htmlFor="lastname">Lastname</label>
                            <input
                                type="text"
                                name="lastname"
                                id="lastname"
                                value={lastname}
                                onChange={(e) => setLastname(e.target.value)}
                                placeholder="Enter your Lastname"
                            />
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                            />
                            <label htmlFor="number">Phone number</label>
                            <input
                                type="number"
                                name="phone_number"
                                id="phone_number"
                                value={phone_number}
                                onChange={(e) => setphonenumber(e.target.value)}
                                placeholder="Enter your phone number"
                            />

                            <label htmlFor="address">Address</label>
                            <input
                                type="text"
                                name="address"
                                id="address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                placeholder="Enter your address"
                            />
                            <label>Avatar</label>
                            <input
                                type="file"
                                name="avatar"
                                id="avatar"
                                value={avatar}
                                onChange={(e) => setAvatar(e.target.value)}
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
                            <label htmlFor="confirmPassword">Password</label>
                            <input
                                type="password"
                                name="password_confirmation"
                                id="confirmPassword"
                                // value={password_confirmation}
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
                                placeholder="Enter your Password"
                            />

                            <input type="submit" value="Sign In" />
                        </form>
                    </div>

                    <div className="htmlForm-footer">
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
