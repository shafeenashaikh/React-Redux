import React from "react"
function Home(){
    
    return(
        <div>
            <div className="add-to-cart">
                <img src="/C:\Users\intel\Desktop\redux-tut\src\img\cart.jpg"/>
            </div>
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
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>

    )
}
export default Home
