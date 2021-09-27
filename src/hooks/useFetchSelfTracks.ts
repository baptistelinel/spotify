import { useEffect, useState } from "react";
import { httpGet } from "../services/HttpRequester";
import { ApiTrack, mapTrackFromApi } from "../services/TrackMapper";
import { Track } from "../types/Track";

interface ApiResponse {
  body: { items: { track: ApiTrack }[] };
}

export const useFetchSelfTracks = () => {
  const [selfTracks, setSelfTracks] = useState<Track[]>([]);
  const [displayLoader, setDisplayLoader] = useState(false);

  function getSelfTracks() {
    setDisplayLoader(true);
    return httpGet("/me/tracks");
  }

  useEffect(() => {
    const handleFetchSelfTracks = async () => {
      const response: ApiResponse = await getSelfTracks();
      const tracks = response.body.items.map(({ track }) => {
        return mapTrackFromApi(track);
      });
      response.body.items.forEach(({ track }) => {
        tracks.push(mapTrackFromApi(track));
      });
      setSelfTracks(tracks);
      setDisplayLoader(false);
    };
    handleFetchSelfTracks();
  }, []);

  return { selfTracks, displayLoader };
};
