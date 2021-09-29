import { useFetchSelfTracks } from "../hooks/useFetchSelfTracks";
import Loader from "../components/Loader";
import Grid from "../components/Grid";

const Self: React.FC<{}> = () => {
  const { selfTracks, displayLoader } = useFetchSelfTracks();
  console.log(selfTracks);

  return (
    <>
      {displayLoader ? <Loader /> : <Grid tracks={selfTracks} />}
      <h2>Liked tracks : {selfTracks.length}</h2>
    </>
  );
};

export default Self;
