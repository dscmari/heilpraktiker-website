import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const CircleContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 250px;
  margin: 2rem auto;
  margin-bottom: 4rem;

  @media (min-width: 768px) {
    width: 500px;
    margin: 6rem auto;
  }
  
`

const CircleDiv = styled.div`
  position: relative;
  height: 250px;
  aspect-ratio: 1;
  border-radius: 50%;
  opacity: 0.5;
  background: conic-gradient(#00949d 25%, #eee 0);

  //background-color: rgba(0, 148, 157, 0.5);
  animation: ${rotateAnimation} 5s linear infinite;

  &::before {
    content: "";
    position: absolute;
    inset: 10px;
    border-radius: inherit;
    background: white;
  }

  @media (min-width: 768px) {
    height: 500px;
      &::before {
        inset: 20px;
      }
  }
`;
const Arrow = styled.div`
  position: absolute;
  left: 100%;
  top: 50%;
  transform: rotate(90deg) translate(-50%, 40%);
  border-block: 15px solid transparent;
  border-left: 15px solid #00949d;

  @media (min-width: 768px) {
      transform: rotate(90deg) translate(-50%, 60%);
  }
`;
const InnerText = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -100%);
  font-size: 1.5rem;
  text-align: center;
  
`;
const OuterText = styled.div`
  height: 75px;
  width: 75px;
  border-radius: 50%;
  background-color: #00949d;
  color: white;
  font-weight: bold;
  font-size: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  transform: translate(-50%, -50%);
  transition: box-shadow 0.3s;


  &:hover {
    box-shadow: 0 0 20px rgba(33, 33, 33, 0.5);
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: white;
  }

  @media (min-width: 768px) {
   height: 150px;
   width: 150px;
   font-size: 1rem;
  }
`;

function Circle() {
  return (
    <CircleContainer>
        <CircleDiv>
            <Arrow></Arrow>
        </CircleDiv>
            <InnerText>Ganzheitlicher Ansatz</InnerText>
        <Link to="/leistungen">
            <OuterText style={{ top: "0", left: "50%" }}>Diagnose</OuterText>
        </Link>
        <Link to="/leistungen">
            <OuterText style={{ top: "50%", left: "100%" }}>Therapie</OuterText>
        </Link>
        <Link to="/leistungen">
            <OuterText style={{ top: "100%", left: "50%" }}>Training</OuterText>
        </Link>  
        <Link to="/leistungen">
            <OuterText style={{ top: "50%", left: "0" }}>Prävention</OuterText>
        </Link>  
    </CircleContainer>
  );
}

export default Circle;
