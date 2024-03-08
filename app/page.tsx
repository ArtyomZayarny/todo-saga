"use client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Dashboard from "./components/dashboard";

export default function Home() {
  return (
    <main className="content bg-blue-100">
      <div className="container p-4 mx-auto">
        <Provider store={store}>
          <Dashboard />
        </Provider>
      </div>
    </main>
  );
}
