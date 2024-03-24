describe("Update todo", () => {
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
  beforeEach(() => {
    cy.fetchTodos(todos);
    cy.visit("http://localhost:3000");
  });

  it("Should update todo status", () => {
    cy.getDataTest("todo-list").within(() => {
      cy.get("li").should("have.length", 2);
    });

    cy.getDataTest("todo-list").within(() => {
      cy.get("li")
        .its(0)
        .within(() => {
          cy.intercept(
            "PATCH",
            `https://nest-todo-api-qtrw.onrender.com/todo/${todos[0]._id}`,
            { body: { status: "in progress" } }
          );
          cy.getDataTest("status-dropdown").click();

          cy.getDataTest("status-list").should("to.be.visible");
          cy.getDataTest("status-list").within(() => {
            cy.getDataTest("status-inprogress").click();
          });
        });
    });

    //check if item change status
    cy.getDataTest("todo-list").within(() => {
      cy.get("li")
        .its(0)
        .within(() => {
          cy.getDataTest("todo-status").should("contain.text", "in progress");
        });
    });
  });
});
