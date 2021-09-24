import { useEffect, useState } from 'react';
import { ArtistModel } from '../components/Artist';
import { httpGet } from '../services/HttpRequester';

export const useFetchArtist = (id: string) => {
    const [artist, setArtist] = useState<ArtistModel>();

    useEffect(() => {
        const handleFetchArtist = async () => {
            const response = await httpGet('/artists/' + id);
            setArtist(response.body);
        }
        handleFetchArtist();
    }, []);

    return { artist };
}