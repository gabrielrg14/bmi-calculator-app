import { render } from "@testing-library/react-native"

import Title from "."

describe("<Title />", () => {
  it("should render the text passed", () => {
    const { getByText } = render(<Title text="Test" />)

    expect(getByText(/test/i)).toHaveTextContent("Test")
    expect(getByText(/test/i)).toBeOnTheScreen()
  })
})
