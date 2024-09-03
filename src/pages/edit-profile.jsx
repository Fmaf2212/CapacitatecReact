import SEO from '../components/seo';
import { Wrapper } from '../layout';
import PageEditProfile from '../components/edit-profile';

const EditProfile = () => {
    return (
        <Wrapper>
            <Loader />
            <SEO pageTitle={'Editar perfil'} />
            <PageEditProfile />
        </Wrapper>
    )
}

export default EditProfile;