import { useState } from "react";
import {Link, NavLink} from "react-router-dom";
import styled from 'styled-components';
import logo_dummy from "../assets/imgs/logo_dummy.png";


const Container = styled.nav`
    display: flex;
    flex-direction: column;

    @media (min-width: 860px) {
    margin: 1rem;
    flex-direction: row;
    justify-content: center;
  }
`

const NavigationHeader = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    .nav-header-item{
        margin: 1rem;
    }
`

const Navigation = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 1rem;
    border-radius: 5px;
    list-style: none;
    gap: 1.5rem;
    margin: 1rem;

    a{
        text-decoration: none;
        color: #000000;
        transition: all 1s ease-out;
    }

    a:hover{
        cursor: pointer;
        color: gray;
    }
    a.active{
        text-decoration:underline;
    }

    @media (min-width: 860px) {
    flex-direction: row;
  }
`

const BurgerMenu = styled.div`
  width: 60px;
  height: 45px;
  position: relative;
  margin: 1rem;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
  cursor: pointer;

  span {
  display: block;
  position: absolute;
  height: 6px;
  width: 100%;
  background: #00949d;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
}

  span:nth-child(1) {
  top: 0px;
}

  span:nth-child(2) {
  top: 18px;
}

 span:nth-child(3) {
  top: 36px;
}

.top.open {
  top: 18px;
  -webkit-transform: rotate(135deg);
  -moz-transform: rotate(135deg);
  -o-transform: rotate(135deg);
  transform: rotate(135deg);
}

.middle.open {
  opacity: 0;
  left: -60px;
}

.bottom.open {
  top: 18px;
  -webkit-transform: rotate(-135deg);
  -moz-transform: rotate(-135deg);
  -o-transform: rotate(-135deg);
  transform: rotate(-135deg);
}

@media (min-width: 860px) {
        display: none;
  }`

function toggleX() {
    const burgerMenu = document.getElementById("burger-menu");
    const spans = burgerMenu.getElementsByTagName('span');

    for (const span of spans) {
        span.classList.toggle('open')
        
    }
}

function Navbar(){

    const [showDesktopMenu, setShowDesktopMenu] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const handleResize = () => {
        setShowDesktopMenu(window.innerWidth >= 860);
      };
    
    window.addEventListener('resize', handleResize);

    const toggleMenu = () => {
        toggleX()
        setShowMobileMenu(prevState => !prevState);
      };
    

    return (
        <Container>
            <NavigationHeader style={{display:"flex", justifyContent: "space-between"}}>
                <Link className="nav-header-item" to="/">
                    <img src={logo_dummy} alt="logo" style={{ height: "15vh" }} />
                </Link>
                <BurgerMenu id="burger-menu" onClick={toggleMenu}>
                    <span className="top"></span>
                    <span className="middle"></span>
                    <span className="bottom"></span>
                </BurgerMenu>
            </NavigationHeader>
            
            {/* TODO
                preventScrollReset anstatt helper function um zum seitenanfang zu navigieren (https://medium.com/@alexanie_/link-component-in-react-router-6872291bf78e)*/}
        {((window.innerWidth >= 860 || showDesktopMenu) || showMobileMenu) && (
        <Navigation onClick={toggleMenu}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/leistungen">Leistungen</NavLink>
          <NavLink to="/praxis">Praxis</NavLink>
          <NavLink to="/ueber-mich">Über mich</NavLink>
          <NavLink to="/bewertungen">Bewertungen</NavLink>
          <NavLink to="/kontakt">Kontakt</NavLink>
        </Navigation>
        )}
        </Container>
    );
}

export default Navbar;