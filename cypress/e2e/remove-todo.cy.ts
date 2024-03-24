describe("Remove todo", () => {
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

  it("Should remove todo", () => {
    cy.getDataTest("todo-list").within(() => {
      cy.get("li").should("have.length", 2);
    });

    cy.getDataTest("todo-list").within(() => {
      cy.get("li")
        .its(0)
        .within(() => {
          cy.intercept(
            "DELETE",
            `https://nest-todo-api-qtrw.onrender.com/todo/${todos[0]._id}`,
            { body: todos[0] }
          );
          cy.getDataTest("remove-todo").click();
        });
    });

    cy.getDataTest("todo-list").within(() => {
      cy.get("li").should("have.length", 1);
    });

    cy.getDataTest("todo-list")
      .its(0)
      .within(() => {
        cy.getDataTest("todo-title").should("contains.text", todos[1].name);
      });
  });
});
