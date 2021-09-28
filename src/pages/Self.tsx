import Track from "../components/Track";
import { useFetchSelfTracks } from "../hooks/useFetchSelfTracks";
import Loader from "../components/Loader";

const Self: React.FC<{}> = () => {
  const { selfTracks, displayLoader } = useFetchSelfTracks();

  return (
    <>
      {displayLoader ? (
        <Loader />
      ) : (
        selfTracks.map((track) => {
          return <Track key={track.name} {...track} />;
        })
      )}
    </>
  );
};

export default Self;
