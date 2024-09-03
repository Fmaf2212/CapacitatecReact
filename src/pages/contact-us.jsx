import SEO from '../components/seo';
import { Wrapper } from '../layout';
import ContactUsMain from '../components/contact-us';
import Loader from '../components/Loader';

const ContactUs = () => {
    return (
        <Wrapper>
            <Loader />
            <SEO pageTitle={'Contact Us'} />
            <ContactUsMain />
        </Wrapper>
    )
}

export default ContactUs;