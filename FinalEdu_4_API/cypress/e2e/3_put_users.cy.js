/// <reference types="cypress" />

describe(" API Put updated status inactive", () => {
  it("API Get status active", () => {
    cy.request({
      method: "GET",
      url: "https://gorest.co.in/public/v2/users/1142",
      headers: {
        Authorization:
          "Bearer 3ed02bf149ecc15b316a2b4a9937a9f7db5abf76096b0432bc94861d12789bee",
      },
    })
      .as("users")
      .then((res) => {
        //ResStatus
        expect(res.status).to.eq(200);
      });
    cy.request({
      method: "PUT",
      url: "https://gorest.co.in/public/v2/users/1142",
      headers: {
        Authorization:
          "Bearer 3ed02bf149ecc15b316a2b4a9937a9f7db5abf76096b0432bc94861d12789bee",
      },
      body: {
        name: "Ravi Dhawan",
        email: "dhawan_ravi@romaguera.co",
        gender: "female",
        status: "inactive",
      },
    })
      .as("users")
      .then((res) => {
        //ResStatus
        expect(res.status).to.eq(200);
        //ResBody
        expect(res.body.name).to.eq("Ravi Dhawan");
        expect(res.body.email).to.eq("dhawan_ravi@romaguera.co");
        expect(res.body.gender).to.eq("female");
        expect(res.body.status).to.eq("inactive");
        //ResHeader
        cy.get("@users")
          .its("headers")
          .its("content-type")
          .should("include", "application/json; charset=utf-8");
      });
  });
});
