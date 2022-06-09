"use strict";
describe("Testing Amazon Shopping Cart", () => {
    it("Amazon Shopping Cart", () => {
        cy.visit("https://www.amazon.co.uk/");
        cy.wait(2000);
        cy.xpath("//input[@name='accept']").click();
        cy.xpath("//select[@id='searchDropdownBox']").select('Books', { force: true });
        cy.xpath("//input[@id='twotabsearchtextbox']").type('Bitcoin');
        cy.xpath("//input[@id='nav-search-submit-button']").click();
        cy.xpath("//a[text()='Saifedean Ammous']").then(function (Author) {
            cy.log(Author.text());
        });
        cy.xpath("//span[text()='8 Jun 2018']").then(function (ReleaseDate) {
            cy.log(ReleaseDate.text());
        });
        cy.wait(4000);
        cy.xpath("//img[@alt='The Bitcoin Standard – The Decentralized Alternative to Central Banking']").click();
        cy.xpath("//a[span[text()='Hardcover']]//span/span").then(function (HardCoverRate) {
            cy.log(HardCoverRate.text());
        });
        cy.xpath("(//span[@id='acrCustomerReviewText'])[1]").then(function (ReviewCount) {
            cy.log(ReviewCount.text());
        });
        cy.xpath("//input[@title='Add to Shopping Basket']").click();
        cy.wait(4000);
        cy.xpath("(//span[text()='1'])[1]").then(function (Cart) {
            cy.log(Cart.text());
        });
        cy.xpath("(//span[text()='1'])[1]").click();
        cy.xpath("(//span[text()='The Bitcoin Standard – The Decentralized Alternative to Central Banking'])[1]").then(function (BookName) {
            cy.log(BookName.text());
        });
        cy.xpath("//span[@class='a-size-base sc-product-creator']").then(function (AuthorName) {
            cy.log(AuthorName.text());
        });
        cy.xpath("//span[@id='a-autoid-1-announce']").then(function (Quantity) {
            cy.log(Quantity.text());
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW1hem9uLlNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jeXByZXNzL2ludGVncmF0aW9uL0FtYXpvbi5TcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxRQUFRLENBQUMsOEJBQThCLEVBQUUsR0FBRSxFQUFFO0lBR3pDLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSxHQUFFLEVBQUU7UUFDL0IsRUFBRSxDQUFDLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBQ3RDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDYixFQUFFLENBQUMsS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDNUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUMsRUFBQyxLQUFLLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQTtRQUMzRSxFQUFFLENBQUMsS0FBSyxDQUFDLG9DQUFvQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQy9ELEVBQUUsQ0FBQyxLQUFLLENBQUMseUNBQXlDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM1RCxFQUFFLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVMsTUFBTTtZQUM1RCxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFBO1FBQ3hCLENBQUMsQ0FBQyxDQUFBO1FBQ0YsRUFBRSxDQUFDLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFTLFdBQVc7WUFDOUQsRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQTtRQUM3QixDQUFDLENBQUMsQ0FBQTtRQUNGLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDZCxFQUFFLENBQUMsS0FBSyxDQUFDLHVGQUF1RixDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDMUcsRUFBRSxDQUFDLEtBQUssQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFTLGFBQWE7WUFDN0UsRUFBRSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQTtRQUMvQixDQUFDLENBQUMsQ0FBQTtRQUNGLEVBQUUsQ0FBQyxLQUFLLENBQUMsMENBQTBDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBUyxXQUFXO1lBQzNFLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUE7UUFDN0IsQ0FBQyxDQUFDLENBQUE7UUFDRixFQUFFLENBQUMsS0FBSyxDQUFDLDBDQUEwQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDN0QsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNkLEVBQUUsQ0FBQyxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFJO1lBQ25ELEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUE7UUFDdEIsQ0FBQyxDQUFDLENBQUE7UUFDRixFQUFFLENBQUMsS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDNUMsRUFBRSxDQUFDLEtBQUssQ0FBQywrRkFBK0YsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFTLFFBQVE7WUFDN0gsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQTtRQUMxQixDQUFDLENBQUMsQ0FBQTtRQUNGLEVBQUUsQ0FBQyxLQUFLLENBQUMsaURBQWlELENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBUyxVQUFVO1lBQ2pGLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUE7UUFDNUIsQ0FBQyxDQUFDLENBQUE7UUFDRixFQUFFLENBQUMsS0FBSyxDQUFDLG1DQUFtQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVMsUUFBUTtZQUNqRSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFBO1FBQzFCLENBQUMsQ0FBQyxDQUFBO0lBR0YsQ0FBQyxDQUFDLENBQUE7QUFHTCxDQUFDLENBQUMsQ0FBQSJ9