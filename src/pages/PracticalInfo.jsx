import { SectionContainer } from "../components/SectionContainer/SectionContainer";
import map from "../assets/img/mediesuset-map.jpg";

export const PracticalInfo = () => {
  return (
    <SectionContainer>
      <h2>Praktisk Info</h2>
      <img src={map} alt="Kort over pladsen" />
    </SectionContainer>
  );
};
