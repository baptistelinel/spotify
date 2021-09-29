interface ArtistType {
  name: string;
  id: string;
}

interface AlbumType {
  id: string;
  name: string;
  release_date: string;
  total_tracks: number;
  images: { url: string }[];
}

export interface ApiTrackType {
  name: string;
  id: string;
  duration_ms: number;
  artists: ArtistType[];
  album: AlbumType;
}
