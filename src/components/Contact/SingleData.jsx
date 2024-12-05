import { Link } from "react-router-dom";

const SingleData = ({ user }) => {

    const { id, name, phone, username } = user
    return (
        <div style={{border:'2px solid black', borderRadius: '10px'}}>
            <h3>{name}</h3>
            <p>{username}</p>
            <p>{phone}</p>
            <Link to={`/contact/${id}`}>Details</Link>

        </div>
    )
}
export default SingleData;