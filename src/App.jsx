import { useState } from 'react'
import './App.css'
import Card from './Card.jsx'

function App() {
  let data = [
    {
      type:"FREE",
      pack:"0",
      user:"Single User",
      isUser:true,
      storage:"5GB Storage",
      isStorage:true,
      project:"Unlimited Public Projects",
      isProject:true,
      community:"Community Access",
      isCommunity:true,
      project_Private:"Unlimited Private Projects",
      isPrivate:false,
      phone:"Dedicated Phone Support",
      isPhone:false,
      subdomain:"Free Subdomain",
      isSubdomain:false,
      report:"Monthly Status Reports",
      isReport:false
    },
    {
      type:"PLUS",
      pack:"9",
      user:"5 Users",
      isUser:true,
      storage:"50GB Storage",
      isStorage:true,
      project:"Unlimited Public Projects",
      isProject:true,
      community:"Community Access",
      isCommunity:true,
      project_Private:"Unlimited Private Projects",
      isPrivate:true,
      phone:"Dedicated Phone Support",
      isPhone:true,
      subdomain:"Free Subdomain",
      isSubdomain:true,
      report:"Monthly Status Reports",
      isReport:false
    },
    {
      type:"PRO",
      pack:"49",
      user:"Unlimited Users",
      isUser:true,
      storage:"150GB Storage",
      isStorage:true,
      project:"Unlimited Public Projects",
      isProject:true,
      community:"Community Access",
      isCommunity:true,
      project_Private:"Unlimited Private Projects",
      isPrivate:true,
      phone:"Dedicated Phone Support",
      isPhone:true,
      subdomain:"Free Subdomain",
      isSubdomain:true,
      report:"Monthly Status Reports",
      isReport:true
    }
  ]
  return <>
    <section className="pricing py-5">
    <div className="container">
      <div className="row">
       {
       data.map((e,i)=>{
        return <Card data={e} key={i}/>
       })
       }
      </div>
    </div>
  </section>
  </>
}

export default App
