import { TrackType } from "../types/TrackType";
import { ApiTrackType } from "../types/ApiTrackType";
import Artist from "../components/Artist";

export const mapTrackFromApi = (apiTrack: ApiTrackType): TrackType => {
  return {
    name: apiTrack.name,
    id: apiTrack.id,
    duration: apiTrack.duration_ms,
    artists: apiTrack.artists.map((artist) => {
      return { id: artist.id, name: artist.name };
    }),
  };
};
