import { Link,Outlet } from "react-router-dom"
export function MainPage(){
    return(
        <div>
            <h1>main page</h1>
        <Link to={"GetAllUsers"}>get all users</Link>
        <Outlet/>
        </div>
    )
}