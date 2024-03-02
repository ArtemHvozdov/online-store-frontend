import './main.css';
import ProductCard from '../../components/product-card/product-card.jsx';
import product1 from './../../assets/images/product-images/product-1.png'
// import Carousel from './../../components/Carousel.jsx';

function Main() {
    return (
        <main className="main">
            <div className="container">
                <ProductCard 
                    type="catalog"
                    productImage={product1}
                    tittle="Футбольні бутси COPA PURE II"
                    price="3 299"
                    fullPrice="3 299" 
                    salePrice="2 000"
                />
            </div>
        </main>
    )
}

export default Main;
