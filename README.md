# Pick-n-Pay


## Student Information

| Field             | Details                        |
| ----------------- | ------------------------------ |
| Student Number    | ST10535640                     |
| Student Full Name | Esther Msimango                |
| Module Name       | Web Development (Introduction) |
| Module Code       | WEDE5020                       |
| Group             | Year 01 Group 4                |
| Lecturer          | Deogratias Phiri               |

---

## Project Overview
*The purpose of the website is to provide users with information about Pick-n-Pay, its products and services, and ways to make enquiries or contact the business.
The website was developed using HTML and CSS and contains multiple interconnected  pages.*

## Website Goals and Objectives


# Goals
1. To create a clear and user-friendly Pick-n-Pay website.
2. To provide customers with useful information about Pick-n-Pay, its products and services.
3. To make it easy for users to navigate the website and find information.
# Objectives
1. To provide information about Pick-n-Pay and the business
2. To provide contact information for customers who need assistance
3. To create a simple and consistent navigation system across all pages

# Key Features and Functionality

Planned Features
### Home
### About Us
### Products
### Enquiry
### Contact

---


| Feature                   | Description                         |
| ------------------------- | ----------------------------------  |
| Responsive Navigation     | [move easily between the pages]     |
| Home Page                 | [Welcome the visitors]              |
| About Us Page             | [Show the values and mission]       |
| Enquiry/Contact Form      | [Send enquiries]                    |


---

## Timeline and Milestones

*Show how the project is planned across the full POE (all parts), and what has been completed so far.*

| Milestone                                             | Target Date | Status   |
| ----------------------------------------------------- | ----------- | -------- |
| Planning & Wireframing                                | 05/08/2026  | Completed|
| Part 1: Sumit Proposal and Semantic HTML structure    | 14/08/2026  | Completed|
| Adding external CSS styling and mobile responsiveness | 16/09/2026  | Ongoing  |
| Part 2: Submit CSS and Responsiveness to website      | 18/09/2026  | Planned  |
| Adding JavaScript and interactivity                   | 28/10/2026  | Completed|
| Part 3: Final Testing & Submission                    | 02/11/2026  | Completed|


---

## Part 1 Details
Part 1 focused on planning and developing the basic structure and content of the website.
The website includes five interconnected HTML pages:
index.html
about.html
products.html
enquiry.html
contact.html
*(Part 2 and Part 3 will follow in future submissions/edits)*


- Pages completed: index.html, about_us.html, enquiry.html, services.html
- Structure/semantics used: semantic HTML5 tags — header, nav, main, footer
- Known limitations for this part: JavaScript functionality not yet implemented, will be added in Part 2/3

## Part 2 Details
- Added style.css to project and linked to all html pages
- Also updated code to include comments based on feedback from part 1
- Updated html code to use semantic html
- Updated code to be responsive using breakpoints in style.css
- Updated logo for website, did not like initial design

## Part 3 Details
- Added `script.js` (one file, numbered sections, plain JavaScript) and `data/products.json`
- **Interactive elements:** FAQ accordion (Enquiries), tabs (About Us), modal (Services), interactive map with Leaflet (Contact)
- **Animations:** CSS keyframes and transitions, scroll reveal, count-up numbers (respects reduced motion)
- **Advanced DOM:** `createElement`, `appendChild`, `closest`, `dataset`, `IntersectionObserver`, `URLSearchParams`
- **Gallery with lightbox** on About Us (built with the `<dialog>` element)
- **Dynamic content:** products loaded from JSON with `fetch()`, with search, category filter and sorting
- **Forms:** HTML5 validation attributes plus JavaScript error messages; the enquiry form sends with AJAX and shows a reply (cost and availability); the contact form builds an email for the visitor to send
- **SEO:** unique titles and descriptions, header order, image names and alt text, internal links, Open Graph tags, `LocalBusiness` data, `robots.txt`, `sitemap.xml`
- **Page speed and security:** compressed images, lazy loading, `defer`, `_headers` and `.htaccess` with a Content Security Policy, Subresource Integrity on Leaflet
- Full notes: `docs/FEATURES-AND-SEO-NOTES.md`
- Known limitations: the products page needs a web server (Live Server) because `fetch()` does not run from a double-clicked file; the Formspree address and the sitemap domain are placeholders until replaced

---

## Sitemap

<img width="704" height="203" alt="image" src="https://github.com/user-attachments/assets/9b72ab24-ae19-413b-a2ee-01bccc110072" />


---

## Changelog

*Track changes and improvements to the website over time. Add a new entry every time you make a significant update — this should grow throughout Part 1, 2, and 3. Most recent entry at the top.*

| Date       | Version | Change Description                                                             |
| ---------- | ------- | ------------------------------------------------------------------------------ |
| 10/08/2026 | v1.0    | Initial repository setup, added folder structure                               |
| 12/08/2026 | v1.1    | Added index.html and basic navigation                                          |
| 14/08/2026 | v1.2    | Added about_us.html and enquiry.html                                           |
| 25/08/2026 | v1.3    | Added initial style.css                                                        |
| 31/08/2026 | v1.4    | Updated style.css to better design website                                     |
| 16/09/2026 | v1.5    | Added breakpoints to css design                                                |
| 28/10/2026 | v1.6    | Added script.js: accordion, tabs, modal, animations                            |
| 28/10/2026 | v1.7    | Added gallery with lightbox and products loaded from JSON with search and sort |
| 28/10/2026 | v1.8    | Added form validation, AJAX enquiry form and contact email builder             |
| 28/10/2026 | v1.9    | Added SEO updates, robots.txt, sitemap.xml and security headers                |
|            |         | *Add new rows as the project progresses*                                       |

---

## References

Independent Institute of Education (Pty) Ltd. (2026). *WEDE5020 Web Development (Introduction) Assignment Brief*. Rosebank College.

MDN Web Docs. (2026). *CSS: Cascading Style Sheets*. Available at:
https://developer.mozilla.org/en-US/docs/Web/CSS

MDN Web Docs. (2026). *Responsive images*. Available at:
https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images

W3Schools. (2026). *CSS Responsive Web Design*. Available at:
https://www.w3schools.com/css/css_rwd_intro.asp

## References

- Mozilla (n.d.) HTML: HyperText Markup Language. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML 

- Mozilla (n.d.) CSS: Cascading Style Sheets. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS 

- Mozilla (n.d.) JavaScript. Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript

- Google Maps (n.d.) Google Maps. Available at: https://maps.google.com

- Pick n Pay (n.d.) Pick n Pay official website. Available at: https://www.pnp.co.za