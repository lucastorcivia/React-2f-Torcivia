import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../cart/CartContext';
import { Link } from 'react-router-dom';
import {products} from '../../data';

function ItemDetail() {
  const { id } = useParams();
  const { dispatch } = useCart();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    if (quantity <= product.stock) {
      for (let i = 0; i < quantity; i++) {
        dispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity: 1 } });
      }
    } else {
      alert('No hay suficiente stock');
    }
  };

  useEffect(() => {
    const selectedProduct = products.find((product) => product.id.toString() === id);
    setProduct(selectedProduct);
  }, [id]);


  return (
    <div className="container">
      <h2 className="text-center mt-2">Detalles del Producto</h2>
      {product ? (
      <div>
        <div className="row">
          <div className="col-md-4">
            <div className='card col-md-12 mb-2'>
              <img src={product.image} style={{"height" : "300px"}} className="card-img-top"/>
            </div>
          </div>
          <div className="col-md-8">
              <div className="card  p-2">
                <h3 className="text-left">{product.name}</h3>
                <p className="text-left">Precio: ${product.price}</p>
                <p className="text-left">Stock: {product.stock} Unidades</p>
              </div>
          </div>
          <div className="col-md-4">
              <div className="card  mb-2">
                <div className="text-center">
                  <h5>Cantidades</h5>
                  <button className='btn btn-primary' onClick={handleDecrement} disabled={quantity === 1}>-</button>
                  <span className='p-2'>{quantity}</span>
                  <button className='btn btn-primary' onClick={handleIncrement} disabled={quantity >= product.stock}>+</button>
                </div>
                <button onClick={handleAddToCart} className="btn btn-primary mx-auto d-block mb-2 mt-2">
                  Agregar al carrito
                </button>
                <Link to="/" className="text-center d-block mt-2 mb-2">Volver</Link>
              </div>
          </div>
        </div>
      </div>

      ) : (
        <h2 className="text-center">Producto no encontrado</h2>
      )} 
    </div>
    
  );
}

export default ItemDetail;
