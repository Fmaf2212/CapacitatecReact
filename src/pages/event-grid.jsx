import SEO from '../components/seo';
import { Wrapper } from '../layout';
import EventGridMain from '../components/event-grid';
import Loader from '../components/Loader';

const EventGrid = () => {
    return (
        <Wrapper>
            <Loader />
            <SEO pageTitle={'Tienda'} />
            <EventGridMain />
        </Wrapper>
    )
}

export default EventGrid;