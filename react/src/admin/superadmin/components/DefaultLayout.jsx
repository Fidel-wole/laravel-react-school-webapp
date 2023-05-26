import React, { useContext } from "react";
import Profile from "../../../assets/profile.jpg";
import { userStateContext } from "../../context/ContextProvider";

import { AiOutlineWechat } from "react-icons/ai";
import { AiOutlineBell } from "react-icons/ai";
import { AiFillLock } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";

import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
    const { currentUser } = useContext(userStateContext);;
    return (
        <>
            <section className="header">
                <div className="logo">
                    <div
                        className="menu"
                        onClick={() => setIsNavShowing((prev) => !prev)}
                    >
                        <AiOutlineMenu />
                    </div>

                    <h2>
                        Christ<span>Land</span>
                    </h2>
                </div>
                <div className="search--notification--profile">
                    <div className="search">
                        <input type="search" placeholder="Search Scdule.." />
                        <button>
                            <AiOutlineSearch />
                        </button>
                    </div>
                    <div className="notification--profile">
                        <div className="picon lock">
                            <AiFillLock />
                        </div>
                        <div className="picon bell">
                            <AiOutlineBell />
                        </div>
                        <div className="picon chat">
                            <AiOutlineWechat />
                        </div>
                        <div>
                            <p>{currentUser.firstname}</p>
                        </div>
                        <div className="picon profile">
                            <img src={Profile} alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <Outlet />
        </>
    );
};

export default DefaultLayout;
