import { Link, Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react';
type ContactsParams= {
 id: string;}
 interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
  }

export const OneUser = () => {
 const params = useParams()
 const [users, setusers] = useState<User>();
 const handleUser = () => {
   
 };

 useEffect(() => {
   const fetchItems = async () => {
     const result = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
     const user = await result.json();
     console.log(user,"ssss");

     setusers(user);
   };
   fetchItems();
 },[]);
 return (
<div>
 <p> {params.id}</p>
 <p>{users?.name}</p>
 <Link to={`ToDos/${users?.id}`}>todos </Link>

 {/* {users?.map((users) => (
        <div key={users.id} className="card">
            <p>id: {users.id}</p>
            <p> {users.name}</p>
        </div>))} */}
        <Outlet/>
 </div>
 
 )
}
