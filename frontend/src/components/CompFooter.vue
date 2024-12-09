<template>
    <footer class="modern-footer">
      <div class="footer-content">
        <!-- Logo và thông tin -->
        <div class="footer-section">
          <div class="footer-logo">
            <img src="/path-to-your-logo.png" alt="Horizone" />
            <p class="footer-mission">
              Our mission is to inspire modern explorers with unique travel experiences and stylish adventures.
            </p>
          </div>
        </div>
  
        <!-- Links -->
        <div class="footer-section">
          <h4>About Us</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Career</a></li>
          </ul>
        </div>
  
        <!-- Support -->
        <div class="footer-section">
          <h4>Support</h4>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Return</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
  
        <!-- Get Updates -->
        <div class="footer-section">
          <h4>Get Updates</h4>
          <div class="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button class="subscribe-btn">Subscribe</button>
          </div>
        </div>
      </div>
  
      <!-- Bottom Footer -->
      <div class="footer-bottom">
        <div class="footer-bottom-content">
          <div class="copyright">
            © {{ new Date().getFullYear() }} Horizone. All rights reserved.
          </div>
          <div class="social-links">
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-facebook"></i></a>
            <a href="#"><i class="fab fa-github"></i></a>
            <a href="#"><i class="fab fa-tiktok"></i></a>
          </div>
          <div class="legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'CompFooter'
  }
  </script>
  
  <style scoped>
  .modern-footer {
    background-color: #000;
    color: #fff;
    padding: 60px 0 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  }
  
  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
    padding: 0 20px 40px;
  }
  
  .footer-logo img {
    height: 40px;
    margin-bottom: 20px;
  }
  
  .footer-mission {
    color: #888;
    font-size: 14px;
    line-height: 1.6;
    margin-top: 15px;
  }
  
  .footer-section h4 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 20px;
    color: #fff;
  }
  
  .footer-section ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .footer-section ul li {
    margin-bottom: 12px;
  }
  
  .footer-section ul li a {
    color: #888;
    text-decoration: none;
    font-size: 14px;
    transition: color 0.3s ease;
  }
  
  .footer-section ul li a:hover {
    color: #fff;
  }
  
  .newsletter-form {
    display: flex;
    gap: 10px;
  }
  
  .newsletter-form input {
    flex: 1;
    padding: 12px;
    border: 1px solid #333;
    border-radius: 6px;
    background-color: #111;
    color: #fff;
    font-size: 14px;
  }
  
  .subscribe-btn {
    padding: 12px 24px;
    background-color: #fff;
    color: #000;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
  }
  
  .subscribe-btn:hover {
    background-color: #e6e6e6;
  }
  
  .footer-bottom {
    border-top: 1px solid #222;
    padding: 20px 0;
  }
  
  .footer-bottom-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .copyright {
    color: #888;
    font-size: 14px;
  }
  
  .social-links {
    display: flex;
    gap: 20px;
  }
  
  .social-links a {
    color: #888;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  .social-links a:hover {
    color: #fff;
  }
  
  .legal-links {
    display: flex;
    gap: 20px;
  }
  
  .legal-links a {
    color: #888;
    text-decoration: none;
    font-size: 14px;
    transition: color 0.3s ease;
  }
  
  .legal-links a:hover {
    color: #fff;
  }
  
  /* Responsive Design */
  @media (max-width: 1024px) {
    .footer-content {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (max-width: 768px) {
    .footer-content {
      grid-template-columns: 1fr;
      text-align: center;
    }
  
    .footer-bottom-content {
      flex-direction: column;
      gap: 20px;
      text-align: center;
    }
  
    .newsletter-form {
      flex-direction: column;
    }
  
    .social-links, .legal-links {
      justify-content: center;
    }
  }
  </style>