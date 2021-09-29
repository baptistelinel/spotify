import { TrackType } from "../../types/TrackType";

const Track: React.FC<TrackType> = ({ name, id, artists, duration, album }) => {
  function msToMinutesAndSecondes(ms: number): string {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + seconds;
  }

  return (
    <>
      <h2>Track</h2>
      <ul>
        <li>Id : {id}</li>
        <li>Name : {name}</li>
        <li>Duration : {msToMinutesAndSecondes(duration)}</li>
      </ul>
      <h2>Artists</h2>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>Name : {artist.name}</li>
        ))}
      </ul>
      <h2>Album</h2>
      <img src={album.cover} alt="Album cover" />
      <ul>
        <li>Name: {album.name}</li>
        <li>Release Date: {album.releaseDate}</li>
        <li>Total tracks: {album.totalTracks}</li>
      </ul>
    </>
  );
};

export default Track;
