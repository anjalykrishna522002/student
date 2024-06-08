import React, { useState } from 'react'
import Navbar from './Navbar'

const ViewStudent = () => {
    const [data, changeData] = useState(
        [
            { "name": "john", "admNo": 121, "rollno": 22 },
            { "name": "damon", "admNo": 221, "rollno": 12 },
            { "name": "surya", "admNo": 111, "rollno": 42 }
        ]
    )
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {data.map(
                                (value, index) => {
                                    return <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                        <div className="card" >
                                            <img src="https://www.socialsciencespace.com/wp-content/uploads/student-3500990_960_720_opt.jpg" class="card-img-top" alt="..."></img>
                                            <div className="card-body">

                                                <p className="card-text">name :{value.name}</p>
                                                <p className="card-text">admNo :{value.admNo}</p>
                                                <p className="card-text">rollno :{value.rollno}</p>


                                            </div>
                                        </div>

                                    </div>
                                }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewStudent