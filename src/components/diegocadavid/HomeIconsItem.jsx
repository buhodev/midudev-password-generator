import React from 'react'

const HomeIconsItem = ({ path = '', name = '', handleOpenWindow}) => {
  return (
	<div className='flex flex-col p-2 gap-2 items-center group hover:bg-slate-200/20 hover:cursor-pointer rounded-md' onClick={handleOpenWindow}>
		<div className="w-14 h-14 rounded-md overflow-hidden">
			<img className='h-full w-full object-contain' src={path} alt="Icon home" />
		</div>
		<p className='text-slate-200'> {name} </p>
	</div>
  )
}

export default HomeIconsItem