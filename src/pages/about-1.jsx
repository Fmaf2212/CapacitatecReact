import SEO from '../components/seo';
import { Wrapper } from '../layout';
import AboutOneMain from '../components/abouts/about-1';
import Loader from '../components/Loader';

const AboutOne = () => {
    return (
        <Wrapper>
            <Loader />
            <SEO pageTitle={'About One'} />
            <AboutOneMain />
        </Wrapper>
    )
}

export default AboutOne;