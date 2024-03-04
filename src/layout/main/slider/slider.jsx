import './slider.css';
import axios from 'axios';
import Carousel from './../.././../components/Carousel.jsx';
import ProductCard from '../../../components/product-card/product-card.jsx';
import { useState, useEffect } from 'react';
import Text from '../../../components/text/text.jsx';
import productImg from './../../../assets/images/product-images/product-1.png'

function Slider() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://pulse-run-api.onrender.com/api/products/newest');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className='main_block_carausel'>
            
                {products.map((product) => (
                        <ProductCard 
                            key={product._id}
                            type="newest"
                            productImage={product.Galerry}
                            tittle={product.name}
                            price={product.price}
                        />
                    )
                )}
            
        </div>
    );
}



export default Slider;
