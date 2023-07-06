import React, { useEffect, useState } from 'react';
import { Col, Form, FormControl, FormLabel, Button, Table } from 'react-bootstrap';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
    email: '',
    password: ''
}

const Login = () => {

    const [user, setUser] = useState(initialState);
    const [userData, setUserData] = useState([]);
    const [id, setId] = useState(null);
    const [btn, setBtn] = useState(true);
    const { email, password } = user;

    const emailValidation = (item) => {
        let pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
        return pattern.test(item);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    };

    const insertRecord = async () => {
        try {
            await axios.post(`http://localhost:3333/user`, user)
            toast.success('Record Inserted Successfully', { autoClose: 1500, theme: 'dark' });
            // console.log('insert......', user);
        }
        catch (err) {
            console.log('Insert Error...', err);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email && !password) {
            toast.error('Please enter email and Password', { autoClose: 2000, theme: 'dark' });
        }
        else if (!emailValidation(email)) {
            toast.error('Enter Valid Email', { autoClose: 2000, theme: 'dark' });
        }
        else if (!password) {
            toast.error('Please enter Password', { autoClose: 2000, theme: 'dark' });
        }
        else {
            if (btn === false) {
                updateRecord();
            }
            else {
                insertRecord();
            }
            setUser(initialState)
        }
    };

    const getUserData = async () => {
        try {
            const user = await axios.get(`http://localhost:3333/user`)
            // console.log('UserData.....', user.data);
            setUserData(user.data);
        }
        catch (err) {
            console.log('Select Error...', err);
        }
    };

    useEffect(() => {
        getUserData();
    }, [user]);

    const editRecord = (item) => {
        // console.log("item id.....", item.id);
        setUser(item)
        setId(item.id)
        setBtn(false)
    };

    const updateRecord = async () => {
        try {
            await axios.put(`http://localhost:3333/user/${id}`, user)
            setBtn(true)
            toast.success('Record Updated Successfully', { autoClose: 1500, theme: 'dark' });
        }
        catch (err) {
            console.log('Update Error...', err);
        }
    };

    const deleteRecord = async (id) => {
        try {
            await axios.delete(`http://localhost:3333/user/${id}`)
            let newUserData = userData.filter((item) => {
                // console.log('id....', id);
                return item.id !== id;
            })
            setUserData(newUserData);
            toast.error('Record Deleted Successfully', { autoClose: 1500, theme: 'dark' })
        }
        catch (err) {
            console.log('Delete Error...', err);
        }
    };

    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center align-items-center flex-column">
                    <Form
                        onSubmit={handleSubmit}
                        className='p-4 w-auto rounded bg-dark'
                        style={{ boxShadow: '10px 10px 16px #226688' }}
                        autoComplete='off'
                        noValidate
                    >
                        <Col className="mb-4 text-light text-center">
                            <h3>Login</h3>
                        </Col>
                        <Col className='mb-2 text-light'>
                            <FormLabel>Email</FormLabel>
                            <FormControl
                                type='email'
                                placeholder='Enter Your Email'
                                name='email'
                                value={email}
                                onChange={handleChange}
                                required
                            />
                        </Col>
                        <Col className='mb-2 text-light'>
                            <FormLabel>Password</FormLabel>
                            <FormControl
                                type='password'
                                placeholder='Enter Your Password'
                                name='password'
                                value={password}
                                onChange={handleChange}
                                required
                            />
                        </Col>
                        <Col className='mt-4'>
                            {
                                btn
                                    ? <Button type='submit' variant='success'>Submit</Button>
                                    : <Button type='submit' variant='success'>Update</Button>
                            }
                        </Col>
                        <ToastContainer />
                    </Form>
                </div>
                <div className="container mt-5">
                    <div className="row">
                        <Table striped hover variant='info' style={{ boxShadow: '3px 5px 5px gray' }}>
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Email</th>
                                    <th>Password</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userData.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{item.email}</td>
                                            <td>{item.password}</td>
                                            <td>
                                                <Button variant='warning' className='me-2' onClick={() => editRecord(item)}>Edit</Button>
                                                <Button variant='danger' onClick={() => deleteRecord(item.id)}>Delete</Button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Login;