import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineUsers,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog,
	HiOfficeBuilding
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/dashboard',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'offers',
		label: 'Offers',
		path: 'offers',
		icon: <HiOutlineCube />
	},
	{
		key: 'companies',
		label: 'Companies',
		path: 'companies',
		icon: <HiOfficeBuilding />
	},
	{
		key: 'users',
		label: 'Users',
		path: 'users',
		icon: <HiOutlineUsers />
	},
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle />
	}
]
