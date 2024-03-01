import {Link, NavLink} from "react-router-dom";
import styled from 'styled-components';
import logo_dummy from "../assets/imgs/logo_dummy.png";

const Container = styled.nav`
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
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

    @media (min-width: 768px) {
    #burger-menu{
        display: none;
    }
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

    @media (min-width: 768px) {
    flex-direction: row;
  }
`

function Navbar(){
    return (
        <Container>
            <NavigationHeader style={{display:"flex", justifyContent: "space-between"}}>
                <Link className="nav-header-item" to="/">
                    <img src={logo_dummy} alt="logo" style={{ height: "15vh" }} />
                </Link>
                <div id="burger-menu" className="nav-header-item">
                    <h1>Burger menu</h1>
                </div>
            </NavigationHeader>
            
            {/* TODO
                preventScrollReset anstatt helper function um zum seitenanfang zu navigieren (https://medium.com/@alexanie_/link-component-in-react-router-6872291bf78e)*/}
            <Navigation>
                <NavLink to="/leistungen">Leistungen</NavLink>
                <NavLink to="/praxis">Praxis</NavLink>
                <NavLink to="/ueber-mich">Über mich</NavLink>
                <NavLink to="/bewertungen">Bewertungen</NavLink>
                <NavLink to="/kontakt">Kontakt</NavLink>
            </Navigation>
        </Container>
    );
}

export default Navbar;