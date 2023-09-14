import React from 'react'
import ReactDOM from 'react-dom/client'
// import { App } from './App'
import './index.css'
import './app.css'
import { TwitterFollowCard } from './TwitterFollowCard'



/* ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
) */

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
  <TwitterFollowCard userName="kikobeats" name="Pablito Clavel"/>
  <TwitterFollowCard userName="telegram/drsdavidsoft" name="Clavelito Pablov"/>
  </>
)