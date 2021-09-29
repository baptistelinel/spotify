import { GridStyle } from "./Grid.style";
import { TrackType } from "../../types/TrackType";
import Track from "../Track";

interface Props {
  tracks: TrackType[];
}

const Grid: React.FC<Props> = ({ tracks }) => {
  return (
    <GridStyle>
      {tracks.map((track) => (
        <Track key={track.id} {...track} />
      ))}
    </GridStyle>
  );
};

export default Grid;
