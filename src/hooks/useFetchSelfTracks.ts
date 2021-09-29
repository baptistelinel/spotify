import { useEffect, useState } from "react";
import { httpGet } from "../services/HttpRequester";
import { mapTrackFromApi } from "../services/TrackMapper";
import { ApiTrackType } from "../types/ApiTrackType";
import { TrackType } from "../types/TrackType";

interface ApiResponse {
  body: { items: { track: ApiTrackType }[] };
}

export const useFetchSelfTracks = () => {
  const [selfTracks, setSelfTracks] = useState<TrackType[]>([]);
  const [displayLoader, setDisplayLoader] = useState(false);

  function getSelfTracks() {
    setDisplayLoader(true);
    return httpGet("/me/tracks");
  }

  useEffect(() => {
    const handleFetchSelfTracks = async () => {
      const response: ApiResponse = await getSelfTracks();
      console.log(response.body);
      const tracks = response.body.items.map(({ track }) => {
        return mapTrackFromApi(track);
      });
      setSelfTracks(tracks);
      setDisplayLoader(false);
    };
    handleFetchSelfTracks();
  }, []);

  return { selfTracks, displayLoader };
};
