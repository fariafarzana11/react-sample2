import { useLoaderData } from "react-router-dom";
import SingleData from "./SingleData";

const Contact = () => {
    const users = useLoaderData()
    console.log(users)
    return (
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)', gap:'20px'}}>
            {
                users.map(user => <SingleData key={user.id} user={user}></SingleData>)
            }
        </div>
    )
}
export default Contact;