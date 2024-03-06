import "./product-photos.css";

function ProductPhotos({ topPhotos, bottomPhotos }) {
  return (
    <div className="product-photos">
      <div className="top-photos">
        {topPhotos.map((photo, index) => (
          <img key={index} src={photo} alt={`Top Photo ${index + 1}`} />
        ))}
      </div>
      <div className="bottom-photos">
        {bottomPhotos.map((photo, index) => (
          <img key={index} src={photo} alt={`Bottom Photo ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default ProductPhotos;
