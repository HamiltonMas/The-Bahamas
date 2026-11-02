import React, { useMemo, useState } from "react";
import { MessageCircle, X, Send, Sparkles, ChevronRight } from "lucide-react";
import { wa } from "../pages/shared.jsx";

const topics = [
  { label: "Accommodation", answer: "Explore the accommodation page to view the available room imagery. For room capacity, rates and availability, please ask the resort team to confirm.", path: "/accommodation" },
  { label: "Day visits", answer: "The resort offers day-visit enquiries. The team can confirm current access arrangements, prices, opening times and what is included.", path: "/day-visits" },
  { label: "Boat cruises", answer: "You can enquire about a boat cruise on Nandoni Dam. Cruise times, pricing, capacity and weather arrangements must be confirmed by the resort.", path: "/boat-cruises" },
  { label: "Special occasions", answer: "For birthdays, celebrations and group occasions, share your preferred date, group size and requirements with the resort team.", path: "/occasions" },
  { label: "Location", answer: "The Bahamas is at Nandoni Dam, Thohoyandou, Limpopo, South Africa. Open the location page for map and directions.", path: "/location" },
  { label: "Make an enquiry", answer: "The enquiry form collects your preferences and prepares a WhatsApp message. Your request is not a confirmed booking until the resort confirms it.", path: "/reservations" }
];

export default function ResortAssistant() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [question, setQuestion] = useState("");
  const [customAnswer, setCustomAnswer] = useState("");
  const [lastQuestion, setLastQuestion] = useState("");
  const answer = useMemo(() => topics.find(t => t.label === selected), [selected]);
  const submit = e => {
    e.preventDefault();
    const q = question.trim();
    if (!q) return;
    setLastQuestion(q);
    setCustomAnswer("I can help with general resort information, but I don't want to guess about prices, availability or facilities. Please send this question directly to the resort team.");
    setQuestion("");
  };
  return <>
    <button className="assistant-launch" type="button" onClick={() => setOpen(v => !v)} aria-label={open ? "Close resort assistant" : "Open resort assistant"} aria-expanded={open}>
      {open ? <X size={21}/> : <MessageCircle size={21}/>}<span>{open ? "Close" : "Ask us"}</span>
    </button>
    {open && <section className="assistant-panel" aria-label="The Bahamas visitor assistant">
      <header className="assistant-head"><span className="assistant-avatar"><Sparkles size={18}/></span><div><strong>The Bahamas Assistant</strong><small>Visitor information · Quick help</small></div><button type="button" onClick={() => setOpen(false)} aria-label="Close"><X size={18}/></button></header>
      <div className="assistant-body"><p className="assistant-welcome">Welcome! What would you like to know about your visit?</p>
        <div className="assistant-options">{topics.map(t => <button key={t.label} type="button" onClick={() => {setSelected(t.label);setCustomAnswer("");}}>{t.label}<ChevronRight size={15}/></button>)}</div>
        {answer && <div className="assistant-response"><strong>{answer.label}</strong><p>{answer.answer}</p><a href={answer.path}>Explore this page ↗</a></div>}
        {customAnswer && <div className="assistant-response"><strong>Thanks for your question</strong><p>{customAnswer}</p><a href={wa(`Hi The Bahamas! I have a question: ${lastQuestion || "Please help me with resort information."}`)} target="_blank" rel="noreferrer">Continue on WhatsApp ↗</a></div>}
      </div>
      <form className="assistant-input" onSubmit={submit}><input value={question} onChange={e=>setQuestion(e.target.value)} placeholder="Ask a general question…" aria-label="Ask a question"/><button type="submit" aria-label="Send question"><Send size={17}/></button></form>
      <p className="assistant-disclaimer">Automated guidance only. The resort team confirms prices, availability and booking details.</p>
    </section>}
  </>;
}
