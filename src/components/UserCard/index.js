import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {changeName} from "../../store/modules/user/actions"
import { Container } from "./style";

const UserCard = () => {
    const [newName, setNewName] = useState("Kenzinho")
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user)

    const handleClick = () => {
        dispatch(changeName(newName));
    }

    return(
        <Container>
            <h2>User name: {user.name} </h2>
            <div>
                <input type="text" onChange={(e) => setNewName(e.target.value)} />
                <button onClick={() => handleClick()}>Change Username</button>
            </div>
        </Container>
    )
}
export default UserCard