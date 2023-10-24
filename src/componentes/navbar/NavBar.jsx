import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../cart/CartWidget';

function NavBar({ categories }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand text-light" href="/dashboard">Mi Tienda</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/">Inicio</Link>
            </li>
            {categories.map((category) => (
              <li className="nav-item" key={category.id}>
                <Link to={`/categoria/${category.id}`} className="nav-link text-light">
                  {category.name}
                </Link>
              </li>
            ))}
            <li className="nav-item text-light">
              <CartWidget />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
