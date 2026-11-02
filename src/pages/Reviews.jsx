import React, { useState } from "react";
import { PageHero, InfoCards, EnquiryBanner, wa } from "./shared.jsx";
import { MessageCircle, Star } from "lucide-react";

export default function Reviews() {
  const [name, setName] = useState("");
  const [experience, setExperience] = useState("Day visit");
  const [rating, setRating] = useState("5");
  const [feedback, setFeedback] = useState("");
  const submit = (event) => {
    event.preventDefault();
    const message = `Hi The Bahamas! I would like to share feedback. Name: ${name || "Not provided"}. Experience: ${experience}. Rating: ${rating}/5. Feedback: ${feedback}`;
    window.open(wa(message), "_blank", "noopener,noreferrer");
  };
  return <>
    <PageHero eyebrow="YOUR EXPERIENCE MATTERS" title="Every visit has" em="a story." description="We welcome honest feedback from guests. Tell the resort team what you enjoyed and where the experience could be even better." />
    <section className="section-pad page-content review-page-intro">
      <div className="page-intro"><div className="eyebrow dark">GUEST FEEDBACK</div><h2>Your words help us <em>grow.</em></h2><p>We are not displaying unverified testimonials or ratings. This page gives visitors a direct way to share feedback with the resort team. Public guest reviews can be added here once they have been collected and approved for publication.</p></div>
      <form className="booking-form review-form" onSubmit={submit}>
        <div className="form-title">SHARE YOUR EXPERIENCE</div>
        <label>Your name (optional)<input value={name} onChange={e=>setName(e.target.value)} placeholder="Enter your name" /></label>
        <div className="form-row"><label>What did you visit for?<select value={experience} onChange={e=>setExperience(e.target.value)}><option>Day visit</option><option>Overnight stay</option><option>Boat cruise</option><option>Event or group visit</option></select></label><label>Your rating<select value={rating} onChange={e=>setRating(e.target.value)}>{[5,4,3,2,1].map(n=><option key={n} value={n}>{n} out of 5</option>)}</select></label></div>
        <label>Your feedback<textarea required rows="5" value={feedback} onChange={e=>setFeedback(e.target.value)} placeholder="Tell us about your experience..." /></label>
        <button className="btn btn-gold form-submit" type="submit">Send feedback on WhatsApp <MessageCircle size={17}/></button>
        <small className="fine-print">This opens WhatsApp with your feedback. It does not automatically publish a public review.</small>
      </form>
    </section>
    <InfoCards eyebrow="WHAT FEEDBACK HELPS WITH" title="Help future guests plan." items={[{title:"Share what you enjoyed",text:"Tell us what stood out during your visit, from the setting to the experience you booked."},{title:"Offer practical suggestions",text:"Let the team know if there is something that could make arrival, booking or your experience clearer."},{title:"Help us keep information accurate",text:"If you notice outdated information on the website, tell the resort so it can be checked and updated."}]}/>
    <EnquiryBanner title="Haven't visited yet?" text="Contact the resort to ask questions and plan your first experience." message="Hi The Bahamas! I am planning my first visit and would like some information." />
  </>;
}
