# Empowering The Nation
This is a project for the WIL module at Varisty College, it consists of a:
- Mobile App (built using the Expo/React Native framework)
- Website (built using the NextJS/React framework)

### To run the Expo app
```
cd expo
npx expo start
```

### To run the NextJS app
```
cd web
npm run dev
```

### Changelog

166eb817c1110ad264fe43f72e2a5612504f4484 
Update README and enhance logging in Home component
- Expanded the README.md to include instructions for running both the Expo and Next.js applications.
- Added console logs in the Home component to track the selected course index and the lists of short and long courses for better debugging and visibility during development.

---
76b5605fb4eaac6420f5ba9e43a15a5cb2471387 
Enhance checkout functionality with quantity management and invoice updates
- Introduced quantity management for selected courses in the Checkout component, allowing users to adjust quantities with limits.
- Updated subtotal calculation to reflect course quantities.
- Enhanced invoice generation to include course quantities and line totals in both HTML and PDF formats.
- Improved UI to display quantity controls and itemized pricing breakdown in the checkout summary.

---
7ccbf5fde1458da8856d7f8505032d3550fd8d8b 
Update dependencies, enhance UI, and improve user experience
- Added `expo-print` and `expo-sharing` to package.json and package-lock.json for PDF generation and sharing capabilities.
- Updated the About Us and Contact Us pages to improve layout and content structure.
- Enhanced the Checkout component to include a phone number field and store invoice data in AsyncStorage for better user experience.
- Improved the Success page to display invoice details and allow users to download the invoice PDF.
- Updated various components to reflect new contact information and business hours.

---
45c099a6db7d77698cf326d317f38e8499f27391 
Update dependencies and enhance UI components
- Added `jspdf` and its type definitions to package.json and package-lock.json for PDF generation capabilities.
- Updated various components to include `cursor-pointer` class for better user interaction feedback.
- Enhanced the CheckoutContent component to store invoice data in local storage for improved user experience.
- Updated the Success page to display invoice details and provide a button for downloading the invoice PDF.

---
b934fa2d7487e1ed94cc912b30dd0e45b127e077 
Update Expo project configuration and enhance user interface
- Changed project name and slug in app.json and package.json to "etn-app".
- Added EAS configuration in eas.json for build and submission processes.
- Updated .gitignore to exclude all instances of the .next directory.
- Modified button text from "Buy Now" to "Order Now" in multiple components for consistency.
- Enhanced checkout form to include a phone number field with validation.
- Updated package-lock.json and package.json to reflect new dependencies and versions.

---
11fd938d6e851743379958be1839b33fc9b1cf42 
new ai feature

---
62c2286e1554dba4c5a382bc98fca2742b6b85c0 
Remove unused files and components to streamline the project
- Deleted .netlifyignore, components.json, db.json, netlify.toml, next.config.ts, package-lock.json, package.json, postcss.config.mjs, and various components including Navbar, Footer, and CourseCard.
- Cleaned up the project structure by removing unnecessary files and components that are no longer in use, enhancing maintainability and reducing clutter.
- Updated README.md to reflect the current project structure.

---
f708c3787a24ddba84a1bbc36e56e7fb4aaf416a 
Refactor course selection and fee calculation in CheckoutContent component
- Enhanced the CheckoutContent component to improve course selection functionality and fee calculation based on user selections.
- Streamlined form handling for user information submission, including validation and feedback notifications.
- Updated UI elements for a better user experience, incorporating loading states and improved messaging for success and error scenarios.

---
8562927b77030e3b52b3861ca2873c50fcbaaa68 
Update configuration and clean up code for production readiness
- Added production optimizations in next.config.ts, including compression, disabling the poweredByHeader, enabling strict mode, and SWC minification.
- Removed the @polar-sh/sdk dependency from package.json to streamline dependencies.
- Cleaned up debug console logs in the Card component to enhance performance and maintain a cleaner production environment.
- Removed unused imports in the Navbar component for better code clarity.

---
a25906e81388dd0f5ed07b5db6c79b2f47d822d2 
Add Expo project structure with initial components and configuration
- Created a new Expo project structure including essential files such as app.json, package.json, and TypeScript configuration.
- Implemented core components including Navbar, Footer, CourseCard, and Cart for managing course listings and user interactions.
- Established a data layer with course information sourced from db.json, enabling dynamic course retrieval and management.
- Enhanced user experience with a responsive layout and navigation across various course pages (short and long).
- Integrated ESLint configuration for code quality and consistency.
- Updated .gitignore to exclude unnecessary files and directories.

