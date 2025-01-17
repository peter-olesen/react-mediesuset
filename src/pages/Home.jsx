import hs from "../style/pages/Home.module.scss";

import { NewsCard } from "../components/NewsCard/NewsCard";
import { useGet } from "../hooks/useGet";
import { Hero } from "../components/Hero/Hero";
import { SectionContainer } from "../components/SectionContainer/SectionContainer";

import HeroImg from "../assets/img/Hero1.png";

export const Home = () => {
  const { data, isLoading, error } = useGet(
    "https://api.mediehuset.net/mediesuset/news"
  );

  // console.log(data);
  return (
    <>
      <Hero imageSource={HeroImg} altText="Hero Image" />
      <SectionContainer>
        <h2>NYHEDER</h2>
        <div className={hs.CardContainer}>
          {data?.items?.map((item) => {
            return (
              <NewsCard
                key={item.title}
                image={item.image}
                title={item.title}
                content={item.teaser}
                id={item.id}
              />
            );
          })}
        </div>
      </SectionContainer>
    </>
  );
};
