import { useState, useEffect } from "react";
import Image from 'next/image';

export default function HomeProducts() {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          // Fetch data for multiple posts
          const response = await fetch("https://fakestoreapi.com/products?limit=6");
          const postData = await response.json();
          setProducts(postData);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, []);
  
    return (
        <div>
          <Image
  src="https://www.senecapolytechnic.ca/images/logo.png"
  alt="Seneca Logo"
  sizes="50vw"
  width={450}
  height={100}
  priority
/>
            {/* <img src="https://www.senecapolytechnic.ca/images/logo.png"style={{ maxHeight: '250px', display: 'block', margin: '0 auto' }}/><br/><br/> */}
            <h1 className="center">We sell everything your heart desires. If you can think it, we sell it</h1><br/><br/><br/>
            <h1 className="center">Our Favourites</h1>
            

        <div className="product-container">
        {products.map((product) => (
          <div key={product.id} className="product">
            <h5><strong>Rating</strong> {product.rating.rate}</h5><br />
            <img src={product.image} style={{ maxHeight: '250px', display: 'block', margin: '0 auto' }}/><br/>
            <h5><strong>Price: </strong>${product.price}</h5>
            <strong>Description:</strong> {product.description}<br />
          </div>
        ))}
      </div>
      </div>
    );
  }
  