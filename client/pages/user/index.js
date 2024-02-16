import { useContext, useEffect, useState } from "react";
import { Context } from "../../context";
import UserRoute from "../../components/routes/UserRoute";
import axios from "axios";
import { FiRefreshCw } from "react-icons/fi";

const UserIndex = () => {
    const { state: { user } } = useContext(Context);
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadImages();
    }, []);

    const loadImages = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get('/api/user-images');
            setImages(data);
            setLoading(false);
        } catch (err) {
            console.log("shit here is the error")
            console.log(err);
            setLoading(false);
        }
    };

    return (
        <UserRoute>
            {loading && (
                <FiRefreshCw className="d-flex justify-content-center display-1 text-danger p-5" />
            )}
            <h1 className="jumbotron text-center bg-primary square">User dashboard</h1>
            {images && images.map(image => (
                <div key={image._id} className="media pt-2 pb-1 flex">
                    <img
                        className="mr-3 rounded"
                        src={image.image ? image.image.Location : '/background.jpg'}
                        alt={image.name}
                        style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                    />
                    <div className="media-body pl-2">
                        <div className="row">
                            <div className="col">
                                <h5 className="mt-2 text-primary">{image.name}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </UserRoute>
    );
};

export default UserIndex;