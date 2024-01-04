import { render, fireEvent } from "@testing-library/react-native"

import Form from "."

const showModalMock = jest.fn()
const setBmiResultMock = jest.fn()

describe("<Form />", () => {
  describe("height AND weight inputs NOT filled in", () => {
    it("should render a field required message for height and weight and an alert message to setBmiResult", async () => {
      const { findByRole, getAllByText } = render(<Form showModal={showModalMock} setBmiResult={setBmiResultMock} />)

      fireEvent.press(await findByRole(/button/i))

      expect(getAllByText(/required/i)).toHaveLength(2)
      expect(showModalMock).toHaveBeenCalled()
      expect(setBmiResultMock).toHaveBeenCalledWith(null, "Fill in height and weight!")
    })
  })

  describe("filled in ONLY the height OR weight input", () => {
    it("should render a field required message for weight and an alert message to setBmiResult", async () => {
      const { findByPlaceholderText, getByRole, getByText } = render(<Form showModal={showModalMock} setBmiResult={setBmiResultMock} />)

      fireEvent.changeText(await findByPlaceholderText(/175/i), "175")
      fireEvent.press(getByRole(/button/i))

      expect(getByText(/required/i)).toBeOnTheScreen()
      expect(showModalMock).toHaveBeenCalled()
      expect(setBmiResultMock).toHaveBeenCalledWith(null, "Fill in height and weight!")
    })

    it("should render a field required message for height and an alert message to setBmiResult", async () => {
      const { findByPlaceholderText, getByRole, getByText } = render(<Form showModal={showModalMock} setBmiResult={setBmiResultMock} />)

      fireEvent.changeText(await findByPlaceholderText(/80.5/i), "80.5")
      fireEvent.press(getByRole(/button/i))

      expect(getByText(/required/i)).toBeOnTheScreen()
      expect(showModalMock).toHaveBeenCalled()
      expect(setBmiResultMock).toHaveBeenCalledWith(null, "Fill in height and weight!")
    })
  })

  describe("height AND weight inputs filled in", () => {
    it("should call setBmiResult passing 17.90 and Underweight as parameters when height 155 and weight 43 are filled", async () => {
      const { findByPlaceholderText, getByRole } = render(<Form showModal={showModalMock} setBmiResult={setBmiResultMock} />)

      fireEvent.changeText(await findByPlaceholderText(/175/i), "155")
      fireEvent.changeText(await findByPlaceholderText(/80.5/i), "43")
      fireEvent.press(getByRole(/button/i))

      expect(showModalMock).toHaveBeenCalled()
      expect(setBmiResultMock).toHaveBeenCalledWith("17.90", "Underweight")
    })

    it("should call setBmiResult passing 23.44 and Normal weight as parameters when height 160 and weight 60 are filled", async () => {
      const { findByPlaceholderText, getByRole } = render(<Form showModal={showModalMock} setBmiResult={setBmiResultMock} />)

      fireEvent.changeText(await findByPlaceholderText(/175/i), "160")
      fireEvent.changeText(await findByPlaceholderText(/80.5/i), "60")
      fireEvent.press(getByRole(/button/i))

      expect(showModalMock).toHaveBeenCalled()
      expect(setBmiResultMock).toHaveBeenCalledWith("23.44", "Normal weight")
    })

    it("should call setBmiResult passing 26.12 and Overweight as parameters when height 175 and weight 80 are filled", async () => {
      const { findByPlaceholderText, getByRole } = render(<Form showModal={showModalMock} setBmiResult={setBmiResultMock} />)

      fireEvent.changeText(await findByPlaceholderText(/175/i), "175")
      fireEvent.changeText(await findByPlaceholderText(/80.5/i), "80")
      fireEvent.press(getByRole(/button/i))

      expect(showModalMock).toHaveBeenCalled()
      expect(setBmiResultMock).toHaveBeenCalledWith("26.12", "Overweight")
    })

    it("should call setBmiResult passing 30.86 and Obesity as parameters when height 180 and weight 100 are filled", async () => {
      const { findByPlaceholderText, getByRole } = render(<Form showModal={showModalMock} setBmiResult={setBmiResultMock} />)

      fireEvent.changeText(await findByPlaceholderText(/175/i), "180")
      fireEvent.changeText(await findByPlaceholderText(/80.5/i), "100")
      fireEvent.press(getByRole(/button/i))

      expect(showModalMock).toHaveBeenCalled()
      expect(setBmiResultMock).toHaveBeenCalledWith("30.86", "Obesity")
    })

    it("should call setBmiResult passing NaN and Error when calculating BMI. as parameters when height , and weight , are filled", async () => {
      const { findByPlaceholderText, getByRole } = render(<Form showModal={showModalMock} setBmiResult={setBmiResultMock} />)

      fireEvent.changeText(await findByPlaceholderText(/175/i), ",")
      fireEvent.changeText(await findByPlaceholderText(/80.5/i), ",")
      fireEvent.press(getByRole(/button/i))

      expect(showModalMock).toHaveBeenCalled()
      expect(setBmiResultMock).toHaveBeenCalledWith("NaN", "Error when calculating BMI.")
    })
  })
})
