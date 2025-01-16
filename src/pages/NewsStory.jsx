import { useParams } from "react-router-dom";
import { useGet } from "../hooks/useGet";
import { useEffect } from "react";
import { SectionContainer } from "../components/SectionContainer/SectionContainer";
import nss from "../style/pages/NewsStory.module.scss";

export const NewsStory = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGet(
    `https://api.mediehuset.net/mediesuset/news/${id}`
  );

  const story = data?.item;

  useEffect(() => {
    document.title = `${story?.title} - Mediesuset`;
  }, [story]);

  //   console.log(data);
  return (
    <div className={nss.NewsStory}>
      <img src={story?.image} alt={story?.title} />
      <h2>{story?.title}</h2>
      <p>{story?.datetime}</p>
      <p>{story?.author}</p>
      <p>{story?.teaser}</p>
      <p>{story?.content}</p>
    </div>
  );
};
