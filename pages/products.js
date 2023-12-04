import Products from '@/components/ProductDetails';
import ProductBox from '@/components/ProductBox';

export default function ProductsHome() {
  return (
          <Products />
  )
}


// const Index = (props) => {
//   const [modal, setModal] = useState(null); // State for the modal

//     return (
//       <section>
//         {modal != null ?
        
//         <div className="modalContainer">
//           <div className="modalBackground"></div>
//           <div className="modal">
//           <h2><strong>Rating:</strong> {modal.rating.rate}</h2><br />
//           <center><img class="img-responsive" src={modal.image} height="100px"/></center><br /><br />
//           <h2><strong>Price: $</strong>{modal.price}</h2>
//           <strong>Description:</strong> {modal.description}<br /><br />
//           <h3><strong>Category:</strong> {modal.category}</h3><br /><br />
//           <h3><strong>Id:</strong> {modal.id}</h3><br />
//           <h3><strong>Count:</strong> {modal.rating.count}</h3><br />

//             {/* <h1>{modal.title}</h1>
//             <h2>productId: {modal.id}</h2>
//             <h2>Price: ${modal.price}</h2>
//             <h2>Description: {modal.description}</h2>
//             <h2>Category: {modal.category}</h2>
//             <img src={modal.image} width="80" height="80" alt="" />
//             <h2>Rating: {modal.rating.rate}</h2> */}
//             <button onClick={() => setModal(null)}>Close</button>
//           </div>
//         </div>
//          : <div>nothing here</div>}
//       <div>
//       <table className="table table-bordered">
//         <thead>
//           <tr>
//             <th>Id</th>
//             <th>Title</th>
//             <th>Price</th>
//             <th>Description</th>
//             <th>Image</th>
//             <th>Category</th>
//             <th>Rate</th>
//             <th>Count</th>
//           </tr>
//         </thead>
//         <tbody>
//         {props.products.map((product) => (
//             <tr
//               key={product.id}
//               onClick={() => setModal(product)} // Set the clicked item as the modal content
//             >
//               <td>{product.id}</td>
//               <td>{product.title}</td>
//               <td>{product.price}</td>
//               <td>{product.description}</td>
//               <td><img src={product.image} style={{ maxWidth: '100px', display: 'block', margin: '0 auto' }}/></td>
//               <td>{product.category}</td>
//               <td>{product.rating.rate}</td>
//               <td>{product.rating.count}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//     </section>
//     )
//   }

//   export default Index;

