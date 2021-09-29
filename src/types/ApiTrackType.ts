interface Artist {
  name: string;
  id: string;
}

export interface ApiTrackType {
  name: string;
  id: string;
  duration_ms: number;
  artists: Artist[];
}
