import styled from "styled-components";
import { useState } from "react";

const Container = styled.main`

  @media(min-width: 860px){
    position: relative;
    width: 80%;
    overflow: hidden;
  }

`;

const HalfCircle = styled.div`
  width: 300px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #eee;
  transform: translateX(-50%);

  &::before {
    content: "";
    position: absolute;
    inset: 20px;
    border-radius: inherit;
    background: white;
  }

`;

const OuterText = styled.div`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  background-color: #00949d;
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  transform: translate(-50%, -50%);
`;

const Section = styled.section`

  @media(min-width: 860px){
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 2rem;
  }
`;

const Text = styled.p`

  padding: 1rem;
  margin-top: 0;

  @media(min-width: 860px){
    width: 80%;
    margin: 0;
  }
  
`

const MobileHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-left: 1rem;

    span{
      display: block;
      width: 40px;
      height: 5px;
      border-radius: 9px;
      background-color: #00949d;
    }
    h2{
      font-weight: 500;
    }
`



;

function Leistungen() {

  const [isDesktopHeader, setIsDesktopHeader] = useState(false)

  const handleResize = () => {
    setIsDesktopHeader(window.innerWidth >= 860);
  }

  window.addEventListener('resize', handleResize)


  

  return (
    <Container>
      <Section>
           <>
      {(window.innerWidth >= 860 || isDesktopHeader)? (
        <HalfCircle id="id">
          <OuterText style={{ top: "50%", left: "100%" }}>Diagnose</OuterText>
        </HalfCircle>
      ) : (
        <MobileHeader>
          <span></span>
          <h2>Diagnose</h2>
        </MobileHeader>
      )}
    </>
        <Text>
          Erfahren Sie mehr über unsere umfassenden Diagnosemethoden, die es uns
          ermöglichen, Ihre Gesundheit ganzheitlich zu erfassen und individuelle
          Behandlungspläne zu erstellen. Körperliche/klinische Untersuchung des
          Körpers: Durch sorgfältiges Betrachten, Abtasten, Abklopfen und
          Abhören des Körpers erhalten wir wichtige Informationen über Ihre
          körperliche Gesundheit und mögliche Ungleichgewichte. Funktionelle
          Analyse des Bewegungsapparates: Wir führen eine gründliche
          Untersuchung des Bewegungsapparates durch, um Funktionsstörungen,
          Muskelungleichgewichte und Bewegungseinschränkungen zu identifizieren.
          Sonographie: Mit moderner Sonographietechnologie können wir
          strukturelle Veränderungen im Körpergewebe visualisieren und
          diagnostizieren. Abdomendiagnostik in Zusammenhang mit
          Faszienketten/Akupunkturpunkte: Wir untersuchen die Bauchregion in
          Verbindung mit Faszienketten und Akupunkturpunkten, um Zusammenhänge
          zwischen inneren Organen, Faszien und energetischen Bahnen zu
          erkennen. Augendiagnose: Durch genaue Betrachtung der Augenstrukturen
          erhalten wir wertvolle Hinweise auf mögliche gesundheitliche Probleme
          und Ungleichgewichte im Körper.
        </Text>
      </Section>
      <Section style={{marginLeft:"0"}}>
        
        {(window.innerWidth < 860 && !isDesktopHeader) &&
            <MobileHeader>
                <span></span>
                <h2>Therapie</h2>
            </MobileHeader>
        }
      
        <Text>
          Entdecken Sie die vielfältigen natürlichen Heilmethoden und Therapien,
          die wir anbieten, um Ihre Gesundheit und Ihr Wohlbefinden zu fördern.
          Faszienbehandlung: Verbessern Sie Ihre Beweglichkeit und lindern Sie
          Schmerzen mit unserer spezialisierten Faszienbehandlung. Schröpfen:
          Erleben Sie die revitalisierende Wirkung des Schröpfens, um Blockaden
          zu lösen und die natürliche Selbstheilung des Körpers zu unterstützen.
          Lasertherapie (Softlaser): Nutzen Sie die sanfte Kraft der
          Lasertherapie zur Schmerzlinderung und zur Förderung der
          Geweberegeneration. Chiropraktik: Entdecken Sie die transformative
          Wirkung der Chiropraktik, um Ihre Wirbelsäule auszurichten und Ihr
          gesamtes Wohlbefinden zu verbessern. Osteopathische Techniken: Erleben
          Sie die heilsame Berührung der osteopathischen Techniken, um die
          Balance Ihres Körpers wiederherzustellen und Schmerzen zu lindern.
          Baunscheidtieren: Entdecken Sie die natürliche Heilkraft des
          Baunscheidtierens, um Ihre Selbstheilungskräfte zu aktivieren und Ihre
          Gesundheit zu stärken. Akupunktur: Tauchen Sie ein in die
          jahrhundertealte Tradition der Akupunktur, um Ihr Energiesystem
          auszugleichen und Ihr Wohlbefinden zu steigern. Phytotherapie:
          Vertrauen Sie auf die heilende Kraft der Natur mit unserer individuell
          abgestimmten Phytotherapie, um Ihre Gesundheit auf natürliche Weise zu
          unterstützen.
        </Text>
        {(window.innerWidth >= 860 || isDesktopHeader) &&
            <HalfCircle style={{transform:"translateX(50%)"}}>
              <OuterText style={{ top: "50%", left: "0" }}>Therapie</OuterText>
            </HalfCircle>
        }
        
      </Section>
      <Section>
      {(window.innerWidth >= 860 || isDesktopHeader)? (
          <HalfCircle>
              <OuterText style={{ top: "50%", left: "100%" }}>Training</OuterText>
          </HalfCircle>
      ) : (
        <MobileHeader>
            <span></span>
            <h2>Training</h2>
        </MobileHeader>
      )}
       
        <Text>
          Entdecken Sie unsere maßgeschneiderten Trainingsangebote, um Ihre
          Fitnessziele zu erreichen und Ihre Leistungsfähigkeit zu steigern.
          Unser Personal Training ist genau auf Ihre Bedürfnisse und Ziele
          zugeschnitten und wird von erfahrenen Trainern begleitet. Von der
          Bewegungsanalyse bis zum präventiven Training bieten wir Ihnen
          professionelle Unterstützung, um Verletzungen vorzubeugen und Ihre
          Beweglichkeit zu erhalten. Für Leistungssportler bieten wir
          individuelle Betreuung und Unterstützung, um Ihre Leistung zu
          optimieren und Verletzungen zu vermeiden. Vereinbaren Sie noch heute
          einen Termin und starten Sie Ihr persönliches Trainingsprogramm für
          mehr Fitness und Wohlbefinden!
        </Text>
      </Section>
      <Section id="prevention" style={{marginLeft:"0"}}>
        {(window.innerWidth < 860 && !isDesktopHeader) &&
            <MobileHeader>
                <span></span>
                <h2>Prävention</h2>
            </MobileHeader>
        }
        <Text>
          Entdecken Sie unsere vielfältigen Angebote im Bereich Prävention, um
          Ihre langfristige Gesundheit und Lebensqualität zu fördern. Mit
          unserer Bewegungsanalyse identifizieren wir mögliche Dysbalancen und
          Schwachstellen, um Ihnen ein maßgeschneidertes Trainingsprogramm zu
          bieten. Zudem unterstützen wir Sie bei Ihrer Genesung nach
          Verletzungen oder Operationen mit speziell angepasstem Aufbautraining,
          um Rückfälle zu verhindern und Ihre Beweglichkeit zu verbessern. Unser
          präventives Training zielt darauf ab, Verletzungen vorzubeugen und Ihr
          Wohlbefinden zu steigern. Durch individuelles Personal Training
          begleiten wir Sie Schritt für Schritt auf Ihrem Weg zu mehr Fitness
          und Wohlbefinden. Vereinbaren Sie noch heute einen Termin und
          investieren Sie in Ihre langfristige Gesundheit!
        </Text>
        {(window.innerWidth >= 860 || isDesktopHeader) &&
            <HalfCircle style={{transform:"translateX(50%)"}}>
                <OuterText style={{ top: "50%", left: "0" }}>Prävention</OuterText>
            </HalfCircle>
        }
       
      </Section>
    </Container>
  );
}

export default Leistungen;
