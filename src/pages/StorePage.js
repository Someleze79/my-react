import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

// Sample product list
const products = [
    { id: 1, name: 'T-shirt', price: 25 },
    { id: 2, name: 'Sneakers', price: 50 },
    { id: 3, name: 'Hat', price: 15 },
    { id: 4, name: 'Jacket', price: 100 },
  ];
  
  // Product listing with add-to-cart buttons
  const StorePage = () => {
    const dispatch = useDispatch();
  
    return (
      <div>
        <h2>Products</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}
              <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default StorePage;