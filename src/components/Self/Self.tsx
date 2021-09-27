import { useFetchSelfTracks } from '../../hooks/useFetchSelfTracks';
import Loader  from '../Loader';

const Self = () => {
    const { selfTracks, displayLoader } = useFetchSelfTracks();
    console.log(selfTracks);
    return (
        displayLoader ? <Loader /> : <div>Toto</div>
    );
};

export default Self;