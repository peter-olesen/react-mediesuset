import { useState } from "react";
import { useGet } from "../hooks/useGet";
import { SectionContainer } from "../components/SectionContainer/SectionContainer";
import { StageSwitcher } from "../components/StageSwitcher/StageSwitcher";
import { EventCard } from "../components/EventCard/EventCard";
import { StageGrid } from "../components/StageGrid/StageGrid";

export const Lineup = () => {
  const [filter, setFilter] = useState(0);

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
    <SectionContainer>
      <StageSwitcher setFilter={setFilter} />
      <StageGrid>
        {sortedData.map((item) => {
          if (filter == item.stage_id || filter == 0) {
            return (
              <EventCard
                style={{
                  backgroundColor: `${stageColor[item.stage_id - 1].color}`,
                }}
                key={item.id}
                image={item.image}
                name={item.title}
                date={item.datetime}
              />
            );
          }
        })}
      </StageGrid>
    </SectionContainer>
  );
};
