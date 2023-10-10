import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react';
type ContactsParams= {
 id: string;}
 interface User {
        "userId": number,
        "id": number,
        "title":string,
        "completed": boolean
  }

export const ToDos = () => {
 const params = useParams()
 const [users, setusers] = useState<User>();
 const handleUser = () => {
   
 };

 useEffect(() => {
   const fetchItems = async () => {
     const result = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`);
     const user = await result.json();
     console.log(user,"ssss");

     setusers(user);
   };
   fetchItems();
 },[]);
return(
<div>
    {users?.title}
    {users?.completed}
    <Link to={'/MainPage'}>HOME</Link>
</div>

)
}