import { cn } from '../../utils'

export const Slider = ({ id, min, max, className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <>
      <input
        id={id}
        type='range'
        min={min}
        max={max}
        className={cn(
          'h-2.5 w-full',
          // Background
          '[&::-webkit-slider-runnable-track]:bg-gray-100 [&::-webkit-slider-runnable-track]:h-2 [&::-webkit-slider-runnable-track]:rounded-full dark:[&::-webkit-slider-runnable-track]:bg-gray-700',
          // Progress bar
          '[&::-webkit-slider-thumb]:shadow-sm [&::-webkit-slider-thumb]:-mt-1 [&::-webkit-slider-thumb]:bg-indigo-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:duration-500',
          className
        )}
        list={`${id}-markers`}
        {...props}
      />
      <datalist id={`${id}-markers`} className='flex justify-between [&>option]:w-4'>
        <option value='5' label='5'></option>
        <option value='10' label='10'></option>
        <option value='15' label='15'></option>
        <option value='20' label='20'></option>
      </datalist>
    </>
  )
}
