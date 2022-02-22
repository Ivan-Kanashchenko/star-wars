import { usePlanetData } from "../../../customHooks/customHooks";
import PlanetItem from "./PlanetItem/PlanetItem";

const Planets = () => {
  const { status, data, error } = usePlanetData();

  return (
    <div className="content-cards">
      {status === "loading" ? (
        "Loading..."
      ) : status === "error" ? (
        <span>Error: {error.message}</span>
      ) : (
        <>
          {data.results.map((item) => (
            <PlanetItem
              climate={item.climate}
              created={item.created}
              diameter={item.diameter}
              edited={item.edited}
              name={item.name}
              url={item.url}
              key={item.name}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default Planets;
