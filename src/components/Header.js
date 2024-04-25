import Logo from '../image/logo.png'
import "./Header.css"

export default function Header(props) {
    return (
        <nav>
            <img src={Logo} alt="logo" className='logo'/>
            <a href='/'>{props.title}</a>
        </nav>
    );
}