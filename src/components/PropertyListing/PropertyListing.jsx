import React from 'react';
import PropertyCard from '../PropertyCard';
import './PropertyListing.scss';
import useSWR from 'swr';
import { API_URL } from '../../constants';
import { fetcher } from '../../utils/fetchHelpers';

const PropertyListing = () => {
    // Could create custom hook with useEffect to fetch on render without library
    // But handling loading, error, and data is a bit more complex + no caching or revalidation :(
    const { data: properties, isLoading, error } = useSWR(API_URL, fetcher);

    if (error) return <div className="Error">Sorry, there was an issue loading properties, please try again</div>;
    if (isLoading) return <div className="Loading">Loading...</div>

    return (
        <ul className="PropertyListing">
            {properties
                .map((property) => (
                    <li key={property.id}>
                        <PropertyCard {...property} />
                    </li>
                ))}
        </ul>
    );
};

export default PropertyListing;
