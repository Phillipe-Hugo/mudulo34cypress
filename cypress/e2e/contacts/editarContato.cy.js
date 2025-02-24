/// <reference types="cypress" />

describe("Testes de Editar Contato", () => {
    beforeEach(() => {
      cy.visit("https://agenda-contatos-react.vercel.app/");
    });
  
    it("Deve editar um contato existente", () => {
      cy.get(".edit").click();
      cy.get('[type="text"]').clear().type("EbacEdited");
      cy.get('[type="email"]').clear().type("Ebac@Edited.com");
      cy.get('[type="tel"]').clear().type("11902470000");
      cy.get(".alterar").click();
      cy.get(".sc-eDDNvR > :nth-child(1)").should("have.text", "EbacEdited");
    });
  });