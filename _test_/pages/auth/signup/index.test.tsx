import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SignUpScreen from 'src/pages/auth/signup';
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
    it('should include username input field', ()=>{
        render(
            <Provider store={store}>
            <SignUpScreen />
        </Provider>
        )
        const inputEL = screen.getByPlaceholderText(/John Doe/i)
        expect(inputEL).toBeInTheDocument()
    });
    it ('should include email input field', ()=>{
        render(
            <Provider store={store}>
            <SignUpScreen />
        </Provider>
        )
        const inputEl = screen.getByLabelText(/Email/i);
        expect(inputEl).toBeInTheDocument();
    })
     
    it('should include password input feild', ()=>{
        render(
            <Provider store={store}>
            <SignUpScreen />
        </Provider>
        )
        const inputEl = screen.getByPlaceholderText(/password/i);
        expect(inputEl).toBeInTheDocument();
    })

    it('should be enabled after input values', ()=>{
        render(
            <Provider store={store}>
            <SignUpScreen />
        </Provider>
        )
        fireEvent.change(screen.getByPlaceholderText(/John Doe/i), {target:{value:'John'}});
        fireEvent.change(screen.getByLabelText(/Email/i), {target:{value: 'john'}});
        fireEvent.change(screen.getByPlaceholderText(/password/i), {target:{value:'T'}});
        expect(screen.getByRole('button')).toBeEnabled();
    })

})