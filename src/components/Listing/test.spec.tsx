import { render } from "@testing-library/react-native"

import Listing from "."

const listMock = [
  { id: 1, bmi: "18.3", message: "Underweight" },
  { id: 2, bmi: "20.5", message: "Normal weight" },
  { id: 3, bmi: "27.2", message: "Overweight" },
  { id: 4, bmi: "31.8", message: "Obesity" }
]

describe("<Listing />", () => {
  describe("the list prop is empty", () => {
    it("should render the empty text", () => {
      const { getByText } = render(<Listing list={[]} />)

      expect(getByText(/calculate to display results here/i)).toBeOnTheScreen()
    })
  });

  describe("the list prop is NOT empty", () => {
    it("should render all the bmi's in the list", () => {
      const { getByText } = render(<Listing list={listMock} />)

      expect(getByText(/18.3/i)).toBeOnTheScreen()
      expect(getByText(/20.5/i)).toBeOnTheScreen()
      expect(getByText(/27.2/i)).toBeOnTheScreen()
      expect(getByText(/31.8/i)).toBeOnTheScreen()
    })

    it("should render all the messages in the list", () => {
      const { getByText } = render(<Listing list={listMock} />)

      expect(getByText(/underweight/i)).toBeOnTheScreen()
      expect(getByText(/normal weight/i)).toBeOnTheScreen()
      expect(getByText(/overweight/i)).toBeOnTheScreen()
      expect(getByText(/obesity/i)).toBeOnTheScreen()
    })
  });
});
