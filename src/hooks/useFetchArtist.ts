import { useEffect, useState } from 'react';
import { httpGet } from '../services/HttpRequester';
import { ArtistModel } from '../components/Artist';

export const useFetchArtist = (id: string) => {
    const [artist, setArtist] = useState<ArtistModel>();
    const [displayLoader, setDisplayLoader] = useState(false);

    function getArtist() {
        setDisplayLoader(true);
        return httpGet('/artists/' + id);
    }

    useEffect(() => {
        const handleFetchArtist = async () => {
            const response = await getArtist();
            setArtist(response.body);
            setDisplayLoader(false);
        }
        handleFetchArtist();
    }, []);

    return { artist , displayLoader};
}