import PrimaryLayout from '@/components/layout/primaryLayout'
import Empty from '@/components/ui/empty'
import React from 'react'

const NotFound = () => {
  return (
    <PrimaryLayout>
      <div className="flex flex-col items-center justify-center bg-white-smoke w-full">
        <Empty
          img="images/empty.svg"
          title="No dashboard available"
          description="Please create a dashboard to get started"
          buttonText="Add New Dashboard"
          icon="images/pluss.svg"
        />
      </div>
    </PrimaryLayout>
  )
}

export default NotFound
