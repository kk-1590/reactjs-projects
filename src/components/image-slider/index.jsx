import { useState, useEffect, useRef } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";

export default function ImageSlider({ url, limit = 5, page = 1 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  let timeoutRef = useRef(null);

 useEffect(() => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
        setCurrentSlide((prev) => currentSlide === images.length - 1 ? 0 : prev + 1);
    },4000);
 },[currentSlide]);

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

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  console.log(images);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (errorMsg !== null) {
    return <div>Some error occured</div>;
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="arrow arrow-left"
      />
      {images && images.length > 0 ? (
        images.map((image, index) => {
          return (
            <img
              key={image.id}
              src={image.download_url}
              alt={image.url}
              className={
                currentSlide === index ? "current-image" : "hide-image"
              }
            />
          );
        })
      ) : (
        <div>No image</div>
      )}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      />
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => {
              return (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={
                    index === currentSlide
                      ? "current-indicator active"
                      : "current-indicator"
                  }
                ></button>
              );
            })
          : null}
      </span>
    </div>
  );
}
