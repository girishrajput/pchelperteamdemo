import InnerHeader from '@/components/InnerHeader'
import WeOffer from '@/components/home/WeOffer'

const ServicesPage = () => {
    return (
        <>
            {/* Hero Section */}

            <InnerHeader
                title="Our Services"
                subtitle="Comprehensive solutions tailored to your business needs."
            />
            <WeOffer />
            
        </>
    );
};



export default ServicesPage;