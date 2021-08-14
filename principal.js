import { it } from 'mocha';
import indexPage from '../support/index';

describe('Busqueda Movistar', ()=>{
    beforeEach(function(){
        cy.visit('https://tienda.movistar.com.ar/');

    })
    it('CP001', ()=>{
        cy.get('.waves-effect > .icon-search').click();
        cy.get('#myInput').type('A52').type('{enter}');
        cy.get('h1').should('contain','A52');
        cy.get('.button').click();
        cy.location('pathname').should('eq','/samsung-galaxy-a52.html');
        cy.get('.product-name.desktop > .h1').should('contain','Samsung Galaxy A52')
        cy.get('#installments-text').should('contain','12 cuotas ')
    })
    it('CP002', ()=>{
        indexPage.search();
        cy.get(':nth-child(4) > .filter-group > .filter-data-section > :nth-child(3) > a > .filter-info-label').click();
        indexPage.search();
        cy.get(':nth-child(3) > .filter-group > .filter-data-section > :nth-child(2) > a > .filter-info-label').click();
        cy.get('.toolbar-bottom > .toolbar > .pager > .count-container > .amount > strong').should('contain','2 Artículo(s)')
    })
    it('CP003', ()=>{
        cy.get('.product-image').eq(2).click();
        cy.get('#open-modal-installments').click();
        cy.get('#selectBank').select('Credicoop');
        cy.get('#selectCardByBank').select('Visa');
        cy.expect('.bodyTable').to.not.equal('12')
    })
    it.only('CP004', ()=>{
        cy.get('.product-image').first().click();
        cy.get('.pdp-buttons-wrapper > #movistar-pdp-addtocart-button').click();
        cy.get('.a-right > .button > :nth-child(1) > span').click();
        cy.get('.amscheckout-control').type('gabriel');
        

    })
})