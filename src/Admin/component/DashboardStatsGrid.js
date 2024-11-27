import React from 'react'
import {  IoPeople } from 'react-icons/io5'
import {  BsFillGrid3X3GapFill } from 'react-icons/bs'
import "tailwindcss/tailwind.css"
import '../pages/Admin.css'

export default function DashboardStatsGrid() {
	return (
		<div className="flex gap-4">
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
					<BsFillGrid3X3GapFill className="text-2xl text-white" />
					
				</div>
				<div className="pl-4">
					<span className="text-sm text-indigo-900 font-normal">Total Offers</span>
					<div className="flex items-center">
					<strong className="text-xl text-teal-600 font-medium">50</strong>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
					<IoPeople className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-indigo-900 font-normal">Daily visitors</span>
					<div className="flex items-center">
					<strong className="text-xl text-teal-600 font-medium">50</strong>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400">
					<BsFillGrid3X3GapFill className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-indigo-900 font-normal">Offers Viewed</span>
					<div className="flex items-center">
					<strong className="text-xl text-teal-600 font-medium">50</strong>
						<span className="text-sm text-red-500 pl-2"></span>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-600">
					<BsFillGrid3X3GapFill className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-indigo-900 font-normal">Offers Applied </span>
					<div className="flex items-center">
					<strong className="text-xl text-teal-600 font-medium">50</strong>
					
					</div>
				</div>
			</BoxWrapper>
		</div>
	)
}

function BoxWrapper({ children }) {
	return <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">{children}</div>
}
