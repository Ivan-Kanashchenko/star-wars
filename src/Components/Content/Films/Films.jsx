import { useFilmsData } from "../../../customHooks/customHooks";
import FilmItem from "./FilmItem/FilmItem";

const Films = () => {
  const { status, data, error } = useFilmsData();

  return (
    <div className="content-cards">
      {status === "loading" ? (
        "Loading..."
      ) : status === "error" ? (
        <span>Error: {error.message}</span>
      ) : (
        <>
          {data.results.map((item) => (
            <FilmItem
              key={item.episode_id}
              title={item.title}
              episode_id={item.episode_id}
              opening_crawl={item.opening_crawl}
              director={item.director}
              producer={item.producer}
              release_date={item.release_date}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default Films;
