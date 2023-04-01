import React from 'react';
import '../nav/nav.css';

function HomePage() {
  return (
    <div>
      {/*Hello*/}
      <header>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/*BOOKS*/}
      <section className="hero-section">
        <h1>Welcome to My Store</h1>
        <p>Discover our latest collection of products</p>
        <button>Shop Now</button>
      </section>

      {/* Featured products section */}
      <section className="featured-products-section">
        <h2>Featured Products</h2>
        <ul>
          <li>
            <img src="product1.jpg" alt="Product 1" />
            <h3>Product 1</h3>
            <p>$19.99</p>
          </li>
          <li>
            <img src="product2.jpg" alt="Product 2" />
            <h3>Product 2</h3>
            <p>$24.99</p>
          </li>
          <li>
            <img src="product3.jpg" alt="Product 3" />
            <h3>Product 3</h3>
            <p>$14.99</p>
          </li>
        </ul>
      </section>

      {/* Footer */}
      <footer>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </footer>
    </div>
  );
}

export default HomePage;
