import './App.css';
import {NavLink, Switch, Route, Redirect} from 'react-router-dom';
import Spot from "./pages/spot/Spot";
import Futures from './pages/futures/Futures';
import SignIn from "./pages/signin/SignIn"
import {AuthContext} from "./components/Auth";
import {useContext} from "react";
import logo from "./assets/money.svg";
import SignOut from "./components/SignOut";

function App() {
    const {currentUser} = useContext(AuthContext);

    return (
        <>
            <header>
                <div className="header-content">
                    <div className="title-bar">
                        <img src={logo} alt="logo" id="logo"/>
                        <h1 className="title">Coin Stack</h1>
                    </div>
                    <nav>
                        <ul>
                            {!currentUser &&
                            <>
                                <li>
                                    <NavLink exact to="/signin" activeClassName="selected">Sign In</NavLink>
                                </li>
                            </>}
                            {currentUser &&
                            <>
                                <li>
                                    <NavLink to="/fiat-spot" activeClassName="selected">Fiat & Spot</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/futures" activeClassName="selected">Futures</NavLink>
                                </li>
                                <li>
                                    <SignOut/>
                                </li>
                            </>}
                        </ul>
                    </nav>
                </div>
            </header>
            <main>
                <Switch>
                    <Route exact path="/">
                        <Redirect exact to="/signin"/>
                        <SignIn/>
                    </Route>
                    <Route exact path="/signin">
                        <SignIn/>
                    </Route>
                    <Route exact path="/fiat-spot">
                        <Spot/>
                    </Route>
                    <Route exact path="/futures">
                        <Futures/>
                    </Route>
                    <Route exact path="/signout">
                        <SignOut/>
                    </Route>
                </Switch>
            </main>
        </>
    );
}

export default App;
