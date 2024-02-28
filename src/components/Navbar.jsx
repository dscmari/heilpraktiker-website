import {Link, NavLink} from "react-router-dom";
import styled from 'styled-components';
import logo_dummy from "../assets/imgs/logo_dummy.png";

const Container = styled.nav`
    margin: 1rem;
    display: flex;
    align-items: center;
`

const Navigation = styled.ul`
    list-style: none;
    display: flex;
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
`

function Navbar(){
    return (
        <Container>
            <Link to="/">
                <img src={logo_dummy} alt="logo" style={{ height: "15vh" }} />
            </Link>
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