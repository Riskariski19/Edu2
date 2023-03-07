/// <reference types="cypress" />

describe(" Get Api Users Test", () => {
  let accessToken =
    "ba3bd09b29513b0647d2ebf81992f9dab233fcc20f648f686d792a7e8a240845";
  it("Get Users", () => {
    cy.request({
      method: "GET",
      url: "https://gorest.co.in/public/v2/users/1139",
      header: {
        Authorization: "Bearer" + accessToken,
      },
    })
      .as("users")
      .then((res) => {
        //ResStatus
        expect(res.status).to.eq(200);
        //ResBody
        expect(res.body.id).to.eq(1139);
        expect(res.body.name).to.eq("Ramesh Mahajan");
        expect(res.body.email).to.eq("mahajan_ramesh@gottlieb-gleason.org");
        expect(res.body.gender).to.eq("male");
        expect(res.body.status).to.eq("inactive");
        //ResHeader
        cy.get("@users")
          .its("headers")
          .its("content-type")
          .should("include", "application/json; charset=utf-8");
      });
  });
});
