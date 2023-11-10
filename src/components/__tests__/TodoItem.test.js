import React from "react"
import { screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import { describe, expect, it } from "@jest/globals"
import { renderWithProviders } from "../utils/test-utils"
import TodoItem from "../TodoItem"
import { setupStore } from "../../app/store"
import { addTodo } from "../../slices/todoSlice"

describe("React Todo App", () => {
  it("Checking that todo item matches snapshot", async () => {
    const div = document.createElement("div")
    const view = renderWithProviders(<TodoItem />, div)
    expect(view.container).toMatchSnapshot()
  })

  it("render input of add task", async () => {
    const store = setupStore()
    store.dispatch(addTodo({ id: 0, title: "TodoApp", stutus: "complete" }))
    renderWithProviders(<TodoItem />, { store })
    const findid = screen.queryByTestId("todoItem")
    expect(findid).toBeDefined()
  })

  it("render checkButton of add content", async () => {
    renderWithProviders(<TodoItem />)
    const check = screen.queryByTestId("checkbox")
    expect(check).toBeDefined()
  })
})
