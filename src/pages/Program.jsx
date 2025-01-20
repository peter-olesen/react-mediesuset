import { useState } from "react";
import { useGet } from "../hooks/useGet";
import { Hero } from "../components/Hero/Hero";
import { SectionContainer } from "../components/SectionContainer/SectionContainer";
import { DateSwitcher } from "../components/DateSwitcher/DateSwitcher";
import { StageHeader } from "../components/StageHeader/StageHeader";
import { StageRow } from "../components/StageRow/StageRow";

import HeroImg from "../assets/img/Hero3.png";

export const Program = () => {
  const [filter, setFilter] = useState(0);

  const { data, isLoading, error } = useGet(
    "https://api.mediehuset.net/mediesuset/events"
  );

  // console.log(data);

  return (
    <>
      <Hero imageSource={HeroImg} altText="Hero Image" />
      <SectionContainer>
        <h2>PROGRAM</h2>
        <DateSwitcher setFilter={setFilter} />
        <StageHeader stageName="RØD SCENE" />
        <StageRow time="1234" artist="mimeimde" />
        <StageRow time="1234" artist="mimeimde" />
        <StageRow time="1234" artist="mimeimde" />
        <br />
        <StageHeader stageName="RØD SCENE" />
        <StageRow time="1234" artist="mimeimde" />
        <StageRow time="1234" artist="mimeimde" />
        <StageRow time="1234" artist="mimeimde" />
      </SectionContainer>
    </>
  );
};
