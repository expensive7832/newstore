import React, { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa"
import Productcard from '../Common/Productcard';
import axios from "axios"


function Home() {

  const [products, setProducts] = useState([])

  
  useEffect(() =>{
    
    axios.get("https://api.escuelajs.co/api/v1/products?offset=0&limit=5")
  .then((res) => setProducts(res.data) )

  }, [])

 


  function calculate() {
    let a = 4;
    let b = 50;
    let c = a + b;

    // if(c == 9){
    //   alert("it is 9")
    // }else{
    //   alert("another number")
    // }

    c === 9 ? alert("it is 9") : alert("another number")
  }

  let login = true;


  // const products = [
  //   {id: 1, title: "Shoe", price: 12000, img: "./../../images/product_01.jpg" },
  //   {id: 2, title: "Bag", price: 7000, img: "./../../images/product_2.2.jpg" },
  //   {id: 3, title: "Laptop", price: 400000, img: "./../../images/product_3.1.jpg" },
  // ]

  return (
    <div>
      <div className="banner">

        <form className='w-50  d-flex'>
          <input type="text" className='form-control p-2' />
          <button type='button' onDoubleClick={() => calculate()} className="btn btn-dark"> <FaSearch /> </button>
          {/* <hr  className='w-100 bg-danger'/> */}
        </form>

      </div>

      <div className="products container p-5">
        <h4 className='h1'>Hot Offer</h4>

        <div className="row mt-5 g-4">

         {products.map((item) => (
           <div key={item.id} className="col-md-4">
           <Productcard data={item} />
         </div>
         ))}

        
        </div>
      </div>
    </div>
  )
}








export default Home



