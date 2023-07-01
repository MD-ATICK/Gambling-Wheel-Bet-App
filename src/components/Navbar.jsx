import React from 'react'

function Navbar(props) {

  const { taka  } = props

  return (
    <div className='h-[60px] w-full border-b-2 border-[#002e2e] flex justify-between items-center px-2 lg:px-32 bg-[#002e2e] text-white'>
      <div className='flex w-full min-w-[120px]  justify-start  items-center gap-x-1 lg:gap-x-3'>
        <div className='h-11 w-11 shadow-sm shadow-white overflow-hidden rounded-full'>
          <img className='h-full w-full rounded-full scale-125  object-cover' src="https://img.freepik.com/premium-vector/roulette-wheel-3d-realistic-casino-spin-gambling-equipment-spin-circle-with-red-black-cells-determines-winner-transparent-background-betting-risk-games-vector-lucky-chance_176516-2797.jpg" alt="" />
        </div>
        <p className=' font-sans font-[600] text-[18px] tracking-wider'>1X BET</p>
        {/* <h1 className='font-bold text-[16px] lg:text-2xl tracking-wider font-sans text-gray-100 hover:text-white'>Gambling Hub</h1> */}
      </div>
      <div className='w-full flex lg:justify-center '>

      <div className='h-[35px] shadow-sm shadow-gray-600  w-[170px] lg:w-[220px] flex items-center rounded-lg overflow-hidden'>
        <input value={`${taka.toFixed(2)}$`} type="text" className='bg-[#002a2b] text-white outline-none px-4 font-sans font-[600] tracking-wider  w-full h-full' placeholder='Amount' readOnly />
        <button className='bg-[#48a500] h-full hidden lg:block font-sans tracking-wider font-[600] text-[14px] px-2'>Withdraw</button>
        <button className='bg-[#48a500] h-full block lg:hidden font-sans tracking-wider font-[600] text-[14px] px-3'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
</svg>
</button>
      </div>
      </div>
      <div className='flex justify-end  w-full  gap-x-2 items-center'>
        <img className='h-9 w-9 object-cover rounded-full shadow-lg' src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" />
        <p title='Md Atick' className=' hidden lg:block text-[16px] font-sans tracking-wider font-[600]'>Hi, Md Atick</p>
      </div>
      <button></button>
    </div>
  )
}

export default Navbar