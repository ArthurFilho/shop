import { HeaderContainer, ImgLogo, Logo, MenuItems } from "./styles";
import LogoC from "../../assets/Header/smurf_cadeirante.png"
import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { useRef, useState } from "react";
import "../../styles/dropDownHeader.css";


export function Header () {
    const dropDownRef = useRef(null);
    const [isActive, setIsActive] = useState(true)
    
    const onClick = () => setIsActive(!isActive)

    return(
        <HeaderContainer>
            <Logo>
               <NavLink to="/"> <ImgLogo src={LogoC} /> </NavLink>
            </Logo>
        <MenuItems className="menu-container">
        <button onClick={onClick}>
            <MenuIcon> </MenuIcon>
        </button>
                <nav
                    ref={dropDownRef}
                    className={`menu ${isActive ? "active" : "inactive"}`}
                >  
                    <ul>
                        <li>
                            <NavLink to="/"> Início </NavLink>
                        </li>
                        <li>
                            <NavLink to="/catalog"> Catálogo </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact"> Entrar em contato </NavLink>
                        </li>
                    </ul>
                </nav>
        </MenuItems>

        </HeaderContainer>
    )
}