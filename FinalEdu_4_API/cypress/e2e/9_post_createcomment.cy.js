/// <reference types="cypress" />

describe(" Creates a user comments", () => {
  it("Post Create User comments", () => {
    cy.request({
      method: "POST",
      url: "https://gorest.co.in/public/v2/posts/1146/comments",
      headers: {
        Authorization:
          "Bearer 3ed02bf149ecc15b316a2b4a9937a9f7db5abf76096b0432bc94861d12789bee",
      },
      body: {
        name: "Pres. Rohana Asanah",
        email: "pres_rohana_asan@miller-schinner.biz",
        body: "Repellendus a non. Eum totam modi. Illo voluptas odio.",
      },
    })
      .as("users")
      .then((res) => {
        //ResStatus
        expect(res.status).to.eq(201);
        //ResBody
        expect(res.body.name).to.eq("Pres. Rohana Asanah");
        expect(res.body.email).to.eq("pres_rohana_asan@miller-schinner.biz");
        expect(res.body.body).to.eq(
          "Repellendus a non. Eum totam modi. Illo voluptas odio."
        );
        //ResHeader
        cy.get("@users")
          .its("headers")
          .its("content-type")
          .should("include", "application/json; charset=utf-8");
      });
  });
});
