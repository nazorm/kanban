// import React from 'react';

describe('processes to follow', () => {
  
    it('user can create boards', () => {
        //login
        cy.visit('http://localhost:3000/');
        cy.findByRole('textbox', { name: /email/i }).type('joshdoe@gmail.com');
        cy.findByLabelText(/password/i).type('Test@123');
        cy.findByRole('button', { name: /→/i }).click();

        //create board and update board and delete board
        cy.findByRole('button', { name: /\+ add new board/i }).click();
        cy.findByRole('textbox').type('Cy');
        cy.findByRole('button', { name: /submit/i }).click();

        //update board 
        cy.findByText(/home/i).click({force:true});
        cy.findByText(/Cy/i).click();
        cy.findByRole('button', {name: /more/i}).click();
        cy.findByRole('button', {name: /update board/i}).click();
        cy.findByRole('textbox').type('Cyp');
        cy.findByRole('button', { name: /submit/i }).click();

        // delete board
        cy.findByText(/home/i).click({force:true});
        cy.findByText(/cyp/i).click({force:true});
        cy.findByRole('button', {name: /more/i}).click();
        cy.findByRole('button', {name: /delete board/i}).click();

        //add collaborator
        cy.findByText(/the projects/i).click();
        cy.findByRole('button', {name: /more/i}).click();
        cy.findByRole('button', {  name: /add collaborator/i}).click();
        cy.findByRole('textbox').type('nnadozienazorm@gmail.com');
        cy.findByRole('button', {  name: /submit/i}).click();

        //view specific boards
        cy.findByText(/home/i).click({force:true});
    })
})

export { }