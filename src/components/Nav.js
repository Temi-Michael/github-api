import { Link } from "react-router-dom";
import Logo from "../img/lazy-code/logo_transparent.png"
import "../App.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";

const LogoImg = () => {
    return (
        <img src={Logo} className="logo" alt="LogoImg" /> 
    )
}

const Search = () => {
    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        setSearch(e.target.value.toLowerCase());
    };
    return (
        <input
            type="search"
            className="search"
            id="search"
            value={search}
            onChange={handleSearch}
            placeholder="Search"
        />
    );
};

const NavBar = (props) => {
    return (
        <ul className="navList">
            <li>
                <Link to="/" className="navItem">{props.home}</Link>
            </li>
            <li>
                <Link to="about" className="navItem">{props.about}</Link>
            </li>
        </ul>
    );
};

export default function Nav() {
    return (
        <div className="navBarCover">
            <Link to='/'><LogoImg /></Link>
            <NavBar home="Home" about="About" />
            <Search />
        </div>
    );
}
