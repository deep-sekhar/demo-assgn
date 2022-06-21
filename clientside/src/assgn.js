import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import axios from 'axios';

function Assgn() {
    const [show, setShow] = useState(false);
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [data, setData] = useState([])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const h = async (e) => {
        e.preventDefault()
        if(!email || !name || !phone)
        return;

        try {
            // console.log("Calling")
            const options = {
                url: "http://localhost:5000/api/add",
                method: "POST",
                headers: {
                    'Accept': "application/json",
                    'Content-Type': "application/json;charset=UTF-8"
                },
                data: {
                    email: email,
                    phone: phone,
                    name: name
                }
            }

            const res = await axios(options);
            if (res.status === 200)
                handleShow();
        } catch (e) {
            console.log(e);
        }
    }

    const g = async (e) => {
        e.preventDefault()

        try {
            // console.log("Calling")
            const options = {
                url: "http://localhost:5000/api/get",
                method: "GET",
                headers: {
                    'Accept': "application/json",
                    'Content-Type': "application/json;charset=UTF-8"
                }
            }

            const res = await axios(options);
            if (res.status === 200)
            {
                const d = res.data;
                setData(d.data)
            }
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Status</Modal.Title>
                </Modal.Header>
                <Modal.Body>data added</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <p>Assignment to add data and display the records in a table</p>
                </div>
            </nav>
            <div className='container card d-flex flex-column mt-3'>
                <form className='mb-3' onSubmit={(e) => h(e)}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInput2" className="form-label">Name</label>
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="exampleInput2" aria-describedby="emailHelp2" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInput3" className="form-label">Phone Number</label>
                        <input value={phone} onChange={(e) => setPhone(e.target.value)} type="number" className="form-control" id="exampleInput3" aria-describedby="emailHelp3" />
                    </div>
                    <button type="submit" className="btn btn-primary">Add Data</button>
                </form>
            </div>
            <div className='container card d-flex flex-column mt-3'>
                <button type="button" className="btn btn-primary" onClick={(e)=>g(e)}>Fetch all data</button>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th> 
                        <th scope="col">Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((ele)=>{
                            return <tr key={ele?.email}>
                            <td>{ele?.name}</td>
                            <td>{ele?.email}</td>
                            <td>{ele?.phone}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
            </div>
        </>
    )
}

export default Assgn