import React from 'react'
import DashboardStatsGrid from '../component/DashboardStatsGrid'
import NewJobOffersChart from '../component/NewJobOffersChart'
import RecentUsers from '../component/RecentUsers'
import UsersPieChart from '../component/UsersPieChart'
import './Admin.css'

export default function Dashboard() {
	return (
		<div className="flex flex-col gap-4">
			<DashboardStatsGrid />
			<div className="flex flex-row gap-4 w-full">
				<NewJobOffersChart />
				<UsersPieChart />
			</div>
			<div className="flex flex-row gap-4 w-full">
				<RecentUsers />
				
			</div>
		</div>
	)
}
