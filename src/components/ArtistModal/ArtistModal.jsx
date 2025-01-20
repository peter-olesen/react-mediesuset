import { IoLogoFacebook } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import ams from "./ArtistModal.module.scss";
import { formatTime } from "../../helpers/FormatDateTime";

export const ArtistModal = ({
  isOpen,
  onClose,
  stage,
  time,
  image,
  artist,
  description,
}) => {
  if (!isOpen) return null;

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <div id="artistModal" className={ams.ArtistModal}>
      <p className={ams.Header}>
        {stage} kl. {formatTime(time)}
      </p>
      <div className={ams.Container}>
        <img src={image} alt={artist} />
        <div>
          <h3>{artist}</h3>
          <p>{truncateText(description, 800)}</p>
        </div>
      </div>
      <button onClick={onClose}>Close Modal</button>
      <div className={ams.SocialIcons}>
        <IoLogoFacebook />
        <IoLogoTwitter />
        <IoLogoInstagram />
      </div>
    </div>
  );
};
