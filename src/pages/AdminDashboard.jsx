import React, { useMemo, useState } from "react";
import { CalendarDays, MessageCircle, Users, ClipboardList, ExternalLink, RefreshCw } from "lucide-react";
import { readEnquiries } from "./Reservations.jsx";

export default function AdminDashboard(){
  const [refresh,setRefresh]=useState(0);
  const enquiries=useMemo(()=>readEnquiries(),[refresh]);
  const stats=[{label:"Saved enquiries",value:enquiries.length,icon:ClipboardList},{label:"Overnight requests",value:enquiries.filter(x=>x.kind==="Overnight accommodation").length,icon:CalendarDays},{label:"Day & activity requests",value:enquiries.filter(x=>x.kind!=="Overnight accommodation").length,icon:Users}];
  return <section className="admin-page section-pad"><div className="admin-heading"><div><span className="eyebrow dark">MANAGEMENT PREVIEW</span><h1>Resort <em>dashboard.</em></h1><p>Local demonstration dashboard for enquiries saved in this browser.</p></div><button className="btn btn-outline-dark" onClick={()=>setRefresh(x=>x+1)}><RefreshCw size={16}/> Refresh</button></div>
    <div className="admin-notice">This is a front-end preview, not a secure live admin system. Records are stored only in this browser. Connect Supabase and add authenticated staff accounts before using it for real guest data.</div>
    <div className="admin-stat-grid">{stats.map(s=><article className="admin-stat" key={s.label}><s.icon/><span>{s.label}</span><strong>{s.value}</strong></article>)}</div>
    <div className="admin-table-wrap"><div className="admin-table-title"><h2>Recent enquiries</h2><span>{enquiries.length} on this device</span></div>{enquiries.length===0?<div className="admin-empty"><MessageCircle size={28}/><h3>No enquiries saved yet</h3><p>Guest enquiries submitted on this browser will appear here.</p><a href="/reservations">Open enquiry form ↗</a></div>:<table className="admin-table"><thead><tr><th>Reference</th><th>Guest</th><th>Request</th><th>Dates</th><th>Status</th></tr></thead><tbody>{enquiries.map(x=><tr key={x.ref}><td>{x.ref}</td><td>{x.name}<small>{x.phone}</small></td><td>{x.kind}<small>{x.room}</small></td><td>{x.start||"Flexible"}{x.end?` – ${x.end}`:""}</td><td><span className="status-pill">Awaiting resort response</span></td></tr>)}</tbody></table>}</div>
    <div className="admin-next"><h2>Next: secure resort management</h2><p>Supabase authentication, shared booking records, room inventory, image uploads, offer publishing, email notifications and role-based staff access belong in the connected production dashboard.</p><a href="https://supabase.com/" target="_blank" rel="noreferrer">Supabase documentation <ExternalLink size={14}/></a></div>
  </section>;
}
