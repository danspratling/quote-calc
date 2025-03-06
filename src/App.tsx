import { useState } from 'react'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { Button } from './components/Button'
import { Slider } from './components/Slider'
import { Select } from './components/Select'
import { Card } from './components/Card'
import { cn } from './utils'
import { calculateAge, calculatePremium } from './utils/calculatePremium'

type Inputs = {
  coverage: number
  term: number
  day: string
  month: string
  year: string
  smoker?: boolean
}

function App() {
  const [premium, setPremium] = useState<number | null>(null)

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<Inputs>({ defaultValues: { coverage: 300000, term: 10 } })
  const onSubmit: SubmitHandler<Inputs> = data => {
    const age = calculateAge({ year: parseInt(data.year), month: data.month, day: parseInt(data.day) })
    setPremium(calculatePremium({ age, coverage: data.coverage, smoker: data.smoker, term: data.term }))
  }

  const coverage = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    maximumFractionDigits: 0,
  }).format(watch('coverage'))
  const term = watch('term')
  const month = watch('month')

  return (
    <main className='flex flex-col items-center justify-center min-h-screen py-2'>
      <div className='container mx-auto space-y-8 px-4'>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
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
                rules={{ required: true }}
                render={({ field }) => (
                  <Select
                    {...field}
                    placeholder='Day'
                    className='w-16'
                    options={Array.from(
                      {
                        length:
                          month && month === 'february'
                            ? 29
                            : ['september', 'april', 'june', 'november'].includes(month)
                            ? 30
                            : 31,
                      },
                      (_, i) => i + 1
                    ).map(value => value.toString())}
                    error={errors.day}
                  />
                )}
              />
              <Controller
                control={control}
                name='month'
                rules={{ required: true }}
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
                    error={errors.month}
                  />
                )}
              />
              <Controller
                control={control}
                name='year'
                rules={{ required: true }}
                render={({ field }) => (
                  <Select
                    {...field}
                    placeholder='Year'
                    className='w-20'
                    options={Array.from({ length: 100 - 18 }, (_, i) => new Date().getFullYear() - i - 18).map(value =>
                      value.toString()
                    )}
                    error={errors.year}
                  />
                )}
              />
            </div>
            {errors && (errors.day || errors.month || errors.year) && (
              <p className={cn('-mt-3 mb-2 text-sm text-red-500')}>Please select your date of birth</p>
            )}
          </div>

          <div>
            <label className='mb-2 block text-sm font-semibold text-gray-600' htmlFor='smoker'>
              Are you a smoker?
            </label>
            <input type='checkbox' {...register('smoker')} />
          </div>

          <Button type='submit' className='mt-5'>
            {!premium ? 'Get a quote' : 'Update quote'}
          </Button>
        </form>

        {premium && (
          <Card
            size='lg'
            className='w-full'
            preHeading='Your yearly premium'
            title={new Intl.NumberFormat('en-GB', {
              style: 'currency',
              currency: 'GBP',
              maximumFractionDigits: 2,
            }).format(premium)}
            body={`That's as little as ${new Intl.NumberFormat('en-GB', {
              style: 'currency',
              currency: 'GBP',
              maximumFractionDigits: 2,
            }).format(premium / 12)} a month`}
          />
        )}
      </div>
    </main>
  )
}

export default App
