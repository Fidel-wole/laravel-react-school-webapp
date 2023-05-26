import React from "react";
import { useState } from "react";
import {
    AiFillSetting,
    AiOutlineBarChart,
    AiOutlineCalendar,
    AiOutlineCustomerService,
    AiOutlineEdit,
    AiOutlineLineChart,
    AiOutlineWechat,
} from "react-icons/ai";
import { BsFillPersonCheckFill, BsFillPersonFill } from "react-icons/bs";
import { MdDashboard, MdGroupAdd, MdLogout } from "react-icons/md";
const Navbar = () => {
    const [isNavshowing, setIsNavShowing] = useState(false);
    const [activeNav, setActiveNav] = useState("#");
    return (
        <>
            <div className="sidebar">
                <ul
                    className={`sidebar--items ${
                        isNavshowing ? "active" : "hide__nav"
                    }`}
                >
                    <li>
                        <a
                            href="#"
                            className={activeNav === "#" ? "active--link" : ""}
                            onClick={() => setActiveNav("#")}
                        >
                            <span className="icon icon-1">
                                <MdDashboard />
                            </span>
                            <span className="sidebar--item">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon icon-2">
                                <AiOutlineCalendar />
                            </span>
                            <span className="sidebar--item">Schedule</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon icon-3">
                                <BsFillPersonCheckFill />
                            </span>
                            <span
                                className="sidebar--item"
                                style={{ whiteSpace: "nowrap" }}
                            >
                                Reliable Teachers
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon icon-4">
                                <BsFillPersonFill />
                            </span>
                            <span className="sidebar--item">Students</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon icon-5">
                                <AiOutlineLineChart />
                            </span>
                            <span className="sidebar--item">Activity</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon icon-6">
                                <AiOutlineCustomerService />
                            </span>
                            <span className="sidebar--item">Support</span>
                        </a>
                    </li>
                </ul>
                <ul className="sidebar--bottom-items">
                    <li>
                        <a href="#">
                            <span className="icon icon-7">
                                <AiFillSetting />
                            </span>
                            <span className="sidebar--item">Settings</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon icon-8">
                                <MdLogout />
                            </span>
                            <span className="sidebar--item">Logout</span>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;
