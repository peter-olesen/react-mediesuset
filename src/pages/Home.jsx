import hs from "../style/pages/Home.module.scss";

import { NewsCard } from "../components/NewsCard/NewsCard";
import { useGet } from "../hooks/useGet";
import { Hero } from "../components/Hero/Hero";
import { SectionContainer } from "../components/SectionContainer/SectionContainer";

import Hero1 from "../assets/img/Hero1.png";

export const Home = () => {
  const { data, isLoading, error } = useGet(
    "https://api.mediehuset.net/mediesuset/news"
  );

  // console.log(data);
  return (
    <>
      <Hero imageSource={Hero1} altText="Hero Image" />
      <SectionContainer>
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
