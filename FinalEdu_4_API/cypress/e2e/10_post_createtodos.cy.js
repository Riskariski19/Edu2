/// <reference types="cypress" />

describe(" Creates a user todos", () => {
  it("Post Create User todos", () => {
    cy.request({
      method: "POST",
      url: "https://gorest.co.in/public/v2/users/1146/todos",
      headers: {
        Authorization:
          "Bearer 3ed02bf149ecc15b316a2b4a9937a9f7db5abf76096b0432bc94861d12789bee",
      },
      body: {
        title: "Ustulo atqui statua caste corrumpo.",
        due_on: "2023-01-06T00:00:00.000+05:30",
        status: "completed",
      },
    })
      .as("users")
      .then((res) => {
        //ResStatus
        expect(res.status).to.eq(201);
        //ResBody
        expect(res.body.title).to.eq("Ustulo atqui statua caste corrumpo.");
        expect(res.body.due_on).to.eq("2023-01-06T00:00:00.000+05:30");
        expect(res.body.status).to.eq("completed");
        //ResHeader
        cy.get("@users")
          .its("headers")
          .its("content-type")
          .should("include", "application/json; charset=utf-8");
      });
  });
});
