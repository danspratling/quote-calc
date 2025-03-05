A calculator that works out the insurance premium for customers

## Getting started

This application is built using Vite and React. To get started with a local environment, clone the repository and run the following commands:

```bash
npm install
npm run dev
```

## Logic

The insurance premium is calculated using the following formula:

(base _ 12) + ((age - 18) _ ageFactor) + (coverageFactor _ coverageValue/50000) + smokerFactor + (1 + (0.1 _ lengthFactor/5 - 0.1))

### Formula Variables

base = 5
age = user selection
ageFactor = 0.5
coverageFactor = 1 \* (coverageValue/50000)
coverageValue = user selection
smokerPremium = 0.2 <!-- if user is a smoker -->
lengthFactor = user selection

### Examples

<!-- Minimum example: Age 18, Coverage 50k, Smoker False, Length 5y -->

(5 _ 12) + ((18 - 18) _ 0.5 ) + (1 _ 50000 /50000) + 0 + (1 + (0.1 _ 5/5 - 0.1))
60 + 0 + 1 + 0 + 1 = 62

<!-- Maximum example: Age 100, Coverage 500k, Smoker True, Length 20y -->

(5 _ 12) + ((100 - 18) _ 0.5 ) + (1 _ 500000 /50000) + 0.2 + (1 + (0.1 _ 20/5 - 0.1))
60 + 41 + 10 + 0.2 + 1.3 = 112.5

<!-- Age 35, Coverage 150k, Smoker True, Length 20y -->

(5 _ 12) + ((35 - 18) _ 0.5 ) + (1 _ 150000 /50000) + 0.2 + (1 + (0.1 _ 20/5 - 0.1))
60 + 8.5 + 3 + 0.2 + 1.3 = 72

<!-- Age 65, Coverage 250k, Smoker False, Length 10y -->

(5 _ 12) + ((65 - 18) _ 0.5 ) + (1 _ 250000 /50000) + 0 + (1 + (0.1 _ 10/5 - 0.1))
60 + 23.5 + 5 + 0 + 1.1 = 89.6
