describe("Test Home Page", () => {
  it("Test title", () => {
    cy.visit("/coaching-with-rita")
      .get("p")
      .contains(/Coaching With Rita/i);
  });

  it("Test Sub title", () => {
    cy.visit("/coaching-with-rita")
      .get("p")
      .contains(/WHY CHOOSE RITA?/i);
  });

  it("Test List", () => {
    cy.visit("/coaching-with-rita")
      .get("li")
      .contains(
        "Why choose Rita as your coach? What sets her apart from other mindset and spiritual coaches? Rita possesses an unparalleled talent for tapping into the power of your energies and guiding you towards the outcomes you desire. Her coaching style is truly distinctive and unmatched"
      );
  });

  it("Test Success", () => {
    cy.visit("/coaching-with-rita").get("span").contains("Success Stories");
  });

  it("Test f&q", () => {
    cy.visit("/coaching-with-rita")
      .get("p")
      .contains("Collapsible Group Item #1");
  });

  it("Test img", () => {
    cy.visit("/coaching-with-rita").get("a").find("img");
  });
});
