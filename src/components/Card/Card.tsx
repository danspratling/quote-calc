import { cn } from '../../utils'

export interface CardProps {
  preHeading?: string
  title: string
  body?: string
  className?: string
}

export function Card({ preHeading, title, body, className }: CardProps) {
  return (
    <div className={cn('flex flex-col justify-center bg-gray-100 p-4', className)}>
      {preHeading && <p className='text-xs text-gray-500'>{preHeading}</p>}
      <p className='m-0 text-gray-600'>{title}</p>
      {body && <p className='mt-2 mb-0'>{body}</p>}
    </div>
  )
}
