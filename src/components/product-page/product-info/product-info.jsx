import "./product-info.css";
import Button from "../../../components/button/button.jsx";
import originalIcon from "../../../../public/icons/product-page-icons/original.svg";
import deliveryIcon from "../../../../public/icons/product-page-icons/delivery.svg";
import exchangeIcon from "../../../../public/icons/product-page-icons/exchange.svg";
import conditionsIcon from "../../../../public/icons/product-page-icons/conditions.svg";
import FavoriteButton from "../../favorite-button/favorite-button.jsx";

function ProductInfo({ productName, productCode, productPrice, productSizes }) {
  return (
    <div className="product-info">
      <p className="product-title">{productName}</p>
      <p className="product-code-block">
        <span className="label">Артикул:</span>{" "}
        <span className="product-code">{productCode}</span>
      </p>
      <p className="product-price">{productPrice}</p>
      <p className="product-size-title">Розмірна сітка:</p>
      <ul className="product-sizes">
        {productSizes.map((size, index) => (
          <li key={index} className={size === "42" ? "active" : ""}>
            {size}
          </li>
        ))}
      </ul>
      <div className="btn-block">
        <Button
          className="button__add-to-cart"
          btnText="Додати в кошик"
        ></Button>
        <FavoriteButton className="favorite__btn" />
      </div>
      <div className="info-list">
        <div className="info-item">
          <img src={originalIcon} alt="Favorite" className="info-icon" /> Тільки
          оригінал
        </div>
        <div className="info-item">
          <img src={deliveryIcon} alt="Delivery" className="info-icon" />{" "}
          Доставка 1-2 дні
        </div>
        <div className="info-item">
          <img src={exchangeIcon} alt="Exchange" className="info-icon" /> Легкий
          обмін та повернення
        </div>
        <div className="info-item">
          <img src={conditionsIcon} alt="Payment" className="info-icon" /> Умови
          оплати, доставки та повернення
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
