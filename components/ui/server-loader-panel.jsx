import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'
import React from 'react'

export default function ServerLoaderPanel ({ message = 'Loading...' }) {
  return (
    <div className='flex flex-col items-center justify-center py-10 animate-pulse text-black dark:text-muted-foreground min-h-[80vh] gap-4'>
      <Spin indicator={<LoadingOutlined />} spinning />
      <p className='text-sm'>{message}</p>
    </div>
  )
}
