import useFetch from "../../hooks/useFetch"
import UsersTable from "../../components/UsersTable/UsersTable"

const URL = "http://localhost:3000/api/auth/allUsers"

function UserPage(){

    const {loading, apiData, error} = useFetch(URL);


    return(
        <main>
            <h1>Users</h1>
            {apiData && <UsersTable users={apiData.users}/>}
        </main>
    )
}

export default UserPage;