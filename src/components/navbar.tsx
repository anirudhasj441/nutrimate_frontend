import React from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
    return (
        <>
            <header>
            <img src="/logo.png" alt="" width={70}/>
            <h2>NutriMate - Your Smart Diet Planner</h2>
            </header>
            <nav>
                <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
                <NavLink to="/meal-plan" end className={({ isActive }) => (isActive ? 'active' : '')} >Meal Plan</NavLink>
                <NavLink to="/healthy-recipes" end className={({ isActive }) => (isActive ? 'active' : '')}>Healthy Recipes</NavLink>
                <NavLink to="/track-progress" end className={({ isActive }) => (isActive ? 'active' : '')}>Track Progress</NavLink>
                <NavLink to="/diet-plan" end className={({ isActive }) => (isActive ? 'active' : '')}>Diet Plan</NavLink>
                <div style={{flexGrow: 1}}></div>
                <NavLink to="/user-registration" end className={({ isActive }) => (isActive ? 'active' : '')}>Log in</NavLink>
                <NavLink to="/user-registration" end className={({ isActive }) => (isActive ? 'active' : '')}>Sign Up</NavLink>
            </nav>
        </>
    );
};

export default Navbar;