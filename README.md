# EasyExplore

**EasyExplore** is a premium, responsive website template designed for travel agencies, hotels, and restaurant listings. Built with modern web technologies, it offers a seamless user experience for browsing tours, hotels, restaurants, and more. The template includes interactive features like modals, maps, booking forms, and a blog section, making it ideal for travel-related businesses.

## Table of Contents
- [Features](#features)
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features
- **Tours Section**: Browse and book popular tours with detailed itineraries, pricing, and reviews.
- **Hotels & Accommodations**: Explore hotel listings with images, amenities, and booking options.
- **Restaurants**: Discover restaurants with menus, locations, and user reviews.
- **Blog**: Read travel-related posts and articles.
- **Budget Planner**: Integrated budget planning tool for trips.
- **Ticket Booking**: Transportation booking module.
- **Payment Integration**: Secure payment gateway for bookings.
- **Interactive Maps**: Powered by Leaflet for location-based features.
- **User Authentication**: Sign-in and registration modals.
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices.
- **Modals & Sliders**: Dynamic content loading with AngularJS.

## Screenshots

### Homepage
![Homepage Screenshot](<img width="1895" height="921" alt="Image" src="https://github.com/user-attachments/assets/f2f7dba6-1ad9-4cf6-886f-43215efc1f34" />)
*The main landing page showcasing featured tours, hotels, and restaurants.*

### Tours Detail
![Tours Detail Screenshot](screenshots/tours-detail.png)
*Detailed view of a tour package with itinerary, pricing, and booking form.*

### Hotels List
![Hotels List Screenshot](screenshots/hotels-list.png)
*List of popular hotels with ratings and quick booking options.*

### Restaurants
![Restaurants Screenshot](screenshots/restaurants.png)
*Restaurant listings with images, reviews, and location maps.*

### Blog Section
![Blog Screenshot](screenshots/blog.png)
*Travel blog posts with author details and sharing options.*

*Note: Screenshots are placeholders. Add actual screenshots to the `screenshots/` folder for better visualization.*

## Installation

### Prerequisites
- A modern web browser (e.g., Chrome, Firefox, Safari).
- Optional: A local server like Apache, Nginx, or Node.js for advanced features.

### Steps
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/easyexplore.git
   cd easyexplore
   ```

2. **Install Dependencies** (if using Node.js for development):
   ```bash
   npm install
   ```
   *Note: The project uses minimal dependencies like SweetAlert for notifications.*

3. **Open in Browser**:
   - Simply open `index.html` in your web browser.
   - For a better development experience, use a local server:
     ```bash
     # Using Python (if installed)
     python -m http.server 8000
     # Then visit http://localhost:8000
     ```

## Usage
- **Navigation**: Use the header menu to explore Tours, Hotels, Restaurants, Budget Planner, etc.
- **Booking**: Click on items to open modals for detailed views and bookings.
- **Search & Filters**: Use search bars and filters in listings.
- **Authentication**: Sign in or register to access personalized features like wishlist and cart.
- **Payment**: Integrated payment flow for bookings (linked to external gateway).

### Key Files
- `index.html`: Main entry point.
- `js/`: JavaScript files for functionality.
- `css/`: Stylesheets for design.
- `img/`: Images and assets.
- Subdirectories like `BudgetPlanner/`, `TicketBooking/`, `Payment/` for specific modules.

## Technologies Used
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Framework**: AngularJS for dynamic content
- **Styling**: Bootstrap, Custom CSS
- **Maps**: Leaflet (OpenStreetMap)
- **Libraries**: jQuery, FlexSlider, SweetAlert
- **Icons**: Font Awesome, Custom SVGs
- **Build Tools**: None (static site)

## Project Structure
```
EasyExplore/
├── index.html                 # Main HTML file
├── package.json               # Dependencies
├── README.md                  # This file
├── assets/                    # PHP scripts for contact/newsletter
├── BudgetPlanner/             # Budget planning module
├── css/                       # Stylesheets
├── img/                       # Images and icons
├── js/                        # JavaScript files
├── Payment/                   # Payment integration
├── sass/                      # SCSS source files
├── TicketBooking/             # Transportation booking
└── .gitignore                 # Git ignore file
```


### Guidelines
- Ensure code is well-documented.
- Test on multiple browsers.
- Follow the existing code style.


