import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SignUpScreen from '../../../../src/pages/auth/signup';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';


describe('signup page', () => {
    const initialState = { output: 10 };
    const mockStore = configureStore();
    let store = mockStore(initialState);
    it('should render properly', () => {
        render(
            <Provider store={store}>
                <SignUpScreen />
            </Provider>
        );
        const signInBtn = screen.getByRole('button');
        const buttonText = '→';
        expect(signInBtn).toHaveTextContent(buttonText);
    });

    it('should initially be disabled', () => {
        render(
            <Provider store={store}>
                <SignUpScreen />
            </Provider>
        );
        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toBeDisabled();
    })

})