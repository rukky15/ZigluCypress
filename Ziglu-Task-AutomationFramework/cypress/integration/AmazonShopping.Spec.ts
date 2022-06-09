import { $amazonpage } from "../page-elements/amazon.page";

describe("Testing Amazon Shopping Cart", ()=>{


    it("Amazon Shopping Cart", ()=>{
    cy.visit("/");
    cy.wait(2000)
    cy.xpath($amazonpage.amazonbitcoins.acceptcookie).click();
    cy.xpath($amazonpage.amazonbitcoins.selectbook).select('Books',{force: true})
    cy.xpath($amazonpage.amazonbitcoins.searchbox).type('Bitcoin');
    cy.xpath($amazonpage.amazonbitcoins.clicksearch).click();
    
    cy.xpath($amazonpage.amazonbitcoins.authorname)
    .should('contain', 'Saifedean Ammous')
    .then(function(Author){
       cy.log(Author.text())
    })

    cy.xpath($amazonpage.amazonbitcoins.releasedate)
    .should('contain', '8 Jun 2018')
    .then(function(ReleaseDate){
       cy.log(ReleaseDate.text())
    })

    cy.wait(4000);
    cy.xpath($amazonpage.amazonbitcoins.clickbook).click();
    cy.wait(4000);

    cy.xpath($amazonpage.amazonbitcoins.hardcoverprice)
    .then(function(HardCoverRate){
       cy.log(HardCoverRate.text())
    })

    cy.xpath($amazonpage.amazonbitcoins.reviewcount)
    .then(function(ReviewCount){
       cy.log(ReviewCount.text())
    })

    cy.xpath($amazonpage.amazonbitcoins.addtocart).click();
    cy.wait(4000);

    cy.xpath($amazonpage.amazonbitcoins.numberofitem)
    .should('have.text', '1')

   cy.xpath($amazonpage.amazonbitcoins.clickbasket).click();

    cy.xpath($amazonpage.amazonbitcoins.bookname)
    .should('contain.text', 'The Bitcoin Standard')
     

    cy.xpath($amazonpage.amazonbitcoins.nameofauthor)
   .should('contain.text', 'by Saifedean Ammous');
     
    
    cy.xpath($amazonpage.amazonbitcoins.quantity)
    .should('have.text', '1');
    


    })
 
 
    })
 
 