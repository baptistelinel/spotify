import Track from "../components/Track";
import { useFetchSelfTracks } from "../hooks/useFetchSelfTracks";
import Loader from "../components/Loader";

const Self: React.FC<{}> = () => {
  const { selfTracks, displayLoader } = useFetchSelfTracks();
  console.log(selfTracks);

  return (
    <>
      {displayLoader ? (
        <Loader />
      ) : (
        selfTracks.map((track) => {
          return <Track key={track.id} {...track} />;
        })
      )}
      <h2>Liked tracks : {selfTracks.length}</h2>
    </>
  );
};

export default Self;
