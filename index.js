document.addEventListener("DOMContentLoaded", () => {
  // Create the HTML structure
  document.body.innerHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Ladle and the Whisk | New Orleans' Culinary Haven</title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Poppins:wght@300;400;500&display=swap" rel="stylesheet">
      <style>
        :root {
          --primary: #8b4513;
          --secondary: #f8f4e3;
          --accent: #d4af37;
          --text-dark: #333;
          --text-light: #f8f4e3;
          --font-heading: 'Playfair Display', serif;
          --font-body: 'Poppins', sans-serif;
          --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: var(--font-body);
          color: var(--text-dark);
          line-height: 1.6;
          background-color: var(--secondary);
          position: relative;
          -webkit-text-size-adjust: 100%;
        }
        
        header {
          background-color: var(--primary);
          color: var(--text-light);
          padding: 1rem;
          position: absolute;
          width: 100%;
          z-index: 1000;
          top: 0;
          left: 0;
        }
        
        .header-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 700;
          text-decoration: none;
          color: var(--text-light);
          display: flex;
          align-items: center;
        }
        
        nav ul {
          display: flex;
          list-style: none;
        }
        
        nav ul li {
          margin-left: 1.5rem;
        }
        
        nav a {
          color: var(--text-light);
          text-decoration: none;
          font-weight: 500;
          position: relative;
          padding: 0.5rem 0;
        }
        
        nav a:hover {
          color: var(--accent);
        }
        
        .mobile-menu {
          display: none;
          background: none;
          border: none;
          color: var(--text-light);
          font-size: 1.5rem;
          cursor: pointer;
        }
        
        .hero {
          height: 100vh;
          background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80');
          background-size: cover;
          background-position: center;
          color: var(--text-light);
          display: flex;
          align-items: center;
          padding: 2rem;
        }
        
        .hero-content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }
        
        .hero h1 {
          font-family: var(--font-heading);
          font-size: 3.5rem;
          margin-bottom: 0.5rem;
          line-height: 1.2;
        }
        
        .hero h2 {
          font-family: var(--font-heading);
          font-size: 2rem;
          margin-bottom: 1.5rem;
          color: var(--accent);
        }
        
        .hero p {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .btn {
          display: inline-block;
          background-color: var(--accent);
          color: var(--text-dark);
          padding: 0.8rem 1.8rem;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 500;
          border: 2px solid var(--accent);
          cursor: pointer;
          margin-bottom: 0.5rem;
          min-width: 150px;
        }
        
        .btn:hover {
          background-color: transparent;
          color: var(--text-light);
        }
        
        .btn-outline {
          background-color: transparent;
          color: var(--text-light);
          margin-left: 0.5rem;
        }
        
        .section {
          padding: 5rem 1rem;
          position: relative;
        }
        
        .section-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .section-heading {
          font-family: var(--font-heading);
          font-size: 2.5rem;
          margin-bottom: 1rem;
          position: relative;
          display: inline-block;
        }
        
        .section-heading::after {
          content: '';
          position: absolute;
          height: 3px;
          width: 60%;
          background-color: var(--accent);
          bottom: -10px;
          left: 0;
        }
        
        .about {
          background-color: white;
        }
        
        .about-content {
          display: flex;
          align-items: center;
          gap: 2rem;
          margin-top: 3rem;
          flex-direction: column;
        }
        
        .about-text {
          flex: 1;
        }
        
        .about-image {
          flex: 1;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: var(--shadow);
          max-width: 100%;
        }
        
        .about-image img {
          width: 100%;
          height: auto;
          display: block;
        }
        
        .services {
          background-color: var(--secondary);
        }
        
        .services-container {
          position: relative;
          padding: 0 40px;
          margin-top: 3rem;
        }
        
        .slider-container {
          overflow: hidden;
          padding: 1rem 0;
        }
        
        .services-slider {
          display: flex;
        }
        
        .service-card {
          background-color: white;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: var(--shadow);
          flex: 0 0 100%;
          margin: 0 10px 20px;
          min-width: 250px;
          flex: 0 0 calc(100% - 20px);
          margin: 0 10px;
        }
        
        .service-img {
          height: 200px;
          overflow: hidden;
        }
        
        .service-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .service-content {
          padding: 1.5rem;
        }
        
        .service-content h3 {
          font-family: var(--font-heading);
          margin-bottom: 0.5rem;
          font-size: 1.5rem;
        }
        
        .slider-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 40px;
          height: 40px;
          background-color: var(--primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-light);
          font-size: 1.5rem;
          cursor: pointer;
          z-index: 10;
          border: none;
        }
        
        .slider-prev {
          left: 0;
        }
        
        .slider-next {
          right: 0;
        }
        
        .slider-dots {
          display: flex;
          justify-content: center;
          margin-top: 20px;
        }
        
        .slider-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: rgba(139, 69, 19, 0.3);
          margin: 0 5px;
          cursor: pointer;
        }
        
        .slider-dot.active {
          background-color: var(--primary);
        }
        
        .announcement {
          background-color: var(--primary);
          color: var(--text-light);
          text-align: center;
          padding: 4rem 1rem;
        }
        
        .announcement h2 {
          font-family: var(--font-heading);
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
        }
        
        .announcement p {
          max-width: 700px;
          margin: 0 auto 2rem;
          font-size: 1.1rem;
        }
        
        .contact {
          background-color: white;
        }
        
        .contact-content {
          display: flex;
          gap: 2rem;
          margin-top: 3rem;
          flex-direction: column;
        }
        
        .contact-info {
          flex: 1;
        }
        
        .contact-info h3 {
          font-family: var(--font-heading);
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
        }
        
        .contact-details {
          margin-bottom: 2rem;
        }
        
        .contact-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 1rem;
        }
        
        .contact-icon {
          margin-right: 1rem;
          font-size: 1.2rem;
          color: var(--primary);
        }
        
        .map {
          flex: 1;
          height: 300px;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: var(--shadow);
          width: 100%;
        }
        
        .map iframe {
          width: 100%;
          height: 100%;
          border: 0;
        }
        
        .newsletter {
          background-color: var(--accent);
          padding: 3rem 1rem;
          text-align: center;
        }
        
        .newsletter h2 {
          font-family: var(--font-heading);
          color: var(--text-dark);
          margin-bottom: 1rem;
        }
        
        .newsletter p {
          max-width: 600px;
          margin: 0 auto 1.5rem;
          color: var(--text-dark);
        }
        
        .newsletter-form {
          max-width: 500px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        
        .newsletter-form input {
          flex: 1;
          padding: 0.8rem;
          border: none;
          border-radius: 50px;
          font-family: var(--font-body);
          width: 100%;
        }
        
        .newsletter-form button {
          background-color: var(--primary);
          color: var(--text-light);
          border: none;
          padding: 0.8rem 1.5rem;
          border-radius: 50px;
          cursor: pointer;
          width: 100%;
          font-family: var(--font-body);
        }
        
        footer {
          background-color: var(--primary);
          color: var(--text-light);
          padding: 3rem 1rem 1rem;
        }
        
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .footer-content {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          margin-bottom: 2rem;
        }
        
        .footer-column h3 {
          font-family: var(--font-heading);
          font-size: 1.3rem;
          margin-bottom: 1.5rem;
          position: relative;
          display: inline-block;
        }
        
        .footer-column h3::after {
          content: '';
          position: absolute;
          height: 2px;
          width: 40px;
          background-color: var(--accent);
          bottom: -8px;
          left: 0;
        }
        
        .footer-links {
          list-style: none;
        }
        
        .footer-links li {
          margin-bottom: 0.8rem;
        }
        
        .footer-links a {
          color: var(--text-light);
          text-decoration: none;
        }
        
        .footer-links a:hover {
          color: var(--accent);
        }
        
        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
        
        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          color: var(--text-light);
          text-decoration: none;
        }
        
        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 1.5rem;
          text-align: center;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.7);
        }
        
        /* Larger devices (tablets and above) */
        @media (min-width: 768px) {
          .section {
            padding: 5rem 2rem;
          }
          
          .about-content {
            flex-direction: row;
          }
          
          .contact-content {
            flex-direction: row;
          }
          
          .map {
            height: 400px;
          }
          
          .newsletter-form {
            flex-direction: row;
          }
          
          .newsletter-form input {
            border-radius: 50px 0 0 50px;
            width: auto;
          }
          
          .newsletter-form button {
            border-radius: 0 50px 50px 0;
            width: auto;
          }
          
          .footer-content {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .btn {
            margin-bottom: 0;
          }
          
          .service-card {
            flex: 0 0 calc(100% / 2 - 20px);
          }
        }
        
        /* Desktop */
        @media (min-width: 992px) {
          .section-heading {
            font-size: 2.5rem;
          }
          
          .footer-content {
            grid-template-columns: repeat(4, 1fr);
          }
          
          .service-card {
            flex: 0 0 calc(100% / 3 - 20px);
          }
        }
        
        @media (min-width: 1200px) {
          .service-card {
            flex: 0 0 calc(100% / 4 - 20px);
          }
        }
        
        /* Mobile styles */
        @media (max-width: 767px) {
          .header-container {
            position: relative;
          }
          
          .mobile-menu {
            display: block;
          }
          
          nav {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background-color: var(--primary);
            padding: 1rem;
            box-shadow: var(--shadow);
            display: none;
          }
          
          nav.active {
            display: block;
          }
          
          nav ul {
            flex-direction: column;
          }
          
          nav ul li {
            margin: 0;
            margin-bottom: 1rem;
          }
          
          .hero h1 {
            font-size: 2.2rem;
          }
          
          .hero h2 {
            font-size: 1.5rem;
          }
          
          .hero p {
            font-size: 1rem;
          }
          
          .section-heading {
            font-size: 1.8rem;
          }
          
          .btn {
            display: block;
            margin: 0 auto 1rem auto;
            text-align: center;
          }
          
          .btn-outline {
            margin-left: auto;
          }
          
          .announcement h2 {
            font-size: 1.8rem;
          }
          
          .services-container {
            padding: 0 30px;
          }
          
          .slider-nav {
            width: 30px;
            height: 30px;
            font-size: 1rem;
          }
        }
        
        /* Additional CSS for the Services/Offerings section */
        #services {
          padding: 50px 0;
          position: relative;
          overflow: hidden;
        }
        
        .services-container {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 15px;
        }
        
        .services-header {
          text-align: center;
          margin-bottom: 30px;
        }
        
        .slider-container {
          position: relative;
          overflow: hidden;
          margin: 0 -10px;
        }
        
        .services-slider {
          display: flex;
          transition: transform 0.3s ease;
        }
        
        .service-card {
          background-color: white;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: var(--shadow);
          flex: 0 0 calc(25% - 20px);
          margin: 0 10px;
          display: block;
        }
        
        .service-card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }
        
        .service-content {
          padding: 20px;
        }
        
        .service-title {
          font-family: 'Playfair Display', serif;
          margin-bottom: 10px;
          font-size: 1.3rem;
        }
        
        .service-description {
          font-size: 0.9rem;
          margin-bottom: 15px;
          color: #555;
        }
        
        .service-price {
          font-weight: bold;
          color: var(--primary-color);
          margin-bottom: 10px;
        }
        
        .slider-nav {
          display: flex;
          justify-content: center;
          margin-top: 20px;
        }
        
        .slider-prev, .slider-next {
          background-color: var(--primary-color);
          color: white;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          margin: 0 5px;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        
        .slider-prev:hover, .slider-next:hover {
          background-color: var(--primary-dark);
        }
        
        .slider-dots {
          display: flex;
          justify-content: center;
          margin-top: 15px;
        }
        
        .slider-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: #ddd;
          margin: 0 5px;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        
        .slider-dot.active {
          background-color: var(--primary-color);
        }
        
        /* Mobile-specific styles for services section */
        @media (max-width: 767px) {
          #services {
            padding: 30px 0;
          }
          
          .services-header h2 {
            font-size: 1.8rem;
          }
          
          .services-slider {
            display: block;
          }
          
          .service-card {
            flex: 0 0 100%;
            max-width: 100%;
            margin: 0 auto 20px;
            width: calc(100% - 30px) !important;
          }
          
          .service-card img {
            height: 180px;
          }
          
          .service-content {
            padding: 15px;
          }
          
          .service-title {
            font-size: 1.2rem;
          }
          
          .service-description {
            font-size: 0.85rem;
          }
          
          .slider-nav, .slider-dots {
            display: none;
          }
        }
        
        /* Tablet styles */
        @media (min-width: 768px) and (max-width: 991px) {
          .service-card {
            flex: 0 0 calc(50% - 20px);
          }
        }
        
        /* Small desktop styles */
        @media (min-width: 992px) and (max-width: 1199px) {
          .service-card {
            flex: 0 0 calc(33.333% - 20px);
          }
        }
      </style>
    </head>
    <body>
      <header>
        <div class="header-container">
          <a href="#" class="logo">
            <img src="lwhsik.png" alt="Ladle and the Whisk" width="40" height="40" style="margin-right: 10px;">
            Ladle and the Whisk
          </a>
          <button class="mobile-menu">☰</button>
          <nav>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Our Offerings</a></li>
              <li><a href="#contact">Location</a></li>
              <li><a href="#newsletter">Join Us</a></li>
            </ul>
          </nav>
        </div>
      </header>
      
      <section class="hero" id="home">
        <div class="hero-content">
          <h1>Ladle and the Whisk</h1>
          <h2>Everyday Gourmet</h2>
          <p>Welcome to New Orleans' culinary haven where kitchen enthusiasts discover innovative gadgets, gourmet food, and a community of food lovers.</p>
          <div>
            <a href="#about" class="btn">Discover More</a>
            <a href="#contact" class="btn btn-outline">Find Us</a>
          </div>
        </div>
      </section>
      
      <section class="section about" id="about">
        <div class="section-container">
          <h2 class="section-heading">Our Story</h2>
          <div class="about-content">
            <div class="about-text">
              <p>Welcome to Ladle and the Whisk, where the culinary passion of a mother-daughter team in the heart of New Orleans comes alive. Our store is a haven for kitchen enthusiasts, offering a meticulously curated selection of innovative gadgets alongside gourmet food mixes, teas, and coffees.</p>
              <p>With a commitment to both practicality and style, we aim to inspire creativity in the kitchen and simplify the cooking experience for everyone. Beyond our products, Ladle and the Whisk fosters a community of food lovers through cooking classes and events, inviting all to share in the joy of cooking.</p>
              <p>Visit us at 2130 Magazine St in the Lower Garden District of New Orleans and discover the magic of Ladle and the Whisk, where every meal becomes a celebration of flavor and tradition.</p>
            </div>
            <div class="about-image">
              <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="Mother and daughter cooking">
            </div>
          </div>
        </div>
      </section>
      
      <section class="announcement">
        <div class="section-container">
          <h2>We're Officially Open</h2>
          <p>Our storefront is now open, ready to welcome you into our culinary haven in the heart of NoLA. While our physical doors are open for business, stay tuned as our online store will be launching soon, bringing the convenience of shopping with us to your fingertips from anywhere.</p>
          <a href="#contact" class="btn">Visit Us Today</a>
        </div>
      </section>
      
      <section class="section services" id="services">
        <div class="section-container">
          <h2 class="section-heading">What Ladle and the Whisk Offers</h2>
          <div class="services-container">
            <button class="slider-nav slider-prev">&#10094;</button>
            <div class="slider-container">
              <div class="services-slider">
                <div class="service-card">
                  <div class="service-img">
                    <img src="https://images.unsplash.com/photo-1564844536311-de546a28c87d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="Kitchen Gadgets">
                  </div>
                  <div class="service-content">
                    <h3>Kitchen Gadgets at Ladle and the Whisk</h3>
                    <p>Discover innovative tools that make cooking easier and more enjoyable, from specialized utensils to modern appliances.</p>
                  </div>
                </div>
                
                <div class="service-card">
                  <div class="service-img">
                    <img src="https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="Gourmet Food">
                  </div>
                  <div class="service-content">
                    <h3>Gourmet Food & Mixes</h3>
                    <p>Elevate your home cooking with our selection of premium spices, sauces, and specialty food mixes inspired by global cuisines.</p>
                  </div>
                </div>
                
                <div class="service-card">
                  <div class="service-img">
                    <img src="https://images.unsplash.com/photo-1523920290228-4f321a939b4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="Teas & Coffee">
                  </div>
                  <div class="service-content">
                    <h3>Teas & Coffees</h3>
                    <p>Sample our carefully selected teas and coffees from around the world, perfect for pairing with your culinary creations.</p>
                  </div>
                </div>
                
                <div class="service-card">
                  <div class="service-img">
                    <img src="https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="Cooking Classes">
                  </div>
                  <div class="service-content">
                    <h3>Cooking Classes</h3>
                    <p>Join our community events and cooking classes where you can learn new techniques, recipes, and meet fellow food enthusiasts.</p>
                  </div>
                </div>
              </div>
            </div>
            <button class="slider-nav slider-next">&#10095;</button>
            <div class="slider-dots"></div>
          </div>
        </div>
      </section>
      
      <section class="section contact" id="contact">
        <div class="section-container">
          <h2 class="section-heading">Visit Ladle and the Whisk</h2>
          <div class="contact-content">
            <div class="contact-info">
              <h3>Come Say Hello</h3>
              <div class="contact-details">
                <div class="contact-item">
                  <span class="contact-icon">📍</span>
                  <div>
                    <p>2130 Magazine St</p>
                    <p>Lower Garden District</p>
                    <p>New Orleans, LA</p>
                  </div>
                </div>
                <div class="contact-item">
                  <span class="contact-icon">🕒</span>
                  <div>
                    <p>Open 10am-6pm</p>
                    <p>Closed Mondays</p>
                  </div>
                </div>
                <div class="contact-item">
                  <span class="contact-icon">📞</span>
                  <p>(504) 910-6199</p>
                </div>
                <div class="contact-item">
                  <span class="contact-icon">✉️</span>
                  <p>hello@ladleandthewhisk.com</p>
                </div>
              </div>
              <div class="social-links">
                <a href="#" class="social-link">f</a>
                <a href="#" class="social-link">in</a>
              </div>
            </div>
            <div class="map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.8833406326243!2d-90.07968702421294!3d29.9312110744472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8620a5f8a5a2417b%3A0x18a2fcd88afaa11e!2s2130%20Magazine%20St%2C%20New%20Orleans%2C%20LA%2070130!5e0!3m2!1sen!2sus!4v1710376000000!5m2!1sen!2sus" allowfullscreen="" loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </section>
      
      <section class="newsletter">
        <div class="section-container">
          <h2>Stay Connected with Ladle and the Whisk</h2>
          <p>Subscribe to our newsletter for updates on new products, cooking classes, and special events at Ladle and the Whisk.</p>
          <form class="newsletter-form">
            <input type="email" placeholder="Your email address">
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>
      
      <footer>
        <div class="footer-container">
          <div class="footer-content">
            <div class="footer-column">
              <h3>Ladle and the Whisk</h3>
              <p>A culinary haven in the heart of New Orleans where every meal becomes a celebration of flavor and tradition.</p>
              <div class="social-links">
                <a href="#" class="social-link">f</a>
                <a href="#" class="social-link">in</a>
                <a href="#" class="social-link">📸</a>
              </div>
            </div>
            <div class="footer-column">
              <h3>Quick Links</h3>
              <ul class="footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Our Offerings</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div class="footer-column">
              <h3>Our Offerings</h3>
              <ul class="footer-links">
                <li><a href="#">Kitchen Gadgets</a></li>
                <li><a href="#">Gourmet Food</a></li>
                <li><a href="#">Teas & Coffees</a></li>
                <li><a href="#">Cooking Classes</a></li>
              </ul>
            </div>
            <div class="footer-column">
              <h3>Hours</h3>
              <p>Tuesday - Sunday: 10am - 6pm</p>
              <p>Monday: Closed</p>
              <p>Phone: (504) 910-6199</p>
            </div>
          </div>
          <div class="footer-bottom">
            <p>&copy; 2023 Ladle and the Whisk. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </body>
    </html>
  `;

  // Add loading overlay
  const loadingOverlay = document.createElement("div");
  loadingOverlay.className = "loading-overlay";
  loadingOverlay.innerHTML = `
    <div class="loading-spinner"></div>
    <p>Loading Ladle and the Whisk...</p>
  `;
  document.body.appendChild(loadingOverlay);

  // Function to initialize the site
  function initializeSite() {
    // Simplified initialization with minimal DOM manipulation
    const header = document.querySelector("header");
    const mobileMenuBtn = document.querySelector(".mobile-menu");
    const nav = document.querySelector("nav");

    // Simple toggle for mobile menu with no transitions
    mobileMenuBtn.addEventListener("click", () => {
      nav.classList.toggle("active");
    });

    // Static smooth scrolling function with no animations
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          const headerHeight = header.offsetHeight;
          const targetPosition =
            targetElement.getBoundingClientRect().top +
            window.pageYOffset -
            headerHeight;
          window.scrollTo(0, targetPosition);

          // Close mobile menu if open
          if (nav.classList.contains("active")) {
            nav.classList.remove("active");
          }
        }
      });
    });

    // Simple form submission
    const newsletterForm = document.querySelector(".newsletter-form");
    if (newsletterForm) {
      newsletterForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const emailInput = newsletterForm.querySelector('input[type="email"]');

        if (emailInput.value) {
          alert(
            "Thank you for subscribing! We'll keep you updated on all things Ladle and the Whisk."
          );
          emailInput.value = "";
        } else {
          alert("Please enter your email address.");
        }
      });
    }

    // Basic slider functionality with minimal style manipulation
    const servicesSlider = document.querySelector(".services-slider");
    const serviceCards = document.querySelectorAll(".service-card");
    const sliderDots = document.querySelector(".slider-dots");
    const sliderPrev = document.querySelector(".slider-prev");
    const sliderNext = document.querySelector(".slider-next");

    if (!servicesSlider || !serviceCards.length) return;

    let currentSlide = 0;
    let slideWidth = 0;
    let slidesPerView = 1;

    // Simplified calculation function
    function calculateSlidesPerView() {
      if (window.innerWidth >= 1200) {
        slidesPerView = 4;
      } else if (window.innerWidth >= 992) {
        slidesPerView = 3;
      } else if (window.innerWidth >= 768) {
        slidesPerView = 2;
      } else {
        slidesPerView = 1;
      }

      // Calculate slide width
      const containerWidth =
        document.querySelector(".slider-container").offsetWidth;
      slideWidth = containerWidth / slidesPerView;

      // Update slider
      updateSlider();
    }

    // Create dots
    function createDots() {
      sliderDots.innerHTML = "";
      const numDots = Math.ceil(serviceCards.length / slidesPerView);

      for (let i = 0; i < numDots; i++) {
        const dot = document.createElement("div");
        dot.classList.add("slider-dot");
        if (i === 0) dot.classList.add("active");
        dot.addEventListener("click", () => goToSlide(i));
        sliderDots.appendChild(dot);
      }
    }

    // Update slider
    function updateSlider() {
      createDots();
      goToSlide(0);
    }

    // Go to slide
    function goToSlide(slideIndex) {
      const maxSlide = serviceCards.length - slidesPerView;
      currentSlide = Math.max(0, Math.min(slideIndex, maxSlide));

      // Use transform without transitions for better performance
      servicesSlider.style.transform = `translateX(-${
        currentSlide * slideWidth
      }px)`;

      // Update dots
      const dots = document.querySelectorAll(".slider-dot");
      dots.forEach((dot, i) => {
        dot.classList.toggle(
          "active",
          i === Math.min(slideIndex, dots.length - 1)
        );
      });
    }

    // Event listeners for buttons
    sliderPrev.addEventListener("click", () => {
      goToSlide(currentSlide - 1);
    });

    sliderNext.addEventListener("click", () => {
      goToSlide(currentSlide + 1);
    });

    // Initialize slider
    calculateSlidesPerView();
    window.addEventListener("resize", calculateSlidesPerView);

    // Remove loading overlay
    const loadingOverlay = document.querySelector(".loading-overlay");
    if (loadingOverlay) {
      loadingOverlay.style.display = "none";
      loadingOverlay.remove();
    }
  }

  // Load everything without animation or fancy preloading
  function preloadImages() {
    // Start immediately
    initializeSite();
  }

  // Start immediately
  preloadImages();

  // Create a new script element after all the HTML content generation
  document.addEventListener("DOMContentLoaded", function () {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector(".mobile-menu");
    const nav = document.querySelector("nav");

    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener("click", function () {
        nav.classList.toggle("active");
      });
    }

    // Close the mobile menu when clicking a navigation link
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach((link) => {
      link.addEventListener("click", function () {
        if (window.innerWidth < 768) {
          nav.classList.remove("active");
        }
      });
    });

    // Adjust slider for different screen sizes
    function updateSliderView() {
      const slidesPerView =
        window.innerWidth < 768
          ? 1
          : window.innerWidth < 992
          ? 2
          : window.innerWidth < 1200
          ? 3
          : 4;

      const cards = document.querySelectorAll(".service-card");
      const sliderContainer = document.querySelector(".slider-container");
      const servicesContainer = document.querySelector(".services-container");

      // For mobile: stack cards vertically
      if (window.innerWidth < 768) {
        // Convert to vertical layout
        if (servicesSlider) servicesSlider.style.transform = "none";
        if (servicesSlider) servicesSlider.style.display = "block";

        cards.forEach((card) => {
          card.style.display = "block";
          card.style.width = "calc(100% - 20px)";
          card.style.margin = "0 auto 20px";
        });

        // Hide slider controls on mobile
        const sliderControls = document.querySelectorAll(
          ".slider-nav, .slider-dots"
        );
        sliderControls.forEach((control) => {
          if (control) control.style.display = "none";
        });
      } else {
        // Reset for desktop
        if (servicesSlider) servicesSlider.style.display = "flex";

        cards.forEach((card, index) => {
          card.style.display = "block";
          card.style.width = `calc(${100 / slidesPerView}% - 20px)`;
        });

        // Show slider controls on desktop
        const sliderControls = document.querySelectorAll(
          ".slider-nav, .slider-dots"
        );
        sliderControls.forEach((control) => {
          if (control) control.style.display = "flex";
        });

        // Update existing slider if present
        if (typeof calculateSlidesPerView === "function") {
          calculateSlidesPerView();
        }
      }
    }

    // Run on load and resize
    updateSliderView();
    window.addEventListener("resize", updateSliderView);

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        if (targetId === "#") return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "auto",
          });
        }
      });
    });
  });
});
