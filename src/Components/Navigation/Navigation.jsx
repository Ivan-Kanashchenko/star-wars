import { useContent } from "../ContentContext/ContentContext";

const Navigation = () => {
  const { contentHandler } = useContent();

  const contentTypeHandler = (e) => {
    contentHandler(e.target.name);
  };
  return (
    <ul className="app-navigation">
      <li>
        <a href="#" name={"films"} onClick={contentTypeHandler}>
          films
        </a>
      </li>
      <li>
        <a href="#" name={"people"} onClick={contentTypeHandler}>
          people
        </a>
      </li>
      <li>
        <a href="#" name={"planets"} onClick={contentTypeHandler}>
          planets
        </a>
      </li>
    </ul>
  );
};

export default Navigation;
