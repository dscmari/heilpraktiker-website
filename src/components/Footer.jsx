import styled from "styled-components";

const FooterNavigation = styled.ul`
display: flex;
flex-direction: row;
margin: 2rem;
list-style: none;
gap: 2rem;
justify-content: center;
`

function Footer(){
    return(
        <div style={{borderTop: "1px solid grey", marginTop:"3rem", width:"100%"}}>
            <FooterNavigation>
                <li>Kontakt</li>
                <li>Impressum</li>
                <li>Datenschutzerklärung</li>
            </FooterNavigation>
        </div>
    );
}

export default Footer;