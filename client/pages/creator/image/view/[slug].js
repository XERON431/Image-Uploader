import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import CreatorRoute from '../../../../components/routes/CreatorRoute';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

import { toast } from 'react-toastify';
import { FaEdit, FaToggleOn } from 'react-icons/fa';

const ImageView = () => {
  const [image, setImage] = useState({});
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    loadImage();
  }, [slug]);

  const loadImage = async () => {
    try {
      const { data } = await axios.get(`/api/image/${slug}`);
      setImage(data);
    } catch (error) {
      console.error('Error loading image:', error);
    }
  };

  const handlePublish = async (e, imageId) => {
    try {
      let answer = window.confirm('Are you sure you want to publish? It will be live.');
      if (!answer) return;

      const { data } = await axios.put(`/api/image/publish/${imageId}`);
      setImage(data);
      toast('Congratulations! Your image is live.');
    } catch (err) {
      console.error('Error publishing image:', err);
      toast('Image publish failed. Try again.');
    }
  };

  const handleUnpublish = async (e, imageId) => {
    try {
      let answer = window.confirm('Are you sure you want to unpublish?');
      if (!answer) return;

      const { data } = await axios.put(`/api/image/unpublish/${imageId}`);
      setImage(data);
      toast('Your image is unpublished.');
    } catch (err) {
      console.error('Error unpublishing image:', err);
      toast('Image unpublish failed. Try again.');
    }
  };

  return (
    <CreatorRoute>
      <div className="container-fluid pt-3">
        {image && (
          <div className="container-fluid pt-1">
            <div className="d align-items-center pt-2">
              <img
                src={image.image ? image.image.Location : '/1-8.jpg'}
                alt="Image Thumbnail"
              />
              
              <div className="flex">
                <div className="ml-3">
                  <h5 className="text-primary">{image.name}</h5>
                  <p style={{ fontSize: '10px' }}>{image.category}</p>
                </div>
              </div>
              <div className="align-items-right">
                
                <FaEdit
                  style={{
                    cursor: 'pointer',
                    marginRight: '10px',
                    color: '#007bff',
                    fontSize: '20px',
                  }}
                  onClick={() => {
                    router.push(`/creator/image/edit/${slug}`);
                  }}
                />

                
                <FaToggleOn
                  style={{
                    cursor: 'pointer',
                    color: image.published ? '#4caf50' : '#d9534f', // Green if published, Red if not
                    fontSize: '20px',
                  }}
                  onClick={(e) => (image.published ? handleUnpublish(e, image._id) : handlePublish(e, image._id))}
                />
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col">
                <ReactMarkdown>{image.description}</ReactMarkdown>
              </div>
            </div>
            <br />
          </div>
        )}
      </div>
    </CreatorRoute>
  );
};

export default ImageView;
