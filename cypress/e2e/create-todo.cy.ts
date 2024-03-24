import { todo } from "node:test";

function fillCreateTodoForm(name, description = "") {
  cy.getDataTest("modal-window").should("be.exist");
  cy.getDataTest("modal-input").should("exist");
  cy.getDataTest("modal-input").type(name);

  cy.getDataTest("modal-textarea").should("exist");
  cy.getDataTest("modal-textarea").type(description);
}

function creteTodoRequest(todoResponse) {
  cy.intercept("POST", "https://nest-todo-api-qtrw.onrender.com/todo", {
    statusCode: 201,
    body: todoResponse,
  }).as("postTodo");
}

function fetchTodos(todosResponse) {
  cy.intercept("GET", "https://nest-todo-api-qtrw.onrender.com/todo", {
    statusCode: 200,
    body: todosResponse,
  }).as("fetchTodos");
}

describe("Create todo", () => {
  beforeEach(() => {
    fetchTodos([]);
    cy.visit("http://localhost:3000");
    cy.wait("@fetchTodos");
  });

  it("Should create todo", () => {
    const todos = [
      {
        _id: "1",
        name: "Test todo 1",
        status: "todo",
        description: "Test todo 1 description",
      },
      {
        _id: "2",
        name: "Test todo 2",
        status: "todo",
        description: "Test todo 2 description",
      },
    ];
    cy.getDataTest("modal-window").should("not.be.exist");

    cy.getDataTest("todo-list").should("have.length", 0);

    cy.getDataTest("add-todo").should("be.exist");
    cy.getDataTest("add-todo").click();

    //Create new todo
    fillCreateTodoForm(todos[0].name, todos[0].description);

    //Create todo request interceptor
    creteTodoRequest(todos[0]);
    cy.getDataTest("modal-submit").click();

    //Check todo list items
    cy.getDataTest("todo-list").within(() => {
      cy.get("li").should("have.length", 1);
    });

    //Create one more todo
    cy.getDataTest("add-todo").click();
    //Create new todo
    fillCreateTodoForm(todos[1].name, todos[1].description);

    //Create todo request interceptor
    creteTodoRequest(todos[1]);
    cy.getDataTest("modal-submit").click();

    //Check todo list items
    cy.getDataTest("todo-list").within(() => {
      cy.get("li").should("have.length", 2);
    });
  });
});
