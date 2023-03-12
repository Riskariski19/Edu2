/// <reference types="cypress" />

describe("TC-B04 ", () => {
  it("Successfull Booking", () => {
    cy.visit("https://demo.midtrans.com/");
    cy.url().should("include", "midtrans");
    cy.get(".buy").click();

    cy.contains("Shopping Cart");
    cy.get('[data-reactid=".0.0.1.0.3.0.0.2"] > .input > input')
      .click()
      .clear();
    cy.get(".cart-checkout").click();
    cy.get("#snap-midtrans").should("be.visible");
  });
});
