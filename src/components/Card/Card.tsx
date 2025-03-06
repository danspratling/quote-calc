import { cn } from '../../utils'

export interface CardProps {
  preHeading?: string
  title: string
  body?: string
  className?: string
  size?: 'md' | 'lg'
}

export function Card({ preHeading, title, body, size = 'md', className }: CardProps) {
  return (
    <div className={cn('flex flex-col justify-center bg-gray-100 p-4', className)}>
      {preHeading && <p className={cn('text-sm text-gray-500')}>{preHeading}</p>}
      <p
        className={cn('m-0 text-gray-800', {
          'text-4xl font-bold my-1': size === 'lg',
        })}
      >
        {title}
      </p>
      {body && <p className='text-gray-700'>{body}</p>}
    </div>
  )
}
