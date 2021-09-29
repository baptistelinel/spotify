import { TrackType } from "../../types/TrackType";
import { Card } from "react-bootstrap";

const Track: React.FC<TrackType> = ({
  name,
  artists,
  duration,
  album,
  previewUrl,
}) => {
  function msToMinutesAndSecondes(ms: number): string {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + seconds;
  }

  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Img variant="top" src={album.cover} />
      <Card.Body>
        <Card.Title>
          {artists.map((artist) => artist.name)} - {name}
        </Card.Title>
        <Card.Text>{msToMinutesAndSecondes(duration)}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <audio controls style={{ width: "260px" }}>
          <source src={previewUrl} type="audio/mpeg" />
        </audio>
      </Card.Footer>
    </Card>
  );
};

export default Track;
