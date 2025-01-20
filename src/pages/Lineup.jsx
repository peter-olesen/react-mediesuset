import { useState } from "react";
import { useGet } from "../hooks/useGet";
import { Hero } from "../components/Hero/Hero";
import { SectionContainer } from "../components/SectionContainer/SectionContainer";
import { StageSwitcher } from "../components/StageSwitcher/StageSwitcher";
import { EventCard } from "../components/EventCard/EventCard";
import { StageGrid } from "../components/StageGrid/StageGrid";
import { ArtistModal } from "../components/ArtistModal/ArtistModal";
import { formatDateTime } from "../helpers/FormatDateTime.jsx";

import HeroImg from "../assets/img/Hero1.png";

export const Lineup = () => {
  const [filter, setFilter] = useState(0);
  const [open, setOpen] = useState(false);
  const [selectedArtist, setSelectedArtist] = useState(null);

  const closeModal = () => {
    setOpen(false);
    setSelectedArtist(null);
  };

  const openModal = (artist) => {
    setOpen(true);
    setSelectedArtist(artist);
  };

  const { data, isLoading, error } = useGet(
    "https://api.mediehuset.net/mediesuset/events"
  );

  const filteredData = data?.items?.filter(
    (item) => filter === 0 || filter === item.stage_id
  );

  const sortedData =
    filter === 0
      ? filteredData?.sort((a, b) => a.title.localeCompare(b.title))
      : filteredData;

  const stageColor = [
    { id: 1, color: "#e9485b" },
    { id: 2, color: "#4a6fbf" },
    { id: 3, color: "#54a047" },
    { id: 4, color: "#a12e8f" },
  ];

  return (
    <>
      <ArtistModal
        isOpen={open}
        onClose={closeModal}
        stage={selectedArtist?.stage_name}
        time={selectedArtist?.datetime}
        image={selectedArtist?.image}
        artist={selectedArtist?.title}
        description={selectedArtist?.description}
      />
      <Hero imageSource={HeroImg} altText="Hero Image" />
      <SectionContainer>
        <h2>LINE UP</h2>
        <StageSwitcher setFilter={setFilter} />
        <StageGrid>
          {sortedData?.map((item) => {
            if (filter == item.stage_id || filter == 0) {
              return (
                <EventCard
                  style={{
                    backgroundColor: `${stageColor[item.stage_id - 1].color}`,
                  }}
                  key={item.id}
                  image={item.image}
                  name={item.title}
                  date={formatDateTime(item.datetime)}
                  onClick={() => openModal(item)}
                />
              );
            }
          })}
        </StageGrid>
      </SectionContainer>
    </>
  );
};
