import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { Button } from './components/Button'
import { Checkbox } from './components/Checkbox'
import { Slider } from './components/Slider'
import { Select } from './components/Select'
import './App.css'
import Card from './components/Card'

type Inputs = {
  coverage: number
  term: number
  day: string
  month: string
  year: string
  smoker?: string
}

function App() {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = data =>
    console.log({
      ...data,
      dateOfBirth: new Date(`${data.month} ${data.day}, ${data.year} 00:00:00`),
      age:
        new Date(Date.now() - new Date(`${data.month} ${data.day}, ${data.year} 00:00:00`).getTime()).getFullYear() -
        1970,
    })

  const coverage = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    maximumFractionDigits: 0,
  }).format(watch('coverage'))
  const term = watch('term')
  // const dateOfBirth = new Date(watch('year'), watch('month'), watch('day'))

  return (
    <main className='flex flex-col items-center justify-center min-h-screen py-2'>
      <form onSubmit={handleSubmit(onSubmit)} className='container mx-auto px-4 space-y-4'>
        <div className='flex gap-8'>
          <div className='flex-1'>
            <label className='mb-2 block text-sm font-semibold text-gray-600' htmlFor='coverage'>
              Coverage
            </label>
            <Slider
              {...register('coverage', { required: 'This is required', min: 50000, max: 500000 })}
              min={50000}
              max={500000}
              step={50000}
              list='coverage'
              hideListMiddleLabels
            />
          </div>
          <Card className='w-40' preHeading='Coverage amount' title={coverage} />
        </div>

        <div className='flex gap-8'>
          <div className='flex-1'>
            <label className='mb-2 block text-sm font-semibold text-gray-600' htmlFor='term'>
              Term
            </label>
            <Slider
              {...register('term', { required: 'This is required', min: 5, max: 20 })}
              min={5}
              max={20}
              step={5}
              list='term'
            />
          </div>
          <Card className='w-40' preHeading='Term length' title={`${term} years`} />
        </div>

        <div>
          {/* We work out the users age from their date of birth, as asking them to input an age number is hard to accurately  */}
          <label className='mb-2 block text-sm font-semibold text-gray-600'>Date of Birth</label>

          <div className='relative mb-5 flex gap-2.5'>
            {/* Default 1 to 31, if september, april, june, november, 1-30, if february 1-29 */}
            <Controller
              control={control}
              name='day'
              render={({ field }) => (
                <Select
                  {...field}
                  placeholder='Day'
                  className='w-16'
                  options={Array.from({ length: 31 }, (_, i) => i + 1).map(value => value.toString())}
                />
              )}
            />
            <Controller
              control={control}
              name='month'
              render={({ field }) => (
                <Select
                  {...field}
                  placeholder='Month'
                  className='w-32'
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
              )}
            />
            <Controller
              control={control}
              name='year'
              render={({ field }) => (
                <Select
                  {...field}
                  placeholder='Year'
                  className='w-20'
                  options={Array.from({ length: 100 - 18 }, (_, i) => new Date().getFullYear() - i - 18).map(value =>
                    value.toString()
                  )}
                />
              )}
            />
          </div>

          <div>
            <label className='mb-2 block text-sm font-semibold text-gray-600' htmlFor='smoker'>
              Are you a smoker?
            </label>
            <input type='checkbox' {...register('smoker')} />
          </div>

          {/* {(error) && (
            <p className={cn('-mt-3 mb-2 text-sm text-gray-600 dark:text-gray-200', error && 'text-red-500')}>
              {error}
            </p>
          )} */}

          <Button type='submit' className='mt-5'>
            Get a quote
          </Button>
        </div>
      </form>
    </main>
  )
}

export default App
