import React from 'react';
import { useParams , Link } from 'react-router-dom';
import { categories } from '../../data';

function CategoryProducts({ products }) {
  const { categoryId } = useParams();
  const filteredProducts = products.filter((product) => product.categoryId.toString() === categoryId);
  const category = categories.find((cat) => cat.id.toString() === categoryId);

  const categoryName = category ? category.name : 'Categoría no encontrada';

  return (
    <div className="container">
      <h2>{categoryName}</h2>
      <div className="row">
        {filteredProducts.map((product) => (
          <div className="col-md-3" key={product.id}>
            <div className="card mb-3" style={{"height" : "650px"}}>
              <img src={product.image} style={{"height" : "350px"}} className="card-img-top p-2" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Stock: {product.stock} Unidades</p>
                <p className="card-text">Descripción: {product.description}</p>
                <p className="card-text">Precio: ${product.price}</p>
                <Link to={`/item/${product.id}`} className="btn btn-primary">
                  Detalles
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryProducts;
