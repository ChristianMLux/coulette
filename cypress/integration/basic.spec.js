// Welcome to Coulette
//
// this app can generate random colors and save them in a list
describe("rnd color generator", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should show initial generated color", () => {
    cy.get("[data-cy=colorCodeP").should("exist");
  });

  it("should generate new color", () => {
    cy.get("[data-cy=generateColorBtn]").click();
    cy.get("[data-cy=colorCodeP]").contains("#").should("exist");
  });

  it("should generate a list item with the colorcode", () => {
    cy.get("[data-cy=saveColorBtn]").click();

    cy.get("[data-cy=colorList]").should("have.length", 1);
    cy.get("[data-cy=colorLi]").contains("#").should("exist");
    cy.get("[data-cy=deleteBtn").should("exist");
    cy.get("[data-cy=saveColorBtn]").should("be.disabled");
  });
});
