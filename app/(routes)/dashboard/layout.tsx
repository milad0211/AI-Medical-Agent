import React from 'react'
import AppHeader from './_components/AppHeader'

const DashboardLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        <AppHeader />
        <div className='px-10 md:px-20 lg:20-px py-10'>
         {children}
        </div>
     </div>
  )
}

export default DashboardLayout