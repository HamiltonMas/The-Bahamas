import React, { useMemo, useState } from "react";
import { PageHero, V, I, EnquiryBanner } from "./shared.jsx";
const items=[
 {src:V.overview,video:true,label:"Resort overview",category:"Resort"},
 {src:V.pool,video:true,label:"Pool and dam views",category:"Pool & outdoors"},
 {src:V.boat,video:true,label:"Boat cruise",category:"Boat cruises"},
 {src:I.bedroom,label:"Bedroom",category:"Accommodation"},
 {src:V.activities,video:true,label:"Resort activities",category:"Activities"},
 {src:I.bedroom2,label:"Accommodation",category:"Accommodation"},
 {src:V.room2,video:true,label:"Room video tour",category:"Accommodation"},
 {src:I.bedroom4,label:"Bedroom details",category:"Accommodation"}
];
const filters=["All","Resort","Pool & outdoors","Activities","Accommodation","Boat cruises"];
export default function Gallery(){const [active,setActive]=useState(null),[filter,setFilter]=useState("All");const visible=useMemo(()=>filter==="All"?items:items.filter(x=>x.category===filter),[filter]);return <><PageHero eyebrow="LITTLE MOMENTS, BIG MEMORIES" title="A glimpse of" em="paradise." description="Explore real photographs and videos from The Bahamas resort."/><section className="section-pad page-content"><div className="gallery-filter" role="group" aria-label="Filter gallery">{filters.map(f=><button key={f} className={filter===f?"active":""} onClick={()=>setFilter(f)}>{f}</button>)}</div><div className="gallery-grid">{visible.map((x,i)=><button className="gallery-tile" key={x.src} onClick={()=>setActive(x)}>{x.video?<video muted autoPlay loop playsInline><source src={x.src}/></video>:<img loading="lazy" src={x.src} alt={x.label}/>}<span>{x.label}<small>{x.category}</small></span></button>)}</div></section>{active&&<div className="lightbox" onClick={()=>setActive(null)}><button className="lightbox-close" onClick={()=>setActive(null)}>×</button>{active.video?<video controls autoPlay playsInline src={active.src} onClick={e=>e.stopPropagation()}/>:<img src={active.src} alt={active.label}/>}</div>}<section className="section-pad gallery-note"><div className="page-intro"><div className="eyebrow dark">SEE IT FOR YOURSELF</div><h2>Real glimpses of <em>The Bahamas.</em></h2><p>Browse the available resort photos and videos to get a feel for the setting, accommodation and experiences. Images are illustrative of the resort; confirm current facilities and arrangements directly before travelling.</p></div></section><EnquiryBanner message="Hi The Bahamas! I viewed your gallery and would like more information about visiting the resort."/></>}
