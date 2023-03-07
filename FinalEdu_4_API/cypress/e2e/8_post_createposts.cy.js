/// <reference types="cypress" />

describe(" Creates a user post", () => {
  it("Post Create User Posts", () => {
    cy.request({
      method: "POST",
      url: "https://gorest.co.in/public/v2/users/1146/posts",
      headers: {
        Authorization:
          "Bearer 3ed02bf149ecc15b316a2b4a9937a9f7db5abf76096b0432bc94861d12789bee",
      },
      body: {
        title: "test1",
        body: "just a test",
      },
    })
      .as("users")
      .then((res) => {
        //ResStatus
        expect(res.status).to.eq(201);
        //ResBody
        expect(res.body.title).to.eq("test1");
        expect(res.body.body).to.eq("just a test");

        //ResHeader
        cy.get("@users")
          .its("headers")
          .its("content-type")
          .should("include", "application/json; charset=utf-8");
      });
  });
});
