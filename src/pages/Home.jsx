import { NewsCard } from "../components/NewsCard/NewsCard";
import { useGet } from "../hooks/useGet";

export const Home = () => {
  const { data, isLoading, error } = useGet(
    "https://api.mediehuset.net/mediesuset/news"
  );

  console.log(data);
  return (
    <>
      <p>Home</p>

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
    </>
  );
};
