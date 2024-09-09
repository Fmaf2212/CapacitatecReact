import SEO from '../components/seo';
import { Wrapper } from '../layout';
import CheckoutMain from '../components/checkout';
import Loader from '../components/Loader';

const Checkout = () => {
    return (
        <Wrapper>
            <Loader />
            <SEO pageTitle={'Checkout'} />
            <CheckoutMain />
        </Wrapper>
    )
}

export default Checkout;