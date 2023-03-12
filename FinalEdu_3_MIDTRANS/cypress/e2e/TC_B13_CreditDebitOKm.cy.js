/// <reference types="cypress" />

describe("TC-B13 ", () => {
  it("Payment Credit/DebitCard Mandiri Success", () => {
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

    //Payment Credit/DebitCard
    cy.get(':nth-child(4) > [data-testid="list-item"]').click();
    cy.get(".card-number-input-container > .valid-input-value")
      .click()
      .clear()
      .type("4097661111111113}");
    cy.get("#card-expiry").click().type("1225");
    cy.get("#card-cvv").click().type("123");
    cy.get(".btn").click();
  });
});
