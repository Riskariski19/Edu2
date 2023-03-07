/// <reference types="cypress" />

describe(" Get Api Retrieves user Comments", () => {
  let accessToken =
    "ba3bd09b29513b0647d2ebf81992f9dab233fcc20f648f686d792a7e8a240845";
  it("Get Retrieves Users Comments", () => {
    cy.request({
      method: "GET",
      url: "https://gorest.co.in/public/v2/posts/1139/comments",
      header: {
        Authorization: "Bearer" + accessToken,
      },
    })
      .as("users")
      .then((res) => {
        //ResStatus
        expect(res.status).to.eq(200);
        //ResBody
        expect(res.body[0].id).to.eq(1136);
        expect(res.body[0].post_id).to.eq(1139);
        expect(res.body[0].name).to.eq("Dr. Bhagavaan Ahluwalia");
        expect(res.body[0].email).to.eq("ahluwalia_dr_bhagavaan@mcclure.name");
        expect(res.body[0].body).to.eq(
          "Omnis similique voluptate. Quos similique aut. Sed adipisci nulla. Sunt omnis id."
        );

        //ResHeader
        cy.get("@users")
          .its("headers")
          .its("content-type")
          .should("include", "application/json; charset=utf-8");
      });
  });
});
