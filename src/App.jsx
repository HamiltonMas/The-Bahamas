import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight, MapPin, ChevronDown } from "lucide-react";
import Home from "./pages/Home.jsx";
import Experiences from "./pages/Experiences.jsx";
import DayVisits from "./pages/DayVisits.jsx";
import Accommodation from "./pages/Accommodation.jsx";
import Cruises from "./pages/Cruises.jsx";
import Gallery from "./pages/Gallery.jsx";
import Location from "./pages/Location.jsx";
import Contact from "./pages/Contact.jsx";
import Offers from "./pages/Offers.jsx";
import Reviews from "./pages/Reviews.jsx";
import VirtualTour from "./pages/VirtualTour.jsx";
import RoomCompare from "./pages/RoomCompare.jsx";
import Occasions from "./pages/Occasions.jsx";
import Reservations from "./pages/Reservations.jsx";
import GuestPortal from "./pages/GuestPortal.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import GiftVouchers from "./pages/GiftVouchers.jsx";
import ResortAssistant from "./components/ResortAssistant.jsx";
import "./styles.css";
import "./styles/assistant-admin.css";

const links = [
  ["Home", "/"], ["Experiences", "/experiences"], ["Day visits", "/day-visits"],
  ["Stay with us", "/accommodation"], ["Boat cruises", "/boat-cruises"],
  ["Gallery", "/gallery"], ["Offers & events", "/offers"], ["Guest reviews", "/reviews"], ["Virtual tour", "/virtual-tour"], ["Compare rooms", "/compare-rooms"], ["Reservations", "/reservations"], ["Guest portal", "/guest-portal"], ["Gift vouchers", "/gift-vouchers"], ["Special occasions", "/occasions"], ["Location", "/location"], ["Contact", "/contact"]
];

const navGroups = [
  { label: "Stay", items: [["Accommodation", "/accommodation"], ["Compare rooms", "/compare-rooms"], ["Reservations", "/reservations"], ["Guest enquiry portal", "/guest-portal"], ["Gift vouchers", "/gift-vouchers"]] },
  { label: "Experiences", items: [["All experiences", "/experiences"], ["Day visits", "/day-visits"], ["Boat cruises", "/boat-cruises"], ["Special occasions", "/occasions"]] },
  { label: "Discover", items: [["Interactive gallery", "/gallery"], ["Virtual resort tour", "/virtual-tour"], ["Offers & events", "/offers"], ["Guest reviews", "/reviews"], ["Location", "/location"]] }
];

function Header() {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => { setOpen(false); setOpenDropdown(null); window.scrollTo(0, 0); }, [location.pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 35);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleDropdown = (label) => setOpenDropdown(current => current === label ? null : label);
  const groupIsActive = (group) => group.items.some(([, path]) => location.pathname === path);

  return <header className={`header ${scrolled ? "scrolled" : ""}`}>
    <NavLink className="brand" to="/"><img src="/assets/images/Logo.JPG" alt="The Bahamas logo"/><span>THE <b>BAHAMAS</b><small>NANDONI DAM · THOHOYANDOU</small></span></NavLink>
    <button className="menu-toggle" onClick={() => { setOpen(!open); setOpenDropdown(null); }} aria-label="Toggle navigation" aria-expanded={open}>{open ? <X/> : <Menu/>}</button>
    <nav className={open ? "nav open" : "nav"} aria-label="Main navigation">
      <NavLink to="/" end className="nav-direct">Home</NavLink>
      {navGroups.map(group => <div className={`nav-dropdown ${groupIsActive(group) ? "group-active" : ""} ${openDropdown === group.label ? "dropdown-open" : ""}`} key={group.label}>
        <button className="nav-dropdown-trigger" type="button" aria-expanded={openDropdown === group.label} onClick={() => toggleDropdown(group.label)}>
          {group.label}<ChevronDown size={14}/>
        </button>
        <div className="nav-dropdown-menu">
          {group.items.map(([label, path]) => <NavLink key={path} to={path} onClick={() => { setOpenDropdown(null); setOpen(false); }}>{label}</NavLink>)}
        </div>
      </div>)}
      <NavLink to="/contact" className="nav-direct">Contact</NavLink>
      <NavLink className="nav-book" to="/contact">Make an enquiry <ArrowUpRight size={16}/></NavLink>
    </nav>
  </header>;
}

function Footer() {
  return <footer className="footer"><div className="footer-main">
    <div className="footer-brand"><img src="/assets/images/Logo.JPG" alt="The Bahamas"/><h3>THE BAHAMAS</h3><p>Escape. Relax. Experience.</p></div>
    <div><span className="footer-label">EXPLORE</span>{links.slice(1).map(([name, path]) => <NavLink key={path} to={path}>{name}</NavLink>)}</div>
    <div><span className="footer-label">GET IN TOUCH</span><a href="tel:0798478238">079 847 8238</a><a href="https://wa.me/27798478238" target="_blank" rel="noreferrer">WhatsApp the resort</a><span className="footer-location"><MapPin size={14}/> Nandoni Dam, Thohoyandou</span></div>
  </div><div className="footer-bottom"><span>© {new Date().getFullYear()} The Bahamas. All rights reserved.</span><span>MADE FOR MOMENTS THAT MATTER.</span><NavLink to="/">BACK TO HOME ↑</NavLink></div></footer>;
}

function PageTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const f = () => setVisible(window.scrollY > 500); window.addEventListener("scroll", f); return () => window.removeEventListener("scroll", f); }, []);
  return visible ? <button className="back-top" onClick={() => window.scrollTo({top:0, behavior:"smooth"})} aria-label="Back to top">↑</button> : null;
}

export default function App() {
  return <BrowserRouter><Header/><main className="route-main"><Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/experiences" element={<Experiences/>}/>
    <Route path="/day-visits" element={<DayVisits/>}/>
    <Route path="/accommodation" element={<Accommodation/>}/>
    <Route path="/boat-cruises" element={<Cruises/>}/>
    <Route path="/gallery" element={<Gallery/>}/>
    <Route path="/offers" element={<Offers/>}/>
    <Route path="/reviews" element={<Reviews/>}/>
    <Route path="/location" element={<Location/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/virtual-tour" element={<VirtualTour/>}/>
    <Route path="/compare-rooms" element={<RoomCompare/>}/>
    <Route path="/occasions" element={<Occasions/>}/>
    <Route path="/reservations" element={<Reservations/>}/>
    <Route path="/guest-portal" element={<GuestPortal/>}/>
    <Route path="/admin" element={<AdminDashboard/>}/>
    <Route path="/gift-vouchers" element={<GiftVouchers/>}/>
    <Route path="*" element={<Home/>}/>
  </Routes></main><Footer/><PageTop/><ResortAssistant/></BrowserRouter>;
}
