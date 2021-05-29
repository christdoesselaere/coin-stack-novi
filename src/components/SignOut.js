import firebaseConfig from "./firebase";
import {NavLink} from "react-router-dom";

export default function SignOut() {
    function handleClick() {
        firebaseConfig.auth().signOut();
    }

    return (
        <>
            <NavLink activeClassName="selected" onClick={handleClick} exact to="/">Sign out</NavLink>
        </>
    );
}