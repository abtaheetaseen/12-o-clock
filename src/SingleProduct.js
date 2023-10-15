import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "./context/productContext";
import Pagination from "./components/Pagination";
import MyImage from "./components/MyImage";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import AddToCart from "./components/AddToCart";


const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();

  const { id } = useParams();

  const {
    id: alias,
    name,
    company,
    price,
    description,
    category,
    stock,
    image,
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);

  return (
    <div className="wrapper">
      <Pagination title={name}/>
      <div className="single-container">
        <div className="grid grid-two-column product-grid">
          <div className="product-images">
              <MyImage imgs={image} />
          </div>
          
          
          <div className="product-data">
            <h2 className="product-title">{name}</h2>
            <p className="product-data-price product-data-real-price" style={{color: '#8e8e8e'}}>
              Price: {price}
            </p>
            <p>{description}</p>
            
      
            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>

              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>30 Days Replacement</p>
              </div>
            </div>
            
            <div className="product-data-info">
              <p style={{color: '#8e8e8e'}}>
                Available:
                <span style={{color: 'black'}}> {stock > 0 ? "In Stock" : "Not Available"}</span>
              </p>
              <p style={{color: '#8e8e8e'}}>
                Brand :<span style={{color: 'black'}}> {company} </span>
              </p>
            </div>
          
            

            {stock > 0 && <AddToCart product={singleProduct}/>}
          </div>
        </div>
      </div>
      </div>
  );
};


export default SingleProduct;
