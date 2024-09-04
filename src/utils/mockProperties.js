// Util functions for generating mock properties can be nice
// to easily generate unique properties for testing. 

export const getProperty = ({ 
    id = 1, 
    bedrooms = 3, 
    summary = 'Property 1 Situated moments from the River Thames in Old Chelsea...', 
    displayAddress = '1 CHEYNE WALK, CHELSEA, SW3', 
    propertyType = 'Flat', 
    price = 1950000, 
    branchName = 'M2 Property, London', 
    propertyTitle = '3 bedroom flat for sale', 
    mainImage = 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/38k/37655/53588679/37655_CAM170036_IMG_01_0000_max_476x317.jpg'}
) => {
    return {
        id,
        bedrooms,
        summary,
        displayAddress,
        propertyType,
        price,
        branchName,
        propertyUrl: `/property-for-sale/property-${id}.html`,
        contactUrl: `/property-for-sale/contactBranch.html?propertyId=${id}`,
        propertyTitle,
        mainImage
    };
}

export const getProperties = (count=1) => {
    return Array.from({ length: count }, (_, i) => getProperty({id: i + 1}));
}