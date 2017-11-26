import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Dashboard from '../components/Dashboard'
import Header from '../components/Header'
import Register from '../components/Register'
import CreateSurvey from '../components/CreateSurvey'
import SurveyPage from '../components/SurveyPage'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path='/' component={Dashboard} exact={true}/>
        <Route path='/register' component={Register} />
        <Route path='/create' component={CreateSurvey} />
        <Route path='/survey/:id' component={SurveyPage} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter;