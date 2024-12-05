import { useLoaderData } from "react-router-dom";

const ContactDetails = () => {
    const userId = useLoaderData()
    console.log(userId)
    return (
        <div style={{border: '2px solid black'}}>
            <h3>{userId.name}</h3>
            <p>{userId.username}</p>
            <p>{userId.phone}</p>
        </div>
    )
}
export default ContactDetails;