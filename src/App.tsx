export default function App() {
  return (
    <div className="app-container">
      <header className="main-header">
        <div className="header-left">
          <img src="/images/logo.svg" alt="Sneakers logo" className="logo" />
          <nav className="main-nav">
            <ul>
              <li><a href="#">Collections</a></li>
              <li><a href="#">Men</a></li>
              <li><a href="#">Women</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
        </div>
        <div className="header-right">
          <img src="/images/icon-cart.svg" alt="Cart icon" className="cart-icon" />
          <img src="/images/image-avatar.png" alt="User avatar" className="avatar" />
        </div>
      </header>

      <main className="product-main">
        <section className="product-images">
          <img src="/images/image-product-1.jpg" alt="Product main" className="main-product-image" />
          <div className="thumbnail-images">
            <img src="/images/image-product-1-thumbnail.jpg" alt="Product thumbnail 1" className="thumbnail active" />
            <img src="/images/image-product-2-thumbnail.jpg" alt="Product thumbnail 2" className="thumbnail" />
            <img src="/images/image-product-3-thumbnail.jpg" alt="Product thumbnail 3" className="thumbnail" />
            <img src="/images/image-product-4-thumbnail.jpg" alt="Product thumbnail 4" className="thumbnail" />
          </div>
        </section>

        <section className="product-details">
          <p className="company-name">SNEAKER COMPANY</p>
          <h1 className="product-title">Fall Limited Edition Sneakers</h1>
          <p className="product-description">
            These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll
            withstand everything the weather can offer.
          </p>
          <div className="price-info">
            <div className="current-price-group">
              <span className="current-price">$125.00</span>
              <span className="discount">50%</span>
            </div>
            <span className="original-price">$250.00</span>
          </div>
          <div className="add-to-cart-controls">
            <div className="quantity-selector">
              <img src="/images/icon-minus.svg" alt="Minus icon" className="quantity-icon" />
              <span className="quantity">0</span>
              <img src="/images/icon-plus.svg" alt="Plus icon" className="quantity-icon" />
            </div>
            <button className="add-to-cart-button">
              <img src="/images/icon-cart.svg" alt="Cart icon" /> Add to cart
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
