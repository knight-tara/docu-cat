import Table from 'react-bootstrap/Table';
import { MdDelete, MdEdit } from "react-icons/md";
import { useState, useEffect } from "react";
import { getAllUsers } from '../services/user';


export const GetAllUsers = ({ onUpdateUser }) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        displayUsers();
    }, []);

    const displayUsers = async () => {
        try {
            const response = await getAllUsers();
            setUsers(response);
            console.log('users:',users)
        } catch (error) {
            console.error('Error fetching users:', error);
        } finally {
            setLoading(false);
        }
    };

    const determineSelectedUser = (user) => {
        onUpdateUser(user)
    };
    
    if (loading) return <div>Loading ...</div>


    return (
        <>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Employee ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email Address</th>
                    <th>Date of Birth</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {users.users.map((user) => (
                    <tr key={user.ID}>
                        <td>{user.ID}</td>
                        <td>{user.FirstName}</td>
                        <td>{user.Surname}</td>
                        <td>{user.EmailAddress}</td>
                        <td>{user.DateOfBirth}</td>
                        <td><button onClick={determineSelectedUser}><MdEdit /></button></td>
                        <td><button><MdDelete /></button></td>
                    </tr>
                ))}
            </tbody>
        </Table>
        </>
    );
};


