interface ArtistType {
  name: string;
  id: string;
}

interface AlbumType {
  id: string;
  name: string;
  releaseDate: string;
  totalTracks: number;
  cover: string;
}

export interface TrackType {
  name: string;
  id: string;
  duration: number;
  artists: ArtistType[];
  album: AlbumType;
  previewUrl: string;
}
