import { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export default function ImageSlider({ url, limit = 5, page = 1 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchImages(url) {
      try {
        setLoading(true);
        const response = await fetch(`${url}?page=${page}&limit=${limit}`);
        const data = await response.json();
        if (data) {
          setImages(data);
          setLoading(false);
        }
      } catch (error) {
        setErrorMsg(error.message);
        setLoading(false);
      }
    }
    fetchImages(url);
  }, [url]);

  console.log(images);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (errorMsg !== null) {
    return <div>Some error occured</div>;
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill className="arrow arrow-left" />
      {images && images.length > 0 ? (
        images.map((image) => {
          return <img key={image.id} src={image.download_url} alt={image.url} style={{objectFit:'cover',height:'500px',width:'500px'}} />
        })
      ) : (
        <div>No iamge</div>
      )}
      <BsArrowRightCircleFill />
    </div>
  );
}
