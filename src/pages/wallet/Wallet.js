import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../components/Auth";
import firebaseConfig from "../../components/firebase";

const Wallet = () => {
    const { currentUser } = useContext(AuthContext);
    if (!currentUser) {
        return <Redirect to="/signin" />;
    }
    return (
        <div>
            <h1>Wallet</h1>
            <p>This is the dashboard, if you can see this you're logged in.</p>
            <button onClick={() => firebaseConfig.auth().signOut()}>Sign out</button>
        </div>
    );
};

export default Wallet;