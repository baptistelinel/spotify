import React from 'react';
import { useFetchArtist } from '../hooks/useFetchArtist';

export interface ArtistModel {
    id: string;
    name: string;
    genres: [];
};

interface Props {
    id: string;
};

const Artist: React.FC<Props> = ({ id }) => {
    const { artist } = useFetchArtist(id);
    console.log(artist);

    return (
        <div>
            { artist?.name }
        </div>
    );
}

export default Artist;