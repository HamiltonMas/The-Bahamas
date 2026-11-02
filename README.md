# The Bahamas Resort Website

A React + Vite multi-page resort website using the supplied resort media.

## Run locally

1. Install Node.js (LTS).
2. Open this project folder in VS Code.
3. Run `npm install`.
4. Run `npm run dev` and open the local URL printed by Vite.
5. Run `npm run build` before publishing.

## Main features

- Responsive multi-page resort website and mobile navigation.
- Accommodation, day visits, boat cruise, gallery, location, offers, reviews and contact pages.
- Guided media tour, room comparison and special occasion enquiry.
- Reservation enquiry form with browser-local reference storage and WhatsApp message preparation.
- Guest enquiry lookup for references saved in the same browser.
- Visitor assistant with guided answers and WhatsApp hand-off.
- Gift voucher enquiry page.
- Admin dashboard preview at `/admin`.

## Important production notes

This is a front-end demonstration. It does not provide live room availability, payment processing, confirmed bookings, AI-generated answers, shared guest accounts, or secure multi-user administration. Enquiries and references created by the current prototype are stored in the visitor's browser only. The `/admin` screen is a local preview, not an authenticated management console.

Before using this for real guests, connect a hosted backend such as Supabase, enable staff authentication and role permissions, store enquiries in a shared database, configure email notifications, and have the resort verify all room information, rates, facilities, offers, contact details and booking terms. Add a real AI service only after supplying approved resort knowledge and server-side API protection.

## Project organisation

- `src/pages/` – individual route pages
- `src/components/` – shared interface components
- `src/styles.css` – existing core site styles
- `src/styles/assistant-admin.css` – visitor assistant, admin preview, layout safeguards and gift voucher styles
- `public/assets/` – supplied images and videos
