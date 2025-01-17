import { useGet } from "../../hooks/useGet";
import sss from "./StageSwitcher.module.scss";

export const StageSwitcher = ({ setFilter }) => {
  const { data, isLoading, error } = useGet(
    "https://api.mediehuset.net/mediesuset/stages"
  );

  return (
    <div className={sss.StageSwitcher}>
      <ul>
        <li onClick={() => setFilter(0)}>A - Å</li>
        {data?.items?.map((stage) => {
          return (
            <li key={stage.id} onClick={() => setFilter(stage.id)}>
              {stage.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
