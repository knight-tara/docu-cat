const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const USERNAME = import.meta.env.VITE_USERNAME;
const PASSWORD = import.meta.env.VITE_PASSWORD;

let auth = btoa(`${USERNAME}:${PASSWORD}`);

// Create User

export const createUser = async (userInput) => {

    const formData = new FormData();
    formData.append("FirstName", userInput.firstName);
    formData.append("Surname", userInput.surname);
    formData.append("EmailAddress", userInput.emailAddress);
    formData.append("DateOfBirth", userInput.dateOfBirth);
    formData.append("Contract", userInput.contract);

    const requestOptions = {
        method: "POST",
        headers: {
            Authorization: `Basic ${auth}`
        },
        body: formData,
    };

    const response = await fetch(`${BACKEND_URL}/admin/`, requestOptions);

    if (response.status !== 200) {
        throw new Error("Unable to create user");
    }

    const data = await response.json();

    return data;
};

// Get All Users

export const getAllUsers = async () => {

    const requestOptions = {
        method: "GET",
        headers: {
            Authorization: `Basic ${auth}`
        },
    };

    const response = await fetch(`${BACKEND_URL}/admin/`, requestOptions);

    if (response.status !== 200) {
        throw new Error("Unable to fetch users!");
    }

    const data = await response.json();

    return data;

};

// Get User

// Update User

// Delete User