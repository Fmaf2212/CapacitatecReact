import HomeMain from '../components/homes/home';
import Loader from '../components/Loader';
import SEO from '../components/seo';
import { Wrapper } from '../layout';

export default function Home() {
    return (
        <Wrapper>
            <Loader />
            <SEO pageTitle={'Home Main'} />
            <HomeMain />
        </Wrapper>
    )
}