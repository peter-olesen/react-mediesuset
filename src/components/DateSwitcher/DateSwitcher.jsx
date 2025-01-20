import dss from "./DateSwitcher.module.scss";

export const DateSwitcher = ({ setFilter }) => {
  return (
    <div className={dss.DateSwitcher}>
      <ul>
        <li onClick={() => setFilter(0)}>ONSDAG</li>
        <li onClick={() => setFilter(1)}>TORSDAG</li>
        <li onClick={() => setFilter(2)}>FREDAG</li>
        <li onClick={() => setFilter(3)}>LØRDAG</li>
        {/* {data?.items?.map((date) => {
          return (
            <li key={date.id} onClick={() => setFilter(date.id)}>
              {date.name}
            </li>
          );
        })} */}
      </ul>
    </div>
  );
};
