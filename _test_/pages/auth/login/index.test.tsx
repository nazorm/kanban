import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoginScreen from '../../../../src/pages/auth/login';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('login page', () => {
    const initialState = { output: 10 };
    const mockStore = configureStore();
    let store = mockStore(initialState);
    it('should render properly', () => {
        render(
            <Provider store={store}>
                <LoginScreen />
            </Provider>
        );
        const signInButton = screen.getByRole('button');
        const buttonText = '→'
        expect(signInButton).toHaveTextContent(buttonText);
    });

    it('should be initially disabled', () => {
        render(
            <Provider store={store}>
                <LoginScreen />
            </Provider>
        );
        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toBeDisabled();
    })

})

