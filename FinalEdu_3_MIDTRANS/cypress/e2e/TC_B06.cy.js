/// <reference types="cypress" />

describe("TC-B06 ", () => {
  it("Successfull Booking", () => {
    cy.visit("https://demo.midtrans.com/");
    cy.url().should("include", "midtrans");
    cy.get(".buy").click();

    cy.contains("Shopping Cart");
    cy.get("textarea").click().clear();
    cy.get(".cart-checkout").click();
    cy.get("#snap-midtrans").should("be.visible");
  });
});
