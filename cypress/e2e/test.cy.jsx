describe("Test Home Page", () => {
  it("Test tile", () => {
    cy.visit("/")
      .get("h2")
      .contains(/cypress testing/i);
  });
});
