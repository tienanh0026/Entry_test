import './header.css'

function Header() {
    return (
        <div className='header-wrapper'>
            <ul className='list-wrapper'>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Profile</a></li>
            </ul>
        </div>
    );
}

export default Header;
