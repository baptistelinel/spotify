import { TrackType } from "../types/TrackType";
import { ApiTrackType } from "../types/ApiTrackType";

export const mapTrackFromApi = (apiTrack: ApiTrackType): TrackType => {
  return {
    name: apiTrack.name,
    id: apiTrack.id,
    previewUrl: apiTrack.preview_url,
    duration: apiTrack.duration_ms,
    artists: apiTrack.artists.map((artist) => {
      return { id: artist.id, name: artist.name };
    }),
    album: {
      id: apiTrack.album.id,
      name: apiTrack.album.name,
      releaseDate: apiTrack.album.release_date,
      totalTracks: apiTrack.album.total_tracks,
      cover: apiTrack.album.images[1].url,
    },
  };
};
