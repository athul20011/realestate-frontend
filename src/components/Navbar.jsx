import React from 'react'
import { IconButton } from "@mui/material";
import { Search, Person, Menu } from "@mui/icons-material";
import variables from '../styles/variables.scss';
import { setLogout } from "../redux/state";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { MDBBtn } from 'mdb-react-ui-kit';
import '../styles/Navbar.scss'

function Navbar() {

const [dropdownMenu, setDropdownMenu] = useState(false);

  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const [search, setSearch] = useState("")

  const navigate = useNavigate()
  return (
    <div className="navbar">
      <a href="/">
      <img src="https://static.vecteezy.com/system/resources/previews/010/151/486/original/home-icon-real-estate-sign-design-free-png.png" alt="" />
      </a>
        <h3 style={{fontSize:'30px'}}>DREAM <span style={{color:"red"}}>HOUSE</span></h3>

      <div className="navbar_search">
        <input
          type="text"
          placeholder="Search ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <IconButton disabled={search === ""}>
          <Search
            sx={{ color: variables.pinkred }}
            onClick={() => {navigate(`/properties/search/${search}`)}}
          />
        </IconButton>
      </div>
      <div className="navbar_right">
        {user ? (
<div>
<a href='/' style={{padding:"10px"}} className='host' >Home</a>
<a href='/About' style={{padding:"10px"}}className='host'>About</a>
<a href='/category' style={{padding:"10px"}}className='host'>Categories</a>
<a href='/contact' style={{padding:"10px"}}className='host'>Contact</a>
<a href="/create-listing"style={{padding:"10px"}} className="host">Uplode your Proporty</a>
           
</div>
          
        ) : (
          <a href="/login" className="host">
          Login to uplode proporty
          </a>
        )}

        <button
          className="navbar_right_account"
          onClick={() => setDropdownMenu(!dropdownMenu)}
        >
          <Menu sx={{ color: variables.darkgrey }} />
          {!user ? (
            <Person sx={{ color: variables.darkgrey }} />
          ) : (
            <img
              src={`http://localhost:3001/${user.profileImagePath.replace(
                "public",
                ""
              )}`}
              alt="profile photo"
              style={{ objectFit: "cover", borderRadius: "70%",width:'80px',height:'80px' }}
            />
          )}
        </button>

        {dropdownMenu && !user && (
          <div className="navbar_right_accountmenu">
            <Link to="/login">Log In</Link>
            <Link to="/register">Sign Up</Link>
          </div>
        )}

        {dropdownMenu && user && (
          <div className="navbar_right_accountmenu">
            {/* <Link to={`/${user._id}/trips`}>Trip List</Link> */}
            <Link to={`/${user._id}/wishList`}>Wish List</Link>
            <Link to={`/${user._id}/properties`}>Property List</Link>
            <Link to={`/${user._id}/reservations`}>Reservation List</Link>

            <Link
              to="/login"
              onClick={() => {
                dispatch(setLogout());
              }}
            >
              Log Out
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar