
import { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { cartListAtom } from "../store";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [modal, setModal] = useState(null); // State for the modal
  const [showModal, setShowModal] = useState(false);
  //const { product } = props;
  const [cartList, setCartList] = useAtom(cartListAtom);
  
  function addToCart(product){
    setCartList([...cartList, product]);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data for multiple posts
        const response = await fetch("https://fakestoreapi.com/products");
        const postData = await response.json();
        setProducts(postData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
    {modal !== null && (
    <div className="modal show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
      <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div class="modal-header">
              <button type="button"  class="btn btn-dark" onClick={() => setModal(null)}  data-bs-dismiss="modal" aria-label="Close">X</button>
        </div>
        <div className="modal-body">
        <h3 style={{ color: 'black' }}><strong>Rating:</strong> {modal.rating.rate}</h3><br />
        <center><img class="img-responsive" src={modal.image} height="100px"/></center><br /><br />
        <h2 style={{ color: 'black' }}><strong>Price: $</strong>{modal.price}</h2>
        <p style={{ color: 'black' }}><strong >Description:</strong> {modal.description}</p><br />
        <h3 style={{ color: 'black' }}><strong>Category:</strong> {modal.category}</h3><br />
        {/* <h4 style={{ color: 'black' }}><strong>Id:</strong> {modal.id}</h4><br /> */}
        {/* <h4 style={{ color: 'black' }}><strong>Count:</strong> {modal.rating.count}</h4><br /> */}

        </div>

        {/* <button onClick={() => setModal(null)} class="rightButton">Close</button> */}
        <button  type="button" class="btn btn-dark" onClick={e=>{addToCart(modal);setModal(null)}}>add to cart</button>
      </div>
      </div>
    </div>
    )}
  <div>
  <table className="table table-bordered">
    <thead>
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Price</th>
        <th>Description</th>
        <th>Image</th>
        <th>Category</th>
        <th>Rate</th>
        <th>Count</th>
      </tr>
    </thead>
    <tbody>
    {products.map((product) => (
        <tr
          key={product.id}
          onClick={() => setModal(product)} // Set the clicked item as the modal content
        >
          <td>{product.id}</td>
          <td>{product.title}</td>
          <td>{product.price}</td>
          <td>{product.description}</td>
          <td><img src={product.image} style={{ maxWidth: '100px', display: 'block', margin: '0 auto' }}/></td>
          <td>{product.category}</td>
          <td>{product.rating.rate}</td>
          <td>{product.rating.count}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
</section>
  );
}


