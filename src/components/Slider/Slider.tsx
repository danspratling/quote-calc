import { cn } from '../../utils'

type SliderProps = {
  min: number
  max: number
  step?: number
  hideListMiddleLabels?: boolean
} & React.InputHTMLAttributes<HTMLInputElement>

export const Slider = ({ id, min, max, step = 1, hideListMiddleLabels, className, ...props }: SliderProps) => {
  return (
    <>
      <input
        id={id}
        type='range'
        min={min}
        max={max}
        step={step}
        className={cn(
          'h-2.5 w-full',
          // Background
          '[&::-webkit-slider-runnable-track]:bg-gray-200 [&::-webkit-slider-runnable-track]:h-2 [&::-webkit-slider-runnable-track]:rounded',
          // Progress bar
          '[&::-webkit-slider-thumb]:shadow-sm [&::-webkit-slider-thumb]:-mt-1 [&::-webkit-slider-thumb]:bg-indigo-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:duration-500',
          className
        )}
        {...props}
      />
      {props.list && (
        <datalist
          id={props.list}
          className={cn(
            'flex justify-between [&>option]:text-sm [&>option]:text-gray-500',
            !hideListMiddleLabels && '[&>option]:w-4'
          )}
        >
          {hideListMiddleLabels ? (
            <>
              <option value={min} label={min.toString()}></option>
              <option value={max} label={max.toString()}></option>
            </>
          ) : (
            <>
              {[...Array((max - min) / step + 1)].map((_, i) => (
                <option key={i * step} value={i * step} label={(i * step + step).toString()}></option>
              ))}
            </>
          )}
        </datalist>
      )}
    </>
  )
}
