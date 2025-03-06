// Takes the date of birth, converts it into a timestamp, then calculates the age.
export const calculateAge = ({ year, month, day }: { year: number; month: string; day: number }) =>
  new Date(Date.now() - new Date(`${month} ${day}, ${year} 00:00:00`).getTime()).getFullYear() - 1970

export const calculateCoverageFactor = (coverageValue: number) => 1 * (coverageValue / 50000)
export const calculateTermFactor = (termLength: number) => 1 + ((0.1 * termLength) / 5 - 0.1)

export const calculatePremium = ({
  age,
  coverage,
  smoker,
  term,
}: {
  age: number
  coverage: number
  smoker: boolean | undefined
  term: number
}) => {
  const base = 5 // Base monthly premium: £5
  const ageFactor = 0.5 // Add £0.50 for every year of age
  const coverageFactor = calculateCoverageFactor(coverage) // Add £1 for every £50,000 of coverage
  const smokerFactor = smoker ? 1.2 : 1 // Add 20% if the user is a smoker
  const termFactor = calculateTermFactor(term) // Add 10% for every 5 years of term, excluding the first 5 years
  return (base * 12 + (age - 18) * ageFactor + coverageFactor) * smokerFactor * termFactor
}
