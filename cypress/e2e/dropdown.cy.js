describe('handel dropdowns', () => {
  it.skip('dropdownwith select', () => {
    cy.visit('https://www.zoho.com/commerce/free-demo.html')
    cy.get('#zcf_address_country').select('India').should('have.value','India')
    cy.get('.globalstatecode valid').select('Delhi').should('have.value','Delhi')
  })
  it.skip('dropdownwithout  select class', () => {
    cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
    cy.get('#select2-billing_country-container').click()
    cy.get('.select2-search__field').type('Italy').type('{enter}') 
    cy.get('#select2-billing_country-container').should('have.text','Italy')
    
  })
  it('verifying autosugition of dropdown', () => {
    cy.visit('https://www.wikipedia.org/')
    cy.get(' #searchInput').type('Delhi') 
    cy.get('.suggestion-title').contains('Delhi Sultanate').click()
    cy.screenshot('dropdown.cy.js')

 
  })
})
/*// To open the dropdown, click on the container div
cy.get('.dropdown-container').click();

// To select a specific option (e.g., "Option 2"), use the contains() command
cy.get('.dropdown-container').contains('Option 2').click();

// Optionally, you may want to verify that the selected option has been set correctly
cy.get('.dropdown-container').should('contain', 'Option 2');
*/




