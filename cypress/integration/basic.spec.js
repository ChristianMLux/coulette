describe("rnd color generator", () => {
  it("should show initial generated color", () => {
    cy.visit("/");
    cy.get("[data-cy=colorCodeP").should("exist");
  });
  it("should generate new color", () => {
    cy.visit("/");
    cy.get("[data-cy=generateColorBtn]").click();
    cy.get("[data-cy=colorCodeP]").should("exist");
  });
});
