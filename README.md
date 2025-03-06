A calculator that works out the insurance premium for customers

## Getting started

This application is built using Vite and React. To get started with a local environment, clone the repository and run the following commands:

You can also [view the deployed version](https://quote-calc-e8ogtvvel-skyward.vercel.app/)

### Development

```bash
npm install
npm run dev
```

You should see a SPA load with the calculator visible. From there, enter your details and press 'Get a quote' to see your results.

### Testing

```bash
npm run test
```

### Visual Composition

```bash
npm run storybook
```

## Logic

The insurance premium is calculated using the following formula:

(base _ 12 + (age - 18) _ ageFactor + coverageFactor) _ smokerFactor _ termFactor

Calculations can be found in `./src/utils/calculatePremium.ts`
Tests can be found in `./src/utils/calculatePremium.test.ts`
