import "./Signin.css"
import React, {useContext} from "react";
import {Redirect} from "react-router-dom";
import {AuthContext} from "../../components/Auth";
import firebaseConfig from "../../components/firebase";

function SignIn() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const {email, password} = e.target.elements;
        try {
            firebaseConfig.auth().signInWithEmailAndPassword(email.value, password.value);
        } catch (error) {
            alert(error);
        }
    };
    const {currentUser} = useContext(AuthContext);
    if (currentUser) {
        return <Redirect to="/fiat-spot"/>;
    }
    return (
        <div className="auth-box">
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="Email"/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="Password"/>
                <button type="submit">Sign in</button>
            </form>
        </div>
    );
};

export default SignIn;