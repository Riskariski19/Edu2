/// <reference types="cypress" />

describe(" Get Api Retrieves user Todos", () => {
  let accessToken =
    "ba3bd09b29513b0647d2ebf81992f9dab233fcc20f648f686d792a7e8a240845";
  it("Get Retrieves Users Todos", () => {
    cy.request({
      method: "GET",
      url: "https://gorest.co.in/public/v2/users/1139/todos",
      header: {
        Authorization: "Bearer" + accessToken,
      },
    })
      .as("users")
      .then((res) => {
        //ResStatus
        expect(res.status).to.eq(200);
        //ResBody
        cy.get("@users").its("body").should("be.empty");

        //ResHeader
        cy.get("@users")
          .its("headers")
          .its("content-type")
          .should("include", "application/json; charset=utf-8");
      });
  });
});
