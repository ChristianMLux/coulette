// Welcome to Coulette
//
// this app can generate random colors and save them in a list
describe("rnd color generator", () => {
  // before each it, visit homedirectory
  beforeEach(() => {
    cy.visit("/");
  });

  it("should show initial generated color", () => {
    cy.get("[data-cy=colorCodeP").contains("#").should("exist");
  });

  it("should generate new color", () => {
    cy.get("[data-cy=colorCodeP]").contains("#").should("exist");
    cy.get("[data-cy=colorCodeP]").then(($color) => {
      const c1 = $color.text();
      cy.get("[data-cy=generateColorBtn]").click();
      cy.get("[data-cy=colorCodeP]").should(($color2) => {
        expect($color2.text()).not.to.eq(c1);
      });
    });
  });

  it("should generate a list item with the colorcode", () => {
    cy.get("[data-cy=saveColorBtn]").click();
    cy.get("[data-cy=colorList]").should("have.length", 1);
    cy.get("[data-cy=colorLi]").contains("#").should("exist");
    cy.get("[data-cy=deleteBtn").should("exist");
    cy.get("[data-cy=saveColorBtn]").should("be.disabled");
  });

  it("should delete color from list", () => {
    cy.get("[data-cy=saveColorBtn]").click();
    cy.get("[data-cy=colorList]").should("have.length", 1);
    cy.get("[data-cy=colorLi]").contains("#").should("exist");
    cy.get("[data-cy=deleteBtn").should("exist");
    cy.get("[data-cy=deleteBtn").click();
    cy.get("[data-cy=colorLi]").should("not.exist");
  });
});
