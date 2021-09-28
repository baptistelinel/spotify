import { TrackType } from "../../types/TrackType";

const Track: React.FC<TrackType> = ({ name, id }) => {
  return (
    <ul>
      <li>{id}</li>
      <li>{name}</li>
    </ul>
  );
};

export default Track;
