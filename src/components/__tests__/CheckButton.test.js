import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "@jest/globals"
import CheckButton from "../CheckButton"

describe("React todo app", () => {
  it("render button", () => {
    render(<CheckButton />)

    expect(screen.getByTestId("button-animate")).toBeDefined()
  })
})
