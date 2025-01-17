import { Hero } from "../components/Hero/Hero";
import { SectionContainer } from "../components/SectionContainer/SectionContainer";
import cs from "../style/pages/Camps.module.scss";
import HeroImg from "../assets/img/Hero2.png";
import { useGet } from "../hooks/useGet";

export const Camps = () => {
  const { data, isLoading, error } = useGet(
    "https://api.mediehuset.net/mediesuset/camps"
  );

  const camp = data?.items;

  // console.log(data);

  return (
    <>
      <Hero imageSource={HeroImg} altText="Hero Image" />
      <SectionContainer>
        <h2>CAMPS</h2>
        {camp?.map((item) => {
          return (
            <div key={item.id} className={cs.Camp}>
              <div>
                <h3>{item.name}</h3>
                <p>Kapacitet: {item.num_people} personer</p>
                <p>{item.description}</p>
                <ul>
                  <b>Billetter:</b>
                  {item.tickets.map((item) => {
                    return <li key={item.id}>{item.name}</li>;
                  })}
                </ul>
              </div>
              <img src={item.image} alt={item.name} />
            </div>
          );
        })}
      </SectionContainer>
    </>
  );
};
