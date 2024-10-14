import React from 'react'
import LoginLeftSec from '@/components/loginLeftSec'
import LoginRightSec from '@/components/loginRightSec'

// Form Login buttons
const formLogIn = [
  { text: 'Login', type: 'button', variant: 'primary', id: 'login', className: 'w-full py-4 px-12 h-[56px] hover hover-primary' },
];

const LoginSuccess = () => {
  return (
    <section className='loginSuccess'>
      <div className="mx-auto lg:mx-0">
        <div className="flex xl:flex-row md:flex-row flex-col items-center gap-6 md:gap-0 px-5 h-screen">
          
          <LoginLeftSec
            title='Alium'
            heading='Start your journey with us..'
            discription='Lorem ipsum dolor sit amet consectetur. Neque sit at adipiscing massa et sem tempus. At non'
            image='../images/loginimg.svg'
          />

         
          <LoginRightSec
            heading='Done!'
            discription='If the information entered is associated with Alium account we have sent you an email with password reset instructions.'
            formButtons={formLogIn}  
            showCheckbox={false}  
            showDevide={false}    
          />
        </div>
      </div>
    </section>
  )
}

export default LoginSuccess