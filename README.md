# Simplest Working Calculator

This is a simple calculator web application built using React. It allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. The calculator also includes a reset button to clear the input and result.

## Technologies Used

- **React**: The project is built using the React library, which provides a flexible and efficient way to create user interfaces.

## Features

- Addition: Add two numbers together.
- Subtraction: Subtract one number from another.
- Multiplication: Multiply two numbers.
- Division: Divide one number by another (handles division by zero).
- Reset: Clear the input and result.

## How to Use

1. Enter a number in the input field.
2. Click on one of the operation buttons (add, subtract, multiply, or divide) to set the pending operation.
3. Enter a second number.
4. Click the "=" button to calculate the result based on the selected operation.
5. The result will be displayed below the input field.
6. To clear the input and result, click the "reset" button.

## Code Explanation

- The calculator UI is created using JSX within the `App` component.
- `useState` and `useRef` hooks are used to manage the application state and input field reference.
- Arithmetic operations are performed based on the selected operation.
- Input validation ensures that only numeric input is accepted, and division by zero is handled with an alert.
- Event handlers are defined to handle button clicks for operations, calculation, and resetting.
- CSS styles are provided to improve the visual appearance of the calculator.

## Getting Started

To run this project locally, you can follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory using the command line.
3. Run `npm install` to install the necessary dependencies.
4. Run `npm start` to start the development server.
5. Open your web browser and visit `http://localhost:3000` to use the calculator.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to explore and modify the code to customize the calculator to your needs or integrate it into your own web applications. Enjoy calculating!