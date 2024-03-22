import styled from "styled-components";
import Circle from "../components/Circle";
import portrait from "../assets/imgs/avatar.webp" 


const Main = styled.main`

  h1{
    color: #00949d;
  }

  @media (min-width: 860px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80vw;
  }
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`

const ImgContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 860px) {
      display: flex;
      flex-direction: row;
      margin-top:"1rem" ;
      justify-content: space-evenly;
      gap: 2rem;
  }
`


function Home() {
  return (
    <Main>  
        <Intro>
          <ImgContainer>       
            <p>
              <h1>PRAXIS MUSTERMANN</h1>
              Herzlich willkommen in meiner Praxis für Naturheilkunde! Als
              Heilpraktiker verfolge ich einen ganzheitlichen Ansatz für Ihre
              Gesundheit und Ihr Wohlbefinden. Das bedeutet, dass ich nicht nur
              einzelne Symptome betrachte, sondern den Menschen als Ganzes in den
              Mittelpunkt meiner Arbeit stelle.
            </p>
           
            <img src={portrait} alt="" style={{height:"300px", margin:"1rem", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}} />
            
          </ImgContainer>
        
          <p>
            In meiner Praxis beginnt jeder
            Behandlungsprozess mit einer sorgfältigen Diagnose. Durch ausführliche
            Gespräche und Untersuchungen versuche ich, die Ursachen für Ihre
            Beschwerden zu ermitteln und ein umfassendes Verständnis Ihrer
            individuellen Situation zu gewinnen. Basierend auf dieser Diagnose
            entwickle ich gemeinsam mit Ihnen eine maßgeschneiderte Therapie. Dabei
            greife ich auf ein breites Spektrum naturheilkundlicher Methoden zurück. Mein Ziel ist
            es, Ihren Körper bei der Selbstheilung zu unterstützen und das
            natürliche Gleichgewicht wiederherzustellen.
          </p>   
        </Intro>
        <Circle></Circle>
     
        <p style={{padding: "1rem"}}>
            Darüber hinaus biete ich
            Ihnen gezielte Trainingsprogramme an, um Ihre körperliche und mentale
            Gesundheit zu stärken. Diese können Übungen zur Entspannung,
            Bewegungstherapien oder Ernährungsberatung umfassen - je nach Ihren
            individuellen Bedürfnissen und Zielen. Ein wichtiger Bestandteil meiner
            Arbeit ist auch die Prävention. Gemeinsam erarbeiten wir Strategien, um
            Krankheiten vorzubeugen und Ihre Gesundheit langfristig zu erhalten.
            Dabei geht es nicht nur um die Behandlung akuter Beschwerden, sondern
            auch um die Förderung eines gesunden Lebensstils und eines bewussten
            Umgangs mit Ihrem Körper. Ich freue mich darauf, Sie auf Ihrem Weg zu
            mehr Gesundheit und Wohlbefinden zu begleiten und Ihnen dabei zu helfen,
            Ihr volles Potenzial zu entfalten. Vereinbaren Sie gerne einen Termin in
            meiner Praxis, um mehr über meine ganzheitliche Herangehensweise an die
            Gesundheit zu erfahren.
        </p> 
      
    </Main>
  );
}

export default Home;
