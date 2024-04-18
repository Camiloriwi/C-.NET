

# TypeScript Examples Project

This project contains examples of how to use TypeScript to represent products, bank accounts, and verify if a string is a palindrome.


## Table of Contents
1. Interface to Represent a Product
2. Class to Represent a Bank Account
3. Function to Check if a String is a Palindrome
4. TypeScript and Node.js Configuration
5. Instructions to Run the Project


## Folder Structure

```plaintext
project/
├── src/
│   ├── index.ts
│   ├── product.ts
│   ├── bankAccount.ts
│   ├── palindrome.ts
├── package.json
├── tsconfig.json
└── README.md
```

- `src/`: Contains the main TypeScript files.
    - `index.ts`: Main script that runs the examples.
    - `product.ts`: Contains the `Product` interface and `ProductImplementado` class.
    - `bankAccount.ts`: Contains the `CuentaBancaria` class.
    - `palindrome.ts`: Contains the `esPalindromo` function.
- `package.json`: Contains project dependencies and scripts.
- `tsconfig.json`: Configuration file for TypeScript.

## Requirements

- Node.js
- npm

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Camiloriwi/Taller-typescript.git
    ```

2. Install dependencies:

    ```bash
    cd Taller-typescript
    npm install
    ```

## Execution

1. Build the TypeScript files:

    ```bash
    npm run build
    ```

2. Start the project:

    ```bash
    npm start
    ```

The project will start and run the examples.

## Scripts

- **`start`**: Start the application using `nodemon` to monitor changes.
- **`build`**: Compile the TypeScript code to JavaScript.
- **`dev`**: Compile the `index.js` file.

## Examples

- **Product**: An example of how to create a `Product` object and display its properties.
- **Bank Account**: An example of how to create a bank account, deposit funds, and withdraw funds.
- **Palindrome**: An example of how to check if a string is a palindrome.

## Contribution

If you want to contribute, please open an issue or send a pull request.

## License

This project is under the MIT License. See the `LICENSE` file for more details.

---