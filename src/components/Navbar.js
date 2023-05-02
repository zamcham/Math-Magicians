function Navbar () {

    return (
        <nav className="navBar">
            <ul>
                <li>
                    <link to='/'>Home</link>
                </li>
                <li>
                    <link to='/calculator'>Calculator</link>
                </li>
                <li>
                    <link to='/quote'>Quote</link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;