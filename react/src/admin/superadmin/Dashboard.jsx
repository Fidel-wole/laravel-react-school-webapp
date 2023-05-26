import React from "react";
import "./superadmin.css";

import Doctor1 from "../../assets/doctor2.jpg";
import Doctor2 from "../../assets/doctor3.jpg";
import Doctor3 from "../../assets/doctor4.jpg";
import Doctor4 from "../../assets/doctor6.jpg";
import Doctor5 from "../../assets/doctor7.jpg";
import Doctor6 from "../../assets/doctor4.jpg";
import {
    AiOutlineBarChart,
    AiOutlineCalendar,
    AiOutlineEdit,
    AiOutlineLineChart,
} from "react-icons/ai";

import { AiOutlineArrowDown } from "react-icons/ai";
import { AiOutlineArrowUp } from "react-icons/ai";
import { BsFillPersonFill, BsFillTrashFill } from "react-icons/bs";
import { MdGroupAdd } from "react-icons/md";
import Navbar from "./components/Navbar";
const Dashboard = () => {
    return (
        <>
            <section className="main">
                <Navbar />
                <div className="main--content">
                    <div className="overview">
                        <div className="title">
                            <h2 className="section--title">Overview</h2>
                            <select name="date" id="date" className="dropdown">
                                <option value="today">Today</option>
                                <option value="lastweek">Last Week</option>
                                <option value="lastmonth">Last Month</option>
                                <option value="lastyear">Last Year</option>
                                <option value="alltime">All Time</option>
                            </select>
                        </div>
                        <div className="cards">
                            <div className="card card-1">
                                <div className="card--data">
                                    <div className="card--content">
                                        <h5 className="card--title">
                                            Total Teachers
                                        </h5>
                                        <h1>152</h1>
                                    </div>
                                    <AiOutlineBarChart />
                                </div>
                                <div className="card--stats">
                                    <span>
                                        <AiOutlineBarChart />
                                        65%
                                    </span>
                                    <span>
                                        <AiOutlineArrowUp />
                                        10
                                    </span>
                                    <span>
                                        <AiOutlineArrowDown />2
                                    </span>
                                </div>
                            </div>
                            <div className="card card-2">
                                <div className="card--data">
                                    <div className="card--content">
                                        <h5 className="card--title">
                                            Total Students
                                        </h5>
                                        <h1>5545</h1>
                                    </div>
                                    <BsFillPersonFill />
                                </div>
                                <div className="card--stats">
                                    <span>
                                        <AiOutlineBarChart />
                                        82%
                                    </span>
                                    <span>
                                        <AiOutlineArrowUp />
                                        230
                                    </span>
                                    <span>
                                        <AiOutlineArrowDown />
                                        45
                                    </span>
                                </div>
                            </div>
                            <div className="card card-3">
                                <div className="card--data">
                                    <div className="card--content">
                                        <h5 className="card--title">
                                            Schedule
                                        </h5>
                                        <h1>102</h1>
                                    </div>
                                    <AiOutlineCalendar />
                                </div>
                                <div className="card--stats">
                                    <span>
                                        <AiOutlineBarChart />
                                        27%
                                    </span>
                                    <span>
                                        <AiOutlineArrowUp />
                                        31
                                    </span>
                                    <span>
                                        <AiOutlineArrowDown />
                                        23
                                    </span>
                                </div>
                            </div>
                            <div className="card card-4">
                                <div className="card--data">
                                    <div className="card--content">
                                        <h5 className="card--title">
                                            Materials Available
                                        </h5>
                                        <h1>15</h1>
                                    </div>
                                    <AiOutlineLineChart />
                                </div>
                                <div className="card--stats">
                                    <span>
                                        <AiOutlineBarChart />
                                        8%
                                    </span>
                                    <span>
                                        <AiOutlineArrowUp />
                                        55
                                    </span>
                                    <span>
                                        <AiOutlineArrowDown />2
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="doctors">
                        <div className="title">
                            <h2 className="section--title">Teachers</h2>
                            <div className="doctors--right--btns">
                                <select
                                    name="date"
                                    id="date"
                                    className="dropdown doctor--filter"
                                >
                                    <option>Filter</option>
                                    <option value="free">HOD'S</option>
                                    <option value="scheduled">Teachers</option>
                                    <option value="scheduled">
                                        Non-teaching staff
                                    </option>
                                </select>
                                <button className="add">
                                <MdGroupAdd />Add Teacher
                                </button>
                            </div>
                        </div>
                        <div className="doctors--cards">
                            <a href="#" className="doctor--card">
                                <div className="img--box--cover">
                                    <div className="img--box">
                                        <img src={Doctor1} alt="" />
                                    </div>
                                </div>
                                <p className="free">HOD OF SCIENCE</p>
                            </a>
                            <a href="#" className="doctor--card">
                                <div className="img--box--cover">
                                    <div className="img--box">
                                        <img src={Doctor2} alt="" />
                                    </div>
                                </div>
                                <p className="scheduled">HOD OF ART</p>
                            </a>
                            <a href="#" className="doctor--card">
                                <div className="img--box--cover">
                                    <div className="img--box">
                                        <img src={Doctor3} alt="" />
                                    </div>
                                </div>
                                <p className="scheduled">HOD OF COMMERCIAL</p>
                            </a>
                            <a href="#" className="doctor--card">
                                <div className="img--box--cover">
                                    <div className="img--box">
                                        <img src={Doctor4} alt="" />
                                    </div>
                                </div>
                                <p className="free">HOD OF MUSIC</p>
                            </a>
                            <a href="#" className="doctor--card">
                                <div className="img--box--cover">
                                    <div className="img--box">
                                        <img src={Doctor5} alt="" />
                                    </div>
                                </div>
                                <p className="scheduled">HOD OF MATHEMATICS</p>
                            </a>
                            <a href="#" className="doctor--card">
                                <div className="img--box--cover">
                                    <div className="img--box">
                                        <img src={Doctor6} alt="" />
                                    </div>
                                </div>
                                <p className="free">HOD OF PHYSICS</p>
                            </a>
                            <a href="#" className="doctor--card">
                                <div className="img--box--cover">
                                    <div className="img--box">
                                        <img src={Doctor4} alt="" />
                                    </div>
                                </div>
                                <p className="scheduled">HOD OF LANGUAGES</p>
                            </a>
                        </div>
                    </div>
                    <div className="recent--patients">
                        <div className="title">
                            <h2 className="section--title">
                                Recent Apllications
                            </h2>
                            <button className="add">
                                <MdGroupAdd />
                                Add Staff
                            </button>
                        </div>
                        <div className="table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Date in</th>
                                        <th>Gender</th>
                                        <th>Age</th>
                                        <th>Status</th>
                                        <th>Settings</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Odunayo Williams</td>
                                        <td>30/07/2023</td>
                                        <td>Male</td>
                                        <td>31</td>
                                        <td className="pending">pending</td>
                                        <td>
                                            <span>
                                                <AiOutlineEdit className="edit" />

                                                <BsFillTrashFill className="delete" />
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>George Ademola</td>
                                        <td>30/07/2023</td>
                                        <td>Male</td>
                                        <td>24</td>
                                        <td className="confirmed">Confirmed</td>
                                        <td>
                                            <span>
                                                <AiOutlineEdit className="edit" />

                                                <BsFillTrashFill className="delete" />
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Adelabu Pelumi</td>
                                        <td>29/07/2023</td>
                                        <td>Male</td>
                                        <td>26</td>
                                        <td className="confirmed">Confirmed</td>
                                        <td>
                                            <span>
                                                <AiOutlineEdit className="edit" />

                                                <BsFillTrashFill className="delete" />
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Falope Victor</td>
                                        <td>29/07/2023</td>
                                        <td>Male</td>
                                        <td>55</td>
                                        <td className="rejected">Rejected</td>
                                        <td>
                                            <span>
                                                <AiOutlineEdit className="edit" />

                                                <BsFillTrashFill className="delete" />
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Okun Faith</td>
                                        <td>29/07/2023</td>
                                        <td>Male</td>
                                        <td>29</td>
                                        <td className="confirmed">Confirmed</td>
                                        <td>
                                            <span>
                                                <AiOutlineEdit className="edit" />

                                                <BsFillTrashFill className="delete" />
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Nwadialor Alexander</td>
                                        <td>28/07/2023</td>
                                        <td>Male</td>
                                        <td>28</td>
                                        <td className="confirmed">Confirmed</td>
                                        <td>
                                            <span>
                                                <AiOutlineEdit className="edit" />

                                                <BsFillTrashFill className="delete" />
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Dashboard;
