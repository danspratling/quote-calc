import { useState } from 'react'
import { Button } from './components/Button'
import { Checkbox } from './components/Checkbox'
import { Slider } from './components/Slider'
import { Select } from './components/Select'
import './App.css'

function App() {
  return (
    <main>
      <form>
        <div>
          <label className='mb-2 block text-base font-semibold text-gray-600 dark:text-gray-400'>Coverage</label>
          <Slider id='coverage' min='50000' max='500000' step='50000' />
        </div>

        <div>
          <label className='mb-2 block text-base font-semibold text-gray-600 dark:text-gray-400'>Term</label>
          <Slider id='term' min='5' max='20' step='5' />
        </div>

        <div>
          {/* We work out the users age from their date of birth, as asking them to input an age number is hard to accurately  */}
          <label className='mb-2 block text-base font-semibold text-gray-600 dark:text-gray-400'>Date of Birth</label>

          <div className='relative mb-5 flex'>
            {/* Default 1 to 31, if september, april, june, november, 1-30, if february 1-29 */}
            <Select
              id='day'
              label='Day'
              options={Array.from({ length: 31 }, (_, i) => i + 1).map(value => value.toString())}
            />
            <Select
              id='month'
              label='Month'
              options={[
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December',
              ]}
            />
            {/* FROM current year - 18 TO current year - 100 */}
            <Select
              id='year'
              label='Year'
              options={Array.from({ length: 100 - 18 }, (_, i) => new Date().getFullYear() - i - 18).map(value =>
                value.toString()
              )}
            />
          </div>

          <div>
            <label className='mb-2 block text-base font-semibold text-gray-600 dark:text-gray-400'>
              Are you a smoker?
            </label>
            <Checkbox id='smoker' />
          </div>

          {/* {(error) && (
            <p className={cn('-mt-3 mb-2 text-sm text-gray-600 dark:text-gray-200', error && 'text-red-500')}>
              {error}
            </p>
          )} */}
        </div>
      </form>
    </main>
  )
}

export default App
