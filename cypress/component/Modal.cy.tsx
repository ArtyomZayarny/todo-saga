import Modal from "@/app/components/modal";
import "../../app/globals.css";
import { TodoStat } from "@/typings";

describe("Modal.cy.tsx", () => {
  beforeEach(() => {
    cy.mount(<Modal isOpen={true} />);
  });

  it("Should have title", () => {
    cy.getDataTest("modal-title").should("contain.text", "Add new task");
  });

  it("Should have input", () => {
    cy.getDataTest("modal-input").should("exist");
  });

  it("Should have status radio-group", () => {
    cy.getDataTest("radio-group").within(() => {
      cy.getDataTest("radio-item").should("have.length", 3);
    });
  });

  it("Should have textarea", () => {
    cy.getDataTest("modal-textarea").should("exist");
  });

  it("Should have submit button", () => {
    cy.getDataTest("modal-submit").should("exist");
    cy.getDataTest("modal-submit").should("be.disabled");
  });

  it("Should activate submit button", () => {
    cy.getDataTest("modal-submit").should("be.disabled");
    cy.getDataTest("modal-input").type("My test todo");
    cy.getDataTest("modal-submit").should("not.be.disabled");
  });
});
