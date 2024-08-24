import SEO from '../components/seo';
import { Wrapper } from '../layout';
import EventGridMain from '../components/event-grid';

const EventGrid = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'Tienda'} />
            <EventGridMain />
        </Wrapper>
    )
}

export default EventGrid;