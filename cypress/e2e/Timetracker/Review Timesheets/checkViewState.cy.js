//in progress

describe('checkViewState', () => {
    it('passes', () => {
        cy.login('sofis@gmail.com','SofiA1234!')

        cy.get('[class="ant-select sc-eirqVv lhJykP ant-select-single ant-select-show-arrow"]')
            .click()
            .contains('Arroyo Consulting (AC)')
            .click()

        cy.get('.ant-card-body')
            .contains('Timetracker')
            .click()

        cy.get('.ant-menu-title-content')
            .contains('Review timesheets')
            .click()
        
        cy.get('.ant-select-selection-item')
            .eq(1)
            .contains('Sent')
            .click()
         
        cy.get('.ant-select-item-option')
            .contains('All statuses')
            .click({force:true}) 
            .wait(3000)

        cy.get('.ant-table-cell-fix-right')
            .eq(1)
            .click({force:true})

      
              
        
    })
})