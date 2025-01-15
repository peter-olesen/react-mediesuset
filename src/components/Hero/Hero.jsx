import hs from "./Hero.module.scss";

export const Hero = ({ imageSource, altText }) => {
  return <img className={hs.Hero} src={imageSource} alt={altText} />;
};
