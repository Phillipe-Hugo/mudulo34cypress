/// <reference types="cypress" />

describe("Tests for the contacts page", () => {
  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app/");
  });

  it("Redenrizar Pagina", () => {
    cy.get("input").should("have.length", 3);
    cy.screenshot("Contacts Renderize correctly");
  });

  it("Deletar Contato Existente", () => {
    cy.get(".delete").then(($deleteButtons) => {
      if ($deleteButtons.length > 0) {
        cy.get(".delete").click({ multiple: true });
        cy.get(".delete").should("have.length", 0);
      } else {
        cy.log("No pre-made contacts to delete");
      }
    });
  });

  it("Adcionar Contato", () => {
    cy.get('[type="text"]').type("Ebac");
    cy.get('[type="email"]').type("Ebac@Ebac.com");
    cy.get('[type="tel"]').type("11902472377");
    cy.get(".adicionar").click();
    cy.get(".sc-eDDNvR > :nth-child(1)").should("have.text", "Ebac");
  });

  it("Editar Contato", () => {
    cy.get(".edit").click();
    cy.get('[type="text"]').clear().type("EbacEdited");
    cy.get('[type="email"]').clear().type("Ebac@Edited.com");
    cy.get('[type="tel"]').clear().type("11902470000");
    cy.get(".alterar").click();
    cy.get(".sc-eDDNvR > :nth-child(1)").should("have.text", "EbacEdited");
  });
});
