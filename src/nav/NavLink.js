import React, { useContext } from 'react';
import { NavContext } from '../context/NavContext';

const NavLink = ({ navLinkId, scrollToId }) => {
	const { activeNavLinkId, setActiveNavLinkId } = useContext(NavContext);

	const handleClick = () => {
		setActiveNavLinkId(navLinkId);
		document.getElementById(scrollToId).scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<h3
			id={navLinkId}
			className={activeNavLinkId === navLinkId ? 'activeClass' : ''}
			onClick={handleClick}
		>
			{navLinkId}
		</h3>
	);
};

export default NavLink;