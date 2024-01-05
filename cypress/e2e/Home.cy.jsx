describe("Test Hero Section Test", () => {
  it("Test title", () => {
    cy.visit("/")
      .get("h4")
      .contains(/Transform Your Dreams Into Reality!/i);
  });

  it("Test Paragraph", () => {
    cy.visit("/")
      .get("p")
      .contains(
        /Uncover The Hidden Blocks To Manifestation And Create Your Dream Life In Just 30 Days!/i
      );
  });
  it("Test Button", () => {
    cy.visit("/")
      .get("button.MuiButtonBase-root")
      .contains(/BOOK YOUR FREE ENERGY AND LIFE PATH READING/i)
      .click();
    cy.get("div.MuiBox-root.css-e1ny0g").should("be.visible");
  });
});

describe("Test Rita Section", () => {
  it("Test Coach title", () => {
    cy.visit("/")
      .get("h1")
      .contains(/Hi, I'm Rita/i);
  });
  it('Should navigate to "Know More About Rita" link', () => {
    cy.visit("/")
      .get("a.MuiTypography-root")
      .contains(/Know More About Rita/i)
      .click()
      .url()
      .should("include", "/coaching-with-rita");
  });
});

describe("Test Our Coaches section", () => {
  it("Should have title 'Our Coaches' ", () => {
    cy.visit("/")
      .get("span")
      .contains(/Our Coaches/i);
  });

  // it("Should navigate to the next set of coaches", () => {
  //   cy.visit("/");
  //   cy.get(".react-multi-carousel-arrow-next").click();
  //   cy.get(".react-multi-carousel-list").should(
  //     "contain",
  //     "Next set of coaches"
  //   );
  // });

  it("Should navigate to coach detail page on item click", () => {
    cy.visit("/");
    cy.get(".react-multi-carousel-item").eq(0).click();
    cy.url().should("include", "/ourCoachesDetail/65168f1f811bfc470f400cec");
  });

  // it("Should navigate to the selected set of coaches on dot click", () => {
  //   cy.visit("/");
  //   cy.get(".react-multi-carousel-dot").eq(1).click();
  //   cy.get(".react-multi-carousel-list").should(
  //     "contain",
  //     "Coaches in the second set"
  //   );
  // });

  // it("Should visually indicate the active item", () => {
  //   cy.visit("/");
  //   cy.get(".react-multi-carousel-item--active").should(
  //     "have.css",
  //     "border",
  //     "2px solid red"
  //   );
  // });

  // it("Should automatically transition to the next set of coaches (autoplay)", () => {
  //   cy.visit("/");
  //   cy.wait(5000); // Adjust the wait time based on your carousel's autoplay interval
  //   cy.get(".react-multi-carousel-list").should(
  //     "contain",
  //     "Next set of coaches"
  //   );
  // });

  it("Should navigate to 'our-coaches' page", () => {
    cy.visit("/")
      .get("a.MuiLink-root")
      .contains(/SEE ALL COACHES/i)
      .click()
      .url()
      .should("include", "/our-coaches");
  });
});

describe("Test Events Section", () => {
  it("Should display title 'What's new on Become Your Creator' ", () => {
    cy.visit("/")
      .get("p.MuiTypography-root")
      .contains(/What's new on Become Your Creator/i);
  });
  it("Should navigate to the correct URL when 'Get Tickets' link is clicked from Tikcket card", () => {
    cy.visit("/")
      .get("a.css-ym4dd6")
      .should("exist")
      .should("have.attr", "href")
      .then((href) => {
        cy.visit(href);
      })
      .url()
      .should(
        "eq",
        "https://allevents.in/online/3-day-conscious-creation-with-rita-dec-1st-2nd-3rd-8pm-bst-3pm-est/80002505782409?ref=smdl"
      );
  });
});

baseUrl: "https://coaching-seven.vercel.app/";