---
f1299f6698fc4b405aad1514add2557f98aaec2e 
Enhance checkout process with course selection and fee calculation
- Updated CheckoutContent component to allow users to select courses via checkboxes and calculate fees based on selected courses.
- Improved form handling for user information submission, including validation and toast notifications for feedback.
- Refactored course fetching logic to support pre-selection of courses from URL parameters or cart items.
- Enhanced UI for better user experience, including loading states and improved messaging on success and error scenarios.
- Updated Success page to reflect quota submission confirmation and provide navigation options.

---
d577c7e329774ee362b538a42be480aaebb43e2d 
SEO

---
41a12f63d2ffd86aa5ec7c077b34150161c47870 
Refactor course data handling to enforce type safety
- Updated the course data assignment in getCourses function to explicitly cast the data as Course[] for improved type safety and clarity.

---
07d89558e1ec8e3cef7376d63390dc1f52e03d59 
Update dependencies, refactor course data handling, and enhance UI components
- Added new dependencies: class-variance-authority, lucide-react, next-themes, sonner, tailwind-merge, and tw-animate-css to package.json and package-lock.json.
- Refactored course data fetching in various components to utilize local data functions instead of Prisma.
- Enhanced UI components with improved layouts and added toast notifications for cart actions.
- Integrated Toaster component for better user feedback on actions.
- Updated global styles to include new animations from tw-animate-css.

---
e9d27498d63a0993af992d19a04ca2bb5f0fb557 
Update Footer component layout for improved responsiveness
- Adjusted the layout of the Footer component to ensure better alignment and spacing.
- Changed the width of the second column from 'md:w-1/2' to 'md:w-fit' for a more flexible design.

---
67d9cc964f010c880982353bf1e53282e952dae0 
Mobile-friendly responsive design improvements and VAT calculation

---
3ecea4f762d1e1358b9a6e0c9f163b057e341e48 
Implement Suspense for loading state in CheckoutPage
- Introduced Suspense to the CheckoutPage component to display a loading spinner while the checkout content is being fetched.
- Refactored CheckoutPage to separate the content into a new CheckoutContent component for better organization and readability.

---
a07d97383da1591b07e39d1da22e2a5b2e2897f1 
Enhance layout and course pages with new components and improved structure
- Integrated Navbar and Footer components into layout.tsx for consistent site navigation.
- Refactored course pages (ShortCourses, LongCourses, and their respective detail pages) to remove direct Navbar and Footer imports, streamlining the structure.
- Updated About Us and Contact Us pages with comprehensive content and improved layout for better user engagement.
- Enhanced course detail pages with dynamic content fetched from the database, including course descriptions and pricing.
- Removed deprecated purchase page and related product management code to simplify the codebase.

---
a850be8b0b4efa6b138385d81ea876ae199731aa 
Add @polar-sh/sdk dependency to package.json and package-lock.json
- Included @polar-sh/sdk version 0.35.4 in both package.json and package-lock.json to enhance functionality.
- Added related dependencies and metadata in package-lock.json for proper package management.

---
de045339831ff72bce596773c53fbed03be94533 
Refactor ShortCoursePage to handle course parameter as a Promise
- Updated ShortCoursePage component to accept course parameter as a Promise, ensuring proper resolution before accessing course data.

---
d89583f7f18b8dc1977fe47495e8ae4f5755cede 
Update LongCoursePage to handle course parameter as a Promise
- Modified LongCoursePage component to accept course parameter as a Promise, ensuring proper resolution before accessing course data.

---
ffba6afceedf4111791212ecb9825b19096d4cf7 
Enhance course management and UI components
- Updated course model in schema.prisma to include price and type fields.
- Refactored Home component in page.tsx to fetch and display short and long courses with fallback data.
- Improved LongCourses and ShortCourses pages to utilize CourseCard component for better presentation.
- Added navigation links for better user experience between course types.
- Enhanced Summary component layout for clarity and removed unused code.
- Updated Card component to include price information and adjusted styling for better responsiveness.

---
bfeaca26a35b69a1c590d3caac91fa1e9e5ee5de 
Update dependencies and enhance component structure
- Added react-local-storage-manager and zod to package.json and package-lock.json.
- Updated globals.css to modify the secondary color variable.
- Refactored layout.tsx to include Navbar and Footer components.
- Enhanced Home component in page.tsx to utilize Prisma for fetching featured courses.
- Improved Card component to handle cart functionality.
- Adjusted Summary component layout for better visual presentation.

