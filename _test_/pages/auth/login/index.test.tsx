import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoginScreen from '../../../../src/pages/auth/login';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import userEvent from '@testing-library/user-event'

const initialState = { output: 10 };
const mockStore = configureStore();
let store = mockStore(initialState);
describe('login page', () => {

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

    it('should include email input field', () => {
        render(
            <Provider store={store}>
                <LoginScreen />
            </Provider>
        )

        const inputEl = screen.getByLabelText('Email');
        expect(inputEl).toBeInTheDocument();
    });
    it('should include password input field', () => {
        render(
            <Provider store={store}>
                <LoginScreen />
            </Provider>
        )
        const inputEl = screen.getByLabelText('Password');
        expect(inputEl).toBeInTheDocument();
    });

    it('should be enabled after input', () => {
        render(
            <Provider store={store}>
                <LoginScreen />
            </Provider>
        )
        fireEvent.change(screen.getByLabelText('Email'), {target:{value:'john'}})
        fireEvent.change(screen.getByPlaceholderText(/password/i), {target:{value: 'T'}})
        const buttonEl = screen.getByRole('button');
        expect(buttonEl).toBeEnabled();
    });
})

