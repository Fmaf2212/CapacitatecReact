import SEO from '../components/seo';
import { Wrapper } from '../layout';
import CartMain from '../components/cart';

const Cart = () => {
    return (
        <Wrapper>
            <Loader />
            <SEO pageTitle={'Cart'} />
            <CartMain />
        </Wrapper>
    )
}

export default Cart;