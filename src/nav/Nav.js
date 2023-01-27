import NavLink from './NavLink';
import { navLinks } from './navLinks';


const Nav = () => {
	return (
		<nav className='navbar'>
			{navLinks.map(({ navLinkId, scrollToId }, idx) => (
				<NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId} />
			))}
		</nav>
	);
};

export default Nav;