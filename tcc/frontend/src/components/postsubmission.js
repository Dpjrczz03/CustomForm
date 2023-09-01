import React from 'react';

import {
    BrowserRouter as Router,
    Route,
    Routes,
    useNavigate

} from 'react-router-dom';
function Postsubmission(props) {
    const navigate = useNavigate();
    const handleclick=()=>{
        navigate("/")
    }
    return (
        <div className="subpage">
            <div className="loader">
                <div className="wrapper">
                    <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                        <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
                        <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                    </svg>
                </div>
            </div>
        <div className="sub">
            <div>
            Thank you for your submission.
            </div>
            <div onClick={handleclick} className="return">
                 Go back
            </div>
        </div>
            </div>
    );
}

export default Postsubmission;

