import { useState } from "react";
import { createUser } from '../services/user';
import ModalDialog from "../components/modalDialog";

export const CreateUser = ({ createUserModalOpen, closeCreateUserModal}) => {

    const [firstName, setFirstName] = useState("");
    const [surname, setSurname] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [contract, setContract] = useState(null);


    const handleSubmit = async (e) => {

        e.preventDefault();

        const userInput = {
            firstName, 
            surname,
            emailAddress,
            dateOfBirth, 
            contract
        };

        console.log(userInput)

        try {
            await createUser(userInput);
            closeCreateUserModal();

        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
        <ModalDialog isOpen={createUserModalOpen} onClose={closeCreateUserModal} submit={handleSubmit}>
        <h2>Create User</h2>
        <form onSubmit={handleSubmit}>

            <label>First Name:
                <input 
                id='firstname'
                type='text'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                />
            </label>

            <label>Surname:
                <input
                id='surname'
                type='text'
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                />
            </label>

            <label>Email Address:
                <input
                id='emailaddress'
                type='text'
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
                />
            </label>

            <label>Date of Birth:
                <input
                id='dateofbirth'
                type='text'
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                />
            </label>

            <label>Employment Contract:
                <input
                id='contract'
                type='file'
                // value={contract}
                onChange={(e) => setContract(e.target.files[0])}
                />
            </label>
        </form>
        </ModalDialog>
        </>
    );
};