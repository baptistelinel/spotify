interface Artist {
  name: string;
  id: string;
}

export interface TrackType {
  name: string;
  id: string;
  duration: number;
  artists: Artist[];
}
