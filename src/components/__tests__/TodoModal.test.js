import React from "react"
import { screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import { describe, expect, it } from "@jest/globals"
import { renderWithProviders } from "../utils/test-utils"
import TodoModal from "../TodoModal"

describe("React Todo App", () => {
  it("Checking that todo modal matches snapshot", async () => {
    const div = document.createElement("div")
    const view = renderWithProviders(<TodoModal />, div)
    expect(view.container).toMatchSnapshot()
  })

  it("render input of add task", async () => {
    renderWithProviders(<TodoModal />)
    const findid = screen.queryByTestId("todoForm")
    expect(findid).toBeDefined()
  })

  it("should cancel todo task", async () => {
    renderWithProviders(<TodoModal />)
    const findid = screen.queryByTestId("cancel-btn")
    expect(findid).toBeDefined()
  })

  it("render the action on cancel button", async () => {
    renderWithProviders(<TodoModal />)
    const cancelText = screen.queryByText("Cancel")
    expect(cancelText).toBeDefined()
  })

  it("render the input label", async () => {
    renderWithProviders(<TodoModal />)
    const labelText = screen.queryByLabelText("Title")
    expect(labelText).toBeDefined()
  })

  it("render the input placeholder", async () => {
    renderWithProviders(<TodoModal />)
    const placeholderText = screen.queryByPlaceholderText("Add task")
    expect(placeholderText).toBeDefined()
  })

  it("render the select status option", async () => {
    renderWithProviders(<TodoModal />)
    const selectOption = screen.queryByRole("combobox", { value: "complete" })
    expect(selectOption).not.toBe("incomplete")
  })
})
