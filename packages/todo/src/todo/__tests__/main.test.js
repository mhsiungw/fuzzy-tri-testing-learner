import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Main } from "../components/main";

const todos = [
  {
    title: "1",
    completed: "1",
    id: "1",
  },
  {
    title: "2",
    completed: "2",
    id: "2",
  },
];

test("loads corrent numbers of todo items", () => {
  render(
    <BrowserRouter>
      <Main todos={todos} />
    </BrowserRouter>
  );

  // Assuming you have multiple todo-items rendered
  expect(screen.getAllByTestId("todo-item")).toHaveLength(2);
});
