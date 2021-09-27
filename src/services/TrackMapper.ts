import { Track } from '../types/Track';

export interface ApiTrack {
    name: string;
};

export const mapTrackFromApi = (apiTrack: ApiTrack): Track => {
    return {
        name: apiTrack.name,
    };
};