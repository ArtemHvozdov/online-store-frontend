import "./product.css";
import ProductPhotos from "../../components/product-page/products-page-img/product-photos.jsx";
import ProductInfo from "../../components/product-page/product-info/product-info.jsx";
import ProductDescription from "../../components/product-page/product-description/product-description.jsx";
import ProductCharacteristics from "../../components/product-page/product-characteristics/product-characteristics.jsx";
import topImage1 from "../../assets/images/product-page-images/Product-1.png";
import topImage2 from "../../assets/images/product-page-images/Product-2.png";
import bottomImage3 from "../../assets/images/product-page-images/Product-3.png";
import bottomImage4 from "../../assets/images/product-page-images/Product-4.png";

function Product({ productName, productCode, productPrice, productSizes }) {
  const topPhotos = [topImage1, topImage2];
  const bottomPhotos = [bottomImage3, bottomImage4];

  return (
    <div className="product-page">
      <div className="container">
        <div className="product-сontainer">
          <h2>{productName}</h2>
          <ProductPhotos topPhotos={topPhotos} bottomPhotos={bottomPhotos} />
          <ProductInfo
            productName="Nike Tech Hera Brown Geode Teal"
            productCode="FJ9532"
            productPrice="4 490 грн."
            productSizes={[
              "41",
              "41.5",
              "42",
              "42.5",
              "43",
              "43.5",
              "44",
              "45",
            ]}
          />
        </div>
        <ProductDescription description="Кросівки виготовлені з високоякісних матеріалів, які забезпечують довговічність і зручність протягом тривалого часу. Підошва забезпечує відмінне відшаровування і амортизацію кожного кроку, забезпечуючи вам стабільність та комфорт під час будь-яких активностей. Крім того, їх ергономічний дизайн дозволяє кросівкам ідеально підійти до вашої ноги, надаючи вам найкращий можливий комфорт." />
        <ProductCharacteristics characteristics="Характеристика 1: Значение 1, Характеристика 2: Значение 2, ..." />
      </div>
    </div>
  );
}

export default Product;
