import React from 'react';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { within } from '@testing-library/dom';
import PropertyListing from '../PropertyListing';
import { http, HttpResponse } from 'msw';
import { getProperties } from '../../../utils/mockProperties';
import { server } from '../../../setupTests';
import { API_URL } from '../../../constants';

jest.mock('../../PropertyCard/PropertyCard', () => {
    const PropertyCard = (props) => (<div>{props.id} Property Card</div>);
    return PropertyCard;
});

const mockProperties = getProperties(5);

const handlers = [
    http.get(API_URL, () => {
        return HttpResponse.json(mockProperties, { status: 200 });
    }),
];

// Helper function that can provide overrides as needed. 
// (i.e error scenario for /api/properties handler)
const renderComponent = () => {
    server.use(...handlers);
    render(<PropertyListing />);
}

describe('PropertyListing', () => {
    it('should render five property cards', async () => {
        renderComponent();
        await waitForElementToBeRemoved(screen.queryByText('Loading...'))

        const propertiesList = screen.getByRole('list');
        const withinPropertyCards = within(propertiesList);
        const propertyCards = withinPropertyCards.getAllByRole('listitem');
        expect(propertyCards).toHaveLength(5);

        // Above checks if there are 5 list items, below checks if the correct child component is rendered
        propertyCards.forEach((_, index) => {
           expect(withinPropertyCards.getByText(`${index + 1} Property Card`, { exact: false})).toBeVisible();
        });
    });
});
