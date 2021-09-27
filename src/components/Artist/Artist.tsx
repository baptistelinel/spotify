import React from 'react';
import { useFetchArtist } from '../../hooks/useFetchArtist';
import Loader  from '../Loader';

export interface ArtistModel {
    name: string;
}

interface Props {
    id: string;
};

const Artist: React.FC<Props> = ({ id }) => {
    const { artist, displayLoader } = useFetchArtist(id);

    return (
        displayLoader ? <Loader /> : <div>{ artist?.name }</div> 
    );
}

export default Artist;