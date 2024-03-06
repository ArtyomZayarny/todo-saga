import { TodoStat } from "@/typings";
import Button from "./components/button";
import TodoList from "./components/todo-list";

export default function Home() {
  const todos = [
    {
      id: 1,
      name: "write this app",
      status: TodoStat.IN_PROGRESS,
      description: "Link Redux suga and chypress",
    },
  ];

  return (
    <main className="content bg-blue-100">
      <div className="container p-4 mx-auto">
        <Button />
        <TodoList todos={todos} />
      </div>
    </main>
  );
}
