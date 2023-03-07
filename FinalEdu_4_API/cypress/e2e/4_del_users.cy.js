/// <reference types="cypress" />

describe(" API Delete User", () => {
  it("API Get ", () => {
    cy.request({
      method: "GET",
      url: "https://gorest.co.in/public/v2/users/1145",
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
      method: "DELETE",
      url: "https://gorest.co.in/public/v2/users/1145",
      headers: {
        Authorization:
          "Bearer 3ed02bf149ecc15b316a2b4a9937a9f7db5abf76096b0432bc94861d12789bee",
      },
    })
      .as("users")
      .then((res) => {
        //ResStatus
        expect(res.status).to.eq(204);
      });
  });
});
