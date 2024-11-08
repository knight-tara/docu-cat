import { useState } from "react"
import { CreateUser } from "./components/createUserForm"
import { GetAllUsers } from "./components/allUsersTable"

const App = () => {

  const [createUserModalOpen, setCreateUserModelOpen] = useState(false);



  const openCreateUserModal = () => {
    setCreateUserModelOpen(true);
  };

  const closeCreateUserModal = () => {
    setCreateUserModelOpen(false);
  };

  return (
    <>
    <h1>All Users</h1>
    <button onClick={openCreateUserModal}>Create New User</button>
    <CreateUser 
      createUserModalOpen={createUserModalOpen}
      closeCreateUserModal={closeCreateUserModal}
    />
    <GetAllUsers/>
    </>
  )
}

export default App;