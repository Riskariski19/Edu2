/// <reference types="cypress" />

describe("TC-B08 ", () => {
  it("Cancel Booking", () => {
    cy.visit("https://demo.midtrans.com/");
    cy.url().should("include", "midtrans");
    cy.get(".buy").click();

    cy.get(".cancel-btn").click();
    cy.get(".title").should("be.visible");
  });
});
