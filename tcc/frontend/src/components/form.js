import React, {useEffect, useState} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    useNavigate

} from 'react-router-dom';
import {wait} from "@testing-library/user-event/dist/utils";

function Form(props) {

    var l
    var f
    const navigate = useNavigate()
    const [naam, setName] = useState('')
    const [mail, setMail] = useState('')

    const [enrol, setEnrol] = useState()
    const [dep, setDep] = useState('')
    const [exp, setExp] = useState('')

    const [btnclass, setBtnclass] = useState("huehue")
    const [information, setInformation] = useState(
        {
            id: null,
            name: '',
            email: '',
            enrollment: undefined,
            department: ''
        }
    )

    const handleNameChange = (e) => {
        setName(e.target.value)
        setInformation(
            {
                name: e.target.value,
                email: mail,
                enrollment: enrol,
                department: dep,
                experience:exp
            }
        )
        // console.log(information)
    }
    const handleEnrolChange = (e) => {
        setEnrol(e.target.value)
        setInformation(
            {
                name: naam,
                email: mail,
                enrollment: e.target.value,
                department: dep,
                experience:exp
            }
        )
        // console.log(information)
    }
    const handleDepChange = (e) => {
        setDep(e.target.value)
        // console.log(dep)
        setInformation(
            {
                name: naam,
                email: mail,
                enrollment: enrol,
                department: e.target.value,
                experience:exp
            }
        )
    }
    // console.log(information)

    const handleEmailChange=(e)=>{
        setMail(e.target.value)
        setInformation(
            {
                name: naam,
                email: e.target.value,
                enrollment: enrol,
                department: dep,
                experience:exp
            }
        )
    }
    const handleexpchange=(e)=>{
        setExp(e.target.value)
        setInformation(
            {
                name: naam,
                email: mail,
                enrollment: enrol,
                department: dep,
                experience:e.target.value

            }
        )
    }
    const handlemousedown = () => {
        setBtnclass("huehue1")
    }
    const handlemouseup = () => {
        setBtnclass("huehue")
    }
    const fetchnum = () => {
        fetch('http://127.0.0.1:8000/api/get-info/')
            .then(response => response.json())
            .then(data => {
                l = data.length

                // console.log("l: ",l)


            })


    }

    const fetchnum2 = () => {
        fetch('http://127.0.0.1:8000/api/get-info/')
            .then(response => response.json())
            .then(data => {
                f = data.length

                // console.log("f: ",f)
            })


    }


    const handleSubmit = (e) => {
        e.preventDefault()
        fetchnum()
        // var csrftoken = this.getCookie('csrftoken')
        // console.log(name)
        // console.log(enrol)
        // console.log(dep)

        // console.log(c)
        // console.log(naam)


        // console.log(information)
        var url = 'http://127.0.0.1:8000/api/create-info'
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                // 'X-CSRFToken':csrftoken,
            },
            body: JSON.stringify(information)
        }).then((response) => {
            setInformation({
                id: null,

                name: '',
                email: '',
                enrollment: undefined,
                department: '',
                experience:''
            })
        }).catch(function (error) {
            console.log('ERROR: ', error)
        })
        fetchnum2()
        wait(500).then(r => {
            if (l == f) {
                navigate("/failed")

            } else {
                navigate("/submitted")
            }
        })


    }

    return (
        <div>

            <div className="maincontainer">
                <div className="title">
                    TECHNICAL COUNCIL OF CIVIL
                </div>
                <div className="inputarea">
                    <div className="name">
                        Name:
                        <input onChange={handleNameChange} type="text"/>
                    </div>
                    <div className="email">
                        Email:
                        <input onChange={handleEmailChange} type="email"/>
                    </div>

                    <div className="enrollment">
                        Enrollment Number:
                        <input onChange={handleEnrolChange} type="number"/>
                    </div>
                    <div className="department">
                        Department:
                        <input onChange={handleDepChange} type="text"/>
                    </div>
                    <div className="exp">
                        Past Experiences:
                        <textarea onChange={handleexpchange} />
                    </div>

                    <div className="submit">
                        <button className={btnclass} onClick={handleSubmit} onMouseDown={handlemousedown}
                                onMouseUp={handlemouseup}>SUBMIT
                        </button>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;