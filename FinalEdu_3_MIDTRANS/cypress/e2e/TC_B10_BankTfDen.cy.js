/// <reference types="cypress" />

describe("TC-B10 ", () => {
  it("Payment Bank Transfer Denied", () => {
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

    //BankTransfer
    cy.get(':nth-child(3) > [data-testid="list-item"]').click();
    cy.get('[href="#/bank-transfer/mandiri-va"] > .payment-page-text').click();
    cy.get(":nth-child(3) > :nth-child(2) > .float-right").click();
    cy.get(":nth-child(4) > :nth-child(2) > .float-right").click();

    cy.visit("https://simulator.sandbox.midtrans.com/mandiri/bill/index");
    const textToPaste = "70012";
    const textToPaste1 = "60052424849";
    cy.get("#biller_code").click().invoke("val", textToPaste);
    cy.get("#payment_code").click().invoke("val", textToPaste1);
    cy.get(".btn").click();

    cy.get(".alert")
      .should("be.visible")
      .should("include.text", "Something went wrong");
  });
});
