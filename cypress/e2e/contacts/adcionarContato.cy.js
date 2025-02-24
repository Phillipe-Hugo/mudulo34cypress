/// <reference types="cypress" />

describe("Testes de Adicionar Contato", () => {
    beforeEach(() => {
      cy.visit("https://agenda-contatos-react.vercel.app/");
    });
  
    it("Deve renderizar a página corretamente", () => {
      cy.get("input").should("have.length", 3);
      cy.screenshot("Contacts Renderize correctly");
    });
  
    it("Deve adicionar um novo contato", () => {
      cy.get('[type="text"]').type("Ebac");
      cy.get('[type="email"]').type("Ebac@Ebac.com");
      cy.get('[type="tel"]').type("11902472377");
      cy.get(".adicionar").click();
      cy.get(".sc-eDDNvR > :nth-child(1)").should("have.text", "Ebac");
    });
  });