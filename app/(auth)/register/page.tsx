import Image from 'next/image'
import React from 'react'


const Register = () => {
  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-3'>
        <div className="w-full">
            <Image alt='' src='/assets/images/hero.png' width={2} height={2} />
        </div>

        {/* form */}
        <div className="w-full">

        </div>
    </div>
  )
}

export default Register