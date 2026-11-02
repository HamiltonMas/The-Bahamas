# The Bahamas Resort — Phase 1: Expanded Visitor Information

## Run locally
1. Install Node.js (LTS).
2. Open this folder in VS Code.
3. Run `npm install`.
4. Run `npm run dev` and open the local URL shown in the terminal.
5. Run `npm run build` to check the production build.

## Pages
- Home
- Experiences
- Day Visits
- Accommodation
- Boat Cruises
- Gallery
- Offers & Events
- Guest Reviews
- Location
- Contact

## What's included in this update
- Expanded visitor guidance and FAQs across the main pages.
- Practical checklists for day visits, overnight stays and boat cruises.
- Clear reminders to confirm prices, facilities, availability, safety rules and promotional terms directly with the resort.
- Guest feedback page with a WhatsApp submission form. Feedback is not automatically published as a public testimonial.
- Reusable information-card, FAQ and WhatsApp enquiry sections.
- Responsive styling for the new information sections.
- Existing React Router navigation, grouped dropdowns, mobile navigation and resort media retained.

## Important publishing notes
The website currently supports enquiries through WhatsApp. It does not take online payments or confirm reservations automatically. The resort must confirm availability, rates, facilities, opening times, cruise schedules, safety requirements, offer validity and exact directions directly with each guest.

Before the website is published, the resort owner should verify the contact number, exact location pin/entrance, room descriptions and capacities, visitor rules, prices, operating hours and all promotional details.

## Premium experience and smart reservation additions

New routes:
- `/virtual-tour` — guided resort media tour. A true 360-degree panorama is not claimed; panoramic source photos are still required for that.
- `/compare-rooms` — side-by-side room information checklist. Unverified room features, capacity and rates are explicitly marked for confirmation.
- `/occasions` — special occasion enquiry planner.
- `/reservations` — date/guest enquiry, optional estimator using a rate quoted by the resort, and locally generated enquiry reference.
- `/guest-portal` — lookup for references saved in the same browser.

The reservation workflow is an enquiry prototype, not a live booking engine. References are stored in local browser storage only; they do not synchronise across devices or confirm availability. A shared backend (for example Supabase) and authorised resort operations are required for production booking status, inventory, guest accounts and payments. No unverified room prices or capacities are displayed.

The gallery now has category filters and its existing media lightbox remains available.
