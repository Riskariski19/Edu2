/// <reference types="cypress" />

describe("TC-B12 ", () => {
  it("Payment Indomart Denied", () => {
    cy.visit("https://demo.midtrans.com/");
    cy.url().should("include", "midtrans");
    cy.get(".buy").click();
    cy.get('[data-reactid=".0.0.1.0.0.0"]').should(
      "include.text",
      "Shopping Cart"
    );

    cy.get(".cart-checkout-settings").click();
    cy.get(".modal-header > span").should(
      "include.text",
      "SNAP Features Settings"
    );
    cy.get(".details").click();
    cy.get("[data-reactid='.0.0.1.2.1.0.5.1.1.3.0']").click();
    cy.get("[data-reactid='.0.0.1.2.2.1.0.0']").click();
    cy.get(".pull-right > .btn").click();

    //Indomart
    cy.get(':nth-child(8) > [data-testid="list-item"]').click();
    cy.get(".float-right").click();

    cy.visit("https://simulator.sandbox.midtrans.com/indomaret/index");

    cy.get("#payment_code").click().type("19493180846641");
    cy.get(".btn").click();
    cy.get(".alert")
      .should("be.visible")
      .should("include.text", "Something went wrong");
  });
});
