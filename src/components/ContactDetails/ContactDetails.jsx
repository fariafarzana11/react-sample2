import { useLoaderData } from "react-router-dom";

const ContactDetails = () => {
    const userId = useLoaderData()
    return (
        <div>
            <h3>{userId.name}</h3>
        </div>
    )
}
export default ContactDetails;