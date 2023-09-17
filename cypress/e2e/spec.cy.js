/// <reference types= "cypress" />

Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

describe("template spec", () => {
  it("Randomly enter the website arabic or english", () => {
    let websites = [
      "https://global.almosafer.com/ar",
      "https://global.almosafer.com/en",
    ];

    let randomIndex = Math.floor(Math.random() * websites.length);

    cy.visit(websites[randomIndex]);

    let ArabicCities = ["جدة", "دبي"];
    let ArabicRandomeIndex = Math.floor(Math.random()) * ArabicCities.length;
    let EnglishCities = ["dubai", "jaddah", "riyad"];
    let EnglishRandomeIndex = Math.floor(Math.random()) * EnglishCities.length;

    cy.get(".cta__saudi").click();
    cy.get("#uncontrolled-tab-example-tab-hotels > .sc-dWcDbm").click();

    if (randomIndex == 0) {
      cy.get('[data-testid="AutoCompleteInput"]').type(
        ArabicCities[ArabicRandomeIndex]
      );
    } else { 
      cy.get('[data-testid="AutoCompleteInput"]').type(
        EnglishCities[EnglishRandomeIndex]
      );
    }
  });
});
