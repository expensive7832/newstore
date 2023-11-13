import React from 'react'

function Cart() {
  return (
    <div className="cart">
        
        <div class="table-responsive  container mt-4">
            <table class="table border ">
                <thead >
                    <tr className=' ' style={{borderBottom: "5px solid #000"}}>
                        <th scope="col">Image</th>
                        <th scope="col">Product Title</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>

                    <tr class="">
                        <td > <img src="./../../images/product_4.1.jpg" alt="" /> </td>
                        <td>Pizza</td>
                        <td>N 2500</td>
                        <td>1</td>
                        <td> Delete </td>
                    </tr>

                    <tr class="">
                        <td scope="row">Item</td>
                        <td>Item</td>
                        <td>Item</td>
                        <td>Item</td>
                        <td>Item</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
    </div>
  )
}

export default Cart