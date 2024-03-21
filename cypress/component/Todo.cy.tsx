import Todo from "@/app/components/todo";
import { TodoStat } from "@/typings";
import "../../app/globals.css";

const todoExample = {
  _id: "1",
  name: "My Todo",
  status: TodoStat.COMPLETE,
  description: "This is my todo",
};

describe("Todo.cy.tsx", () => {
  beforeEach(() => {
    cy.mount(<Todo todo={todoExample} />);
  });

  it("Should render todo title", () => {
    cy.getDataTest("todo-title").should("contain.text", todoExample.name);
  });

  it("Should render todo description", () => {
    cy.getDataTest("todo-description").should(
      "contain.text",
      todoExample.description
    );
  });

  it("Should show current todo status", () => {
    cy.getDataTest("todo-status").should("contain.text", TodoStat.COMPLETE);
  });

  it("Should open dropdown list with status items [todo,inpogress, done]", () => {
    cy.getDataTest("status-list").should("not.exist");
    cy.getDataTest("status-dropdown").click();
    cy.getDataTest("status-list").should("exist");

    cy.getDataTest("status-list").within(() => {
      cy.getDataTest("status-todo").should("exist");
      cy.getDataTest("status-inprogress").should("exist");
      cy.getDataTest("status-done").should("exist");
    });
  });

  it.only("Should change todo status", () => {
    cy.getDataTest("status-dropdown").click();
    cy.getDataTest("status-list").within(() => {
      cy.getDataTest("status-done").click();
    });
    cy.getDataTest("todo-status").should("contain.text", TodoStat.DONE);
  });
});
