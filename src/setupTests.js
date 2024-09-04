// Add additional Jest matchers for RTL
import '@testing-library/jest-dom/extend-expect';

// Polyfill fetch support on Node
import 'cross-fetch/polyfill';
import { setupServer } from 'msw/node';

export const server = setupServer();

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
