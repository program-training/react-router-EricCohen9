import { useState,useEffect } from "react";
import { Link } from 'react-router-dom';
import "./getAllUsers.css";
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

export function AllUsers() {
  const [users, setusers] = useState<User[]>();
  const handleUser = () => {
    
  };

  useEffect(() => {
    const fetchItems = async () => {
      const result = await fetch("https://jsonplaceholder.typicode.com/users",{});
      const user = await result.json();
      console.log(user,"ssss");

      setusers(user);
    };
    fetchItems();
  },[]);
  return (
    <div id="cardFather">
    {users?.map((users) => (
      <Link to={`OneUser/${users.id}`}>
        <style></style>
        <div key={users.id} className="card">
            <p>id: {users.id}</p>
            <p> {users.name}</p>
        </div>
        </Link>
    ))}
    </div>
    )
  }
