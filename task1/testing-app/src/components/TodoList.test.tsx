import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TodoList } from "./TodoList";

describe("TodoList Component", () => {

  test("renders empty list", () => {
    render(<TodoList />);
    expect(screen.getByText("Todo List")).toBeInTheDocument();
    expect(screen.getByText("0 todos (0 completed)")).toBeInTheDocument();
  });

  test("adds todo", async () => {
    const user = userEvent.setup();
    render(<TodoList />);

    const input = screen.getByTestId("todo-input");
    const button = screen.getByTestId("add-button");

    await user.type(input, "New task");
    await user.click(button);

    expect(screen.getByText("New task")).toBeInTheDocument();
  });

  test("adds with Enter", async () => {
    const user = userEvent.setup();
    render(<TodoList />);

    const input = screen.getByTestId("todo-input");

    await user.type(input, "Enter task{Enter}");

    expect(screen.getByText("Enter task")).toBeInTheDocument();
  });

  test("toggle todo", async () => {
    render(<TodoList initialTodos={[{ id: 1, text: "Test", completed: false }]} />);

    const checkbox = screen.getByTestId("todo-checkbox");
    await userEvent.click(checkbox);

    expect(screen.getByTestId("todo-item")).toHaveClass("completed");
  });

  test("delete todo", async () => {
    render(<TodoList initialTodos={[{ id: 1, text: "Delete me", completed: false }]} />);

    const btn = screen.getByTestId("delete-button");
    await userEvent.click(btn);

    expect(screen.queryByText("Delete me")).not.toBeInTheDocument();
  });

});