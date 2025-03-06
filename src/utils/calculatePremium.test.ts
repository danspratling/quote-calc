import { expect, test } from 'vitest'
import { calculateCoverageFactor, calculateTermFactor, calculateAge, calculatePremium } from './calculatePremium.js'

test('calculates minimum coverage factor', () => {
  expect(calculateCoverageFactor(50000)).toBe(1)
})

test('calculates maximum coverage factor', () => {
  expect(calculateCoverageFactor(500000)).toBe(10)
})

test('calculates minimum term factor', () => {
  expect(calculateTermFactor(5)).toBe(1)
})

test('calculates maximum term factor', () => {
  expect(calculateTermFactor(20)).toBe(1.3)
})

test('calculates age for 18 year old', () => {
  // This will fail as the current year changes
  expect(calculateAge({ year: 2007, month: 'January', day: 1 })).toBe(18)
})

test('calculates age for 60 year old', () => {
  // This will fail as the current year changes
  expect(calculateAge({ year: 1965, month: 'January', day: 1 })).toBe(60)
})

test('calculates the minimum premium', () => {
  // £60 base plus £1 for £50,000 coverage
  expect(calculatePremium({ age: 18, coverage: 50000, smoker: false, term: 5 })).toBe(61)
})

test('calculates the minimum premium, with smoker', () => {
  // £61 * 1.2 for smoker
  expect(calculatePremium({ age: 18, coverage: 50000, smoker: true, term: 5 })).toBe(73.2)
})

test('calculates the minimum premium, with maximum term', () => {
  // £61 * 1.3 for max term
  expect(calculatePremium({ age: 18, coverage: 50000, smoker: false, term: 20 })).toBe(79.3)
})

test('calculates the minimum premium, with maximum coverage', () => {
  // £60 + 10 for max coverage
  expect(calculatePremium({ age: 18, coverage: 500000, smoker: false, term: 5 })).toBe(70)
})

test('calculates the maximum premium', () => {
  // £(60 + (82*0.5) + 10 )*1.2*1.3
  expect(calculatePremium({ age: 100, coverage: 500000, smoker: true, term: 20 })).toBe(173.16)
})
