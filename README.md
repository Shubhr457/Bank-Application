# Bank Account Management System

This is a simple web-based application for managing a bank account, allowing users to view account information, make deposits, withdrawals, transfers, and calculate interest.

## Features

- **View Account Information**: Displays the current account balance and transaction history.
- **Deposit**: Add funds to the account.
- **Withdraw**: Remove funds from the account (if sufficient funds are available).
- **Transfer**: Transfer funds to a recipient account (if sufficient funds are available).
- **Calculate Interest**: Add interest to the account balance at a predefined rate.

## Getting Started

### Prerequisites

To run this project, you only need a web browser. The project is built using HTML, CSS, and JavaScript.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/bank-account-management.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd bank-account-management
   ```

3. **Open `index.html` in your web browser**.

## Usage

Upon opening the `index.html` file, you will see the main interface with buttons for different actions. 

### Actions

1. **View Account Information**:
   - Click the "Account Info" button to see the current account balance and transaction history.

2. **Deposit**:
   - Click the "Deposit" button.
   - Enter the amount to deposit and an optional description.
   - Click "Submit" to complete the transaction.

3. **Withdraw**:
   - Click the "Withdraw" button.
   - Enter the amount to withdraw and an optional description.
   - Click "Submit" to complete the transaction. Ensure there are sufficient funds in the account.

4. **Transfer**:
   - Click the "Transfer" button.
   - Enter the amount to transfer, the recipient, and an optional description.
   - Click "Submit" to complete the transaction. Ensure there are sufficient funds in the account.

5. **Calculate Interest**:
   - Click the "Calculate Interest" button.
   - The interest will be added to your account balance at a predefined rate (currently 10%).

### Code Explanation

#### HTML

The HTML file contains the basic structure of the application, including buttons for different actions and a hidden form for submitting transactions.

#### CSS

The CSS file styles the application, ensuring a user-friendly interface. Key elements include hidden form styles and button layouts.

#### JavaScript

The JavaScript code handles all the logic and interactions within the application. Key functions and event listeners include:

- **Event Listeners**:
  - `DOMContentLoaded`: Initializes the application once the DOM is fully loaded.
  - Button click events: Show the form and set the action type (deposit, withdraw, transfer).
  - Form submit event: Process the transaction based on the action type.
  - Calculate interest event: Adds interest to the account balance.

- **Functions**:
  - `displayAccountInfo`: Shows the account balance and transaction history in an alert.
  - `handleFormSubmit`: Processes the deposit, withdrawal, and transfer transactions.
  - `handleInterest`: Calculates and adds interest to the account balance.


## Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature`.
3. Make your changes and commit them: `git commit -m 'Add your feature'`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Open a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more information.

## Acknowledgements

Thank you for using the Bank Account Management System. Contributions and feedback are welcome to improve this project further.

---

Feel free to modify this README file according to your needs and repository details.![Screenshot 2024-06-12 175709](https://github.com/Shubhr457/Bank-Application/assets/136572711/f11eecf5-d725-4c3c-acde-d6324ce00d8d)
![Screenshot 2024-06-12 175639](https://github.com/Shubhr457/Bank-Application/assets/136572711/43f4156e-b324-4a36-8671-b9d19f731005)
![Screenshot 2024-06-12 180553](https://github.com/Shubhr457/Bank-Application/assets/136572711/0fcf35c4-51c7-43b0-921d-ed50bec1fab2)
![Screenshot 2024-06-12 175824](https://github.com/Shubhr457/Bank-Application/assets/136572711/8a5416f0-3af7-4eb9-beae-d8dc09321676)
