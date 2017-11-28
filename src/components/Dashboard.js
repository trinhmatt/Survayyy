import React from 'react';
import SurveyList from './SurveyList'

const Dashboard = () => (
  <div>
    <h1>Dashboard</h1>
    <SurveyList onPage={'dashboard'}/>
  </div>
)

export default Dashboard;
