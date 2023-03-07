/// <reference types="cypress" />

describe(" Post Api Create a new user", () => {
  it("Post Create User", () => {
    cy.request({
      method: "POST",
      url: "https://gorest.co.in/public/v2/users",
      headers: {
        Authorization:
          "Bearer 3ed02bf149ecc15b316a2b4a9937a9f7db5abf76096b0432bc94861d12789bee",
      },
      body: {
        name: "indahsari",
        email: "indah12345@dinata.com",
        gender: "female",
        status: "inactive",
      },
    })
      .as("users")
      .then((res) => {
        //ResStatus
        expect(res.status).to.eq(201);
        //ResBody
        expect(res.body.name).to.eq("indahsari");
        expect(res.body.email).to.eq("indah12345@dinata.com");
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
