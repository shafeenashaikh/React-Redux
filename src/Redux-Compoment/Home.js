import React from "react"
function Home(props){
    console.log("props",props)
    return(
        <div>
          
            <h2>Home component</h2>
            <div className="cart-wrapper">
                <div className="imag-wrapper item">
                   <img src='/public/img/image1.jpg'/>
                </div>
                <div className="text-wrapper item">
                  <span>
                      I-Phone
                  </span>
                  <span>
                    price: $10000
                  </span>
                </div>
                <div className="btn-wrapper item">
                    <button
                    onClick={()=>
                    {props.addToCartHandler({price:1000,name: 'i phone 11'})}
                    }>Add to Cart
                    </button>
                    <button className="remove-cart"
                    onClick={()=>
                    {props.removeToCartHandler()}
                    }>Remove to Cart
                    </button>
                </div>
            </div>
        </div>

    )
}
export default Home
