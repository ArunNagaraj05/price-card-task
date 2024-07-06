import { useState } from 'react'
import './App.css'

function Card({data}){
return <>
{
     <div className="col-lg-4">
     <div className="card mb-5 mb-lg-0">
       <div className="card-body">
         <h5 className="card-title text-muted text-uppercase text-center">{data.type}</h5>
         <h6 className="card-price text-center">${data.pack}<span className="period">/month</span></h6>
         <hr/>
         <ul className="fa-ul">
              <li className={data.isUser?"":"text-muted"}><span class="fa-li"><i className={data.isUser?"fas fa-check":"fas fa-times"}></i></span>{data.type==="FREE"?data.user:<b>{data.user}</b>}</li>
              <li className={data.isStorage?"":"text-muted"}><span class="fa-li"><i className={data.isStorage?"fas fa-check":"fas fa-times"}></i></span>{data.storage}</li>
              <li className={data.isProject?"":"text-muted"}><span class="fa-li"><i className={data.isProject?"fas fa-check":"fas fa-times"}></i></span>{data.project}</li>
              <li className={data.isCommunity?"":"text-muted"}><span class="fa-li"><i className={data.isCommunity?"fas fa-check":"fas fa-times"}></i></span>{data.community}</li>
              <li className={data.isPrivate?"":"text-muted"}><span class="fa-li"><i className={data.isPrivate?"fas fa-check":"fas fa-times"}></i></span>{data.project_Private}</li>
              <li className={data.isPhone?"":"text-muted"}><span class="fa-li"><i className={data.isPhone?"fas fa-check":"fas fa-times"}></i></span>{data.phone}</li>
              <li className={data.isSubdomain?"":"text-muted"}><span class="fa-li"><i className={data.isSubdomain?"fas fa-check":"fas fa-times"}></i></span>{data.type==="PRO"?<><b>Unlimited</b> {data.subdomain}</>:data.subdomain}</li>
              <li className={data.isReport?"":"text-muted"}><span class="fa-li"><i className={data.isReport?"fas fa-check":"fas fa-times"}></i></span>{data.report}</li>

         </ul>
         <div className="d-grid">
           <a href="#" className="btn btn-primary text-uppercase">Button</a>
         </div>
       </div>
     </div>
   </div>
}
</>
}
export default Card