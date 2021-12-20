import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
	return (
		<>
			<nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
				<NavLink to='#' className='navbar-brand ms-4'>
					useContext
				</NavLink>
				<div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
					<div className='navbar-nav'>
						<NavLink
							className='nav-item nav-link {(navData)=>navData.isActive && "active"}'
							to='./home'
						>
							Home
						</NavLink>
						<NavLink
							className='nav-item nav-link {(navData)=>navData.isActive && "active"'
							to='./login'
						>
							Login
						</NavLink>
						<NavLink
							className='nav-item nav-link {(navData)=>navData.isActive && "active"'
							to='./about'
						>
							About
						</NavLink>
					</div>
				</div>
				{/* <ul>
				<li>
					<Link to='./home'>Home</Link>
				</li>
				<li>
					<Link to='./login'>Login</Link>
				</li>
				<li>
					<Link to='./about'>About</Link>
				</li>
			</ul> */}
			</nav>
		</>
	);
};
