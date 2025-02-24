/// <reference types="cypress" />

describe("Testes de Remover Contato", () => {
    beforeEach(() => {
      cy.visit("https://agenda-contatos-react.vercel.app/");
    });
  
    it("Deve deletar contatos existentes", () => {
      cy.get(".delete").then(($deleteButtons) => {
        if ($deleteButtons.length > 0) {
          cy.get(".delete").click({ multiple: true });
          cy.get(".delete").should("have.length", 0);
        } else {
          cy.log("No pre-made contacts to delete");
        }
      });
    });
  });