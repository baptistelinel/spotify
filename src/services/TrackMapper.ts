import { TrackType } from "../types/TrackType";
import { ApiTrackType } from "../types/ApiTrackType";

export const mapTrackFromApi = (apiTrack: ApiTrackType): TrackType => {
  return {
    name: apiTrack.name,
  };
};
