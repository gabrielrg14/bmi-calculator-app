import { render, fireEvent } from "@testing-library/react-native"
import { Share } from "react-native";

import Result from "."

const setVisibleMock = jest.fn()

describe("<Result />", () => {
  it("should call the function when the close button is pressed", async () => {
    const { findByTestId } = render(
      <Result
        visible={true}
        setVisible={setVisibleMock}
        bmi={"27.2"}
        message={"Overweight"}
      />
    )

    fireEvent.press(await findByTestId(/closeButton/i))

    expect(setVisibleMock).toHaveBeenCalled()
  })

  it("should call the function when the share button is pressed", async () => {
    const { findByTestId } = render(
      <Result
        visible={true}
        setVisible={setVisibleMock}
        bmi={"27.2"}
        message={"Overweight"}
      />
    )

    const shareFn = jest.spyOn(Share, "share")

    fireEvent.press(await findByTestId(/shareButton/i))

    expect(shareFn).toHaveBeenCalledWith({ message: "I calculated my BMI today using the bmi-calculator-app, check the result: 27.2 (Overweight)" })
  })

  describe("the bmi prop is null", () => {
    it("should render only the close button", async () => {
      const { findAllByRole, getByText } = render(
        <Result
          visible={true}
          setVisible={setVisibleMock}
          bmi={null}
          message={""}
        />
      )

      expect(await findAllByRole(/button/i)).toHaveLength(1)
      expect(getByText(/close/i)).toBeOnTheScreen()
    })
  })

  describe("the bmi prop is NOT null", () => {
    it("should render share and close buttons", async () => {
      const { findAllByRole, getByText } = render(
        <Result
          visible={true}
          setVisible={setVisibleMock}
          bmi={"27.2"}
          message={"Overweight"}
        />
      )

      expect(await findAllByRole(/button/i)).toHaveLength(2)
      expect(getByText(/share/i)).toBeOnTheScreen()
      expect(getByText(/close/i)).toBeOnTheScreen()
    })
  })

  describe("the message prop is empty", () => {
    it("should render empty text", async () => {
      const { getByText } = render(
        <Result
          visible={true}
          setVisible={setVisibleMock}
          bmi={"27.2"}
          message={""}
        />
      )

      expect(getByText("")).toBeEmptyElement()
    })
  })

  describe("the visible prop is true", () => {
    it("should render the modal visible", async () => {
      const { findByTestId } = render(
        <Result
          visible={true}
          setVisible={setVisibleMock}
          bmi={"27.2"}
          message={"Overweight"}
        />
      )

      expect(await findByTestId(/resultModal/i)).toBeVisible()
    })
  });

  describe("the visible prop is false", () => {
    it("should render the modal NOT visible", async () => {
      const { findByTestId } = render(
        <Result
          visible={false}
          setVisible={setVisibleMock}
          bmi={"27.2"}
          message={"Overweight"}
        />
      )

      expect(await findByTestId(/resultModal/i)).not.toBeVisible()
    })
  });
})
