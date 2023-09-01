import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    useNavigate

} from 'react-router-dom';
function Subfail(props) {
    const navigate=useNavigate()
    const handleclick=()=>{
        navigate("/")
    }
    return (
        <div className="cross">


                    <div className="wrapper1">
                        <svg className="checkmark1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                            <circle className="checkmark_circle1" cx="26" cy="26" r="25" fill="none"/>
                            <path className="checkmark_check1" fill="none"
                                  d="M14.1 14.1l23.8 23.8 m0,-23.8 l-23.8,23.8"/>
                        </svg>
                    </div>


            <div>
                Submission Failed.
            </div>
            <div className="chota">
                Details Invalid or Form Already Submitted.
            </div>
            <div className="return1" onClick={handleclick}>
                Go back
            </div>
        </div>
    );
}

export default Subfail;