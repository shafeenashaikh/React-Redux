import {connect} from 'react-redux';
import Home from  '../Redux-Compoment/Home';
import { addToCart } from '../Services/Action/action';

const mapStateToProps=state => ({
    data:state.cardItems
})

const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)

// export default Home