---
6f80af278e3dd46b0dead17a3ba4fb442375e4ca 
Fix spacing in Summary component layout for improved alignment

---
0c372bc72e8a29a4e947e82e0e8fc37e11119de4 
Refactor components and enhance styles for improved UI
- Removed 'peer' property from several dependencies in package-lock.json.
- Updated globals.css to add new CSS variables for secondary color and border styling.
- Enhanced Home component in page.tsx with statistics display and certificate section.
- Improved Footer component layout and added social links.
- Updated Card component height for better responsiveness.
- Adjusted Summary component's heading and description for clarity.
- Modified Navbar to include an 'Explore Courses' button with updated styling.

---
89f6b021c9c215c295504a1da14137e975597b72 
Update global styles and refine Summary component layout
- Added body styles in globals.css for improved theming.
- Removed redundant background color from Summary component's div for cleaner structure.

---
7cb5a061c091eeda82c2f597b06c145b1fcca7db 
Update dependencies and improve component structure
- Added @gsap/react, gsap, and lenis as dependencies in package.json and package-lock.json.
- Updated globals.css to change the description color variable.
- Refactored Card component to accept data as props and improved layout.
- Enhanced Navbar and Links components with updated styles.
- Adjusted Home component to utilize ReactLenis for smooth scrolling.

---
c0d57248e74a3a75bb1b10325160b12f4b4bee0d 
Add clsx dependency and update layout and styles
- Added clsx as a dependency in package.json and package-lock.json.
- Updated globals.css to include CSS variables for theming.
- Refactored layout.tsx to use the Inter font and include Navbar and Footer components.
- Simplified Home component in page.tsx by replacing the previous layout with Card and Summary components.
- Added a featured field to the courses model in schema.prisma.

---
c4a6f50ea18c88932dcf1164da429638602a14f7 
Add Prisma dependencies and update project structure
- Added @prisma/client and prisma to dependencies in package.json and package-lock.json.
- Updated .gitignore to exclude generated Prisma files.
- Modified layout title in layout.tsx.
- Refactored Home component in page.tsx to include a new layout and cart button.
- Removed unused SVG files from public directory.
- Cleaned up globals.css by removing redundant styles.

---
70839443a5b7e0a68f074ee7d0785fbea933f982 
new

---
d444719f0d6f4f9aeeef0a144b04c717ce8981a0 
first commit

---

### Image References
1. **Landscaping**
   Unknown author (n.d.) *Green garden landscape*. Unsplash. Available at: [https://images.unsplash.com/photo-1734079692160-fcbe4be6ab96](https://images.unsplash.com/photo-1734079692160-fcbe4be6ab96) (Accessed: 12 October 2025).

2. **First Aid**
   Unknown author (n.d.) *First aid kit and medical supplies*. Unsplash. Available at: [https://images.unsplash.com/photo-1617699755337-c79e46f7eb0e](https://images.unsplash.com/photo-1617699755337-c79e46f7eb0e) (Accessed: 12 October 2025).

3. **Sewing**
   Unknown author (n.d.) *Sewing machine and fabric*. Unsplash. Available at: [https://images.unsplash.com/photo-1534126511673-b6899657816a](https://images.unsplash.com/photo-1534126511673-b6899657816a) (Accessed: 12 October 2025).

4. **Child Minding**
   Unknown author (n.d.) *Baby playing with toy*. Unsplash. Available at: [https://images.unsplash.com/photo-1587323655395-b1c77a12c89a](https://images.unsplash.com/photo-1587323655395-b1c77a12c89a) (Accessed: 12 October 2025).

5. **Life Skills**
   Unknown author (n.d.) *Person writing notes on desk*. Unsplash. Available at: [https://images.unsplash.com/photo-1600880292203-757bb62b4baf](https://images.unsplash.com/photo-1600880292203-757bb62b4baf) (Accessed: 12 October 2025).

6. **Garden Maintenance**
   Unknown author (n.d.) *Gardener pruning plants*. Unsplash. Available at: [https://images.unsplash.com/photo-1759496607068-f2892afdaf23](https://images.unsplash.com/photo-1759496607068-f2892afdaf23) (Accessed: 12 October 2025).

7. **Cooking**
   Unknown author (n.d.) *Person cooking in kitchen*. Unsplash. Available at: [https://images.unsplash.com/photo-1556911220-e15b29be8c8f](https://images.unsplash.com/photo-1556911220-e15b29be8c8f) (Accessed: 12 October 2025).