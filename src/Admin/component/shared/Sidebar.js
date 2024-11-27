import React from 'react'
import classNames from 'classnames'
import { Link, useLocation } from 'react-router-dom'
import { HiOutlineLogout } from 'react-icons/hi'
import { DASHBOARD_SIDEBAR_LINKS, DASHBOARD_SIDEBAR_BOTTOM_LINKS } from '../../lib/constants'
import logo from '../../lib/image/conduite.png' 
import "tailwindcss/tailwind.css"
import '../../Admin/pages/Admin.css'

const linkClass =
	'flex items-center gap-2 font-medium px-3 py-2 hover:bg-indigo-100 hover:no-underline active:bg-indigo-900 rounded-sm text-base'


export default function Sidebar() {
	return (
		<div className="bg-white w-60 p-3 flex flex-col shadow-lg">
			<div className="flex items-center gap-2 px-1 py-3">
			   <img src={logo} alt="Logo" width={30} />
			   <span className="text-indigo-800 font-bold text-lg">InterLinker</span>
			</div>
			<div className="py-8 flex flex-1 flex-col gap-0.5 ">
				{DASHBOARD_SIDEBAR_LINKS.map((link) => (
					<SidebarLink key={link.key} link={link} />
				))}
			</div>
			<div className="flex flex-col gap-0.5 pt-2 border-t border-indigo-900">
				{DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
					<SidebarLink key={link.key} link={link} />
				))}
				<div className={classNames(linkClass, 'cursor-pointer text-red-500')}>
					<span className="text-xl">
						<HiOutlineLogout />
					</span>
					Logout
				</div>
			</div>
		</div>
	)
}

function SidebarLink({ link }) {
	const { pathname } = useLocation()

	return (
		<Link
			to={link.path}
			className={classNames(pathname === link.path ? 'bg-indigo-800 text-white font-bold ' : 'text-indigo-900  text-lg ', linkClass)}
		>
			<span className="text-white-900 text-lg">{link.icon}</span>
			{link.label}
		</Link>
	)
}
