import { TrackType } from "../../types/TrackType";

const Track: React.FC<TrackType> = ({ name }) => {
  return <div>{name}</div>;
};

export default Track;
