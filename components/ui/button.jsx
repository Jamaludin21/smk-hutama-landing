import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'

import { cn } from '@/lib//utils'
import { Loader2Icon } from 'lucide-react'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'bg-blue-500 text-white shadow-md hover:bg-blue-600 hover:shadow-lg active:scale-[0.97]',
        destructive:
          'bg-red-500 text-white shadow-sm hover:bg-red-600 hover:shadow-md active:scale-[0.97]',
        outline:
          'border border-input bg-background hover:bg-gray-100 hover:text-accent-foreground hover:shadow-sm active:scale-[0.97]',
        secondary:
          'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 hover:shadow-md active:scale-[0.97]',
        ghost:
          'hover:bg-gray-100 hover:text-black transition-colors active:scale-[0.97]',
        link: 'text-primary underline-offset-4 hover:underline hover:text-blue-600 active:scale-[0.97]'
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

function ButtonLoading () {
  return (
    <Button disabled>
      <Loader2Icon className='animate-spin' />
      Please wait
    </Button>
  )
}

export { Button, buttonVariants, ButtonLoading }
