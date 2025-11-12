'use client'

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'
import { Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

export const buttonVariants = cva(
  [
    'inline-flex items-center justify-center gap-2',
    'whitespace-nowrap rounded-md text-sm font-medium',
    'transition-colors duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
    '[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0'
  ].join(' '),
  {
    variants: {
      variant: {
        default: 'bg-blue-600 text-white shadow-sm hover:bg-blue-700',
        destructive: 'bg-red-500 text-white shadow-sm hover:bg-red-600',
        outline:
          'border border-slate-300 bg-white text-slate-900 hover:bg-slate-50',
        secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-200',
        ghost: 'bg-transparent text-slate-900 hover:bg-slate-100',
        link: 'text-blue-600 underline-offset-4 hover:underline'
      },
      size: {
        default: 'h-9 px-4',
        sm: 'h-8 px-3 text-xs',
        lg: 'h-10 px-6 text-sm',
        icon: 'h-9 w-9'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

const Button = React.forwardRef(function Button (
  {
    className,
    variant,
    size,
    asChild = false,
    isLoading = false,
    children,
    ...props
  },
  ref
) {
  // asChild: HARUS persis satu elemen, tidak boleh ada sibling (termasuk spinner)
  if (asChild) {
    // hindari passing prop yang tidak valid ke <a>/<Link>
    const { disabled, type, ...rest } = props
    return (
      <Slot
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...rest}
      >
        {children}
      </Slot>
    )
  }

  // mode tombol biasa
  return (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size, className }))}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading && <Loader2 className='animate-spin' />}
      {children}
    </button>
  )
})

Button.displayName = 'Button'

export function ButtonLoading ({ label = 'Harap tunggu...' }) {
  return (
    <Button disabled>
      <Loader2 className='animate-spin' />
      {label}
    </Button>
  )
}

export { Button }
