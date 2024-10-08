# Currency Converter

A simple web-based currency converter that allows users to convert between different currencies using live exchange rates. The app features an intuitive UI with dropdowns for selecting the "From" and "To" currencies and input fields for entering the amount to be converted.

## Features

- Convert between multiple currencies.
- Live exchange rates fetched using a currency API.
- Easy-to-use interface with dropdowns and input fields.
- Swap functionality to switch between "From" and "To" currencies.


## Installation On Local Server

To run this project locally, follow these steps:

1. Clone the repository:
2. Navigate to the project directory: cd currencyconvertor
3. Install the dependencies: npm install
4. Run the project: npm run dev
5. The application will start on http://localhost:3000


## Usage

- Enter the amount you want to convert in the "From" field.
- Select the currency you want to convert from using the dropdown.
- Select the target currency in the "To" field.
- Click the "Convert" button to see the converted amount.
- Use the "Swap" button to quickly switch between the "From" and "To" currencies.



API Information
This app uses the Currency API to fetch live exchange rates. You don't need to set up any API keys as the rates are fetched directly from the API without authentication.

If you want to change the API, you can modify the useCurrencyInfo hook in hooks/useCurrencyInfo.js.