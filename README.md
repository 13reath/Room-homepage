# Room Homepage

![Room Homepage](./public/design/desktop-preview.jpg)

## Overview

The Room Homepage is a responsive web application showcasing a modern furniture company's landing page. It features a hero slider section, navigation, and product information in an elegant and user-friendly design.

## Table of Contents

- [Features](#features)
- [Live Demo](#live-demo)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Development Process](#development-process)
- [Challenges and Solutions](#challenges-and-solutions)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)

## Features

- Responsive design optimized for desktop and mobile devices
- Interactive image slider with navigation controls
- Hamburger menu for mobile navigation
- Smooth transitions and animations
- Interactive elements with hover and focus states
- Accessible navigation and content structure
- Product showcase sections

## Live Demo

Check out the live demo: [Room Homepage](https://13reath.github.io/Room-homepage/)

## Screenshots

### Desktop View
![Desktop Design](./public/design/desktop-design-slide-1.jpg)

### Mobile View
![Mobile Design](./public/design/mobile-design.jpg)

### Active States
![Active States](./public/design/active-states.jpg)

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Flexbox and Grid for layout
- Mobile-first responsive design
- CSS transitions and animations

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/13reath/Room-homepage.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Room-homepage
   ```

3. Open the `index.html` file in your browser or use a live server extension if you're using VS Code.

## Usage

1. Navigate through the slider using the arrow buttons
2. Explore the navigation menu (hamburger menu on mobile)
3. View information about featured furniture products
4. Click on links to explore more content (note: as this is a front-end demonstration, some links may be placeholders)

## Project Structure

```
Room-homepage/
├── public/                # Public assets
│   ├── design/            # Design files and screenshots
│   │   ├── active-states.jpg
│   │   ├── desktop-design.jpg
│   │   ├── desktop-preview.jpg
│   │   └── mobile-design.jpg
│   └── images/            # Image assets
│       ├── desktop/       # Desktop images
│       │   ├── image-about-dark.jpg
│       │   ├── image-about-light.jpg
│       │   └── image-hero-*.jpg
│       ├── mobile/        # Mobile images
│       │   ├── image-about-dark.jpg
│       │   ├── image-about-light.jpg
│       │   └── image-hero-*.jpg
│       └── icons/         # Icon assets
│           ├── icon-arrow.svg
│           ├── icon-close.svg
│           ├── icon-hamburger.svg
│           └── logo.svg
├── index.html             # Main HTML file
├── style.css              # CSS styles
├── script.js              # JavaScript functionality
└── README.md              # Project documentation
```

## Development Process

This project was developed following these steps:

1. Set up the basic HTML structure
2. Implemented the CSS styling with a mobile-first approach
3. Added responsive design for desktop views
4. Developed the slider functionality with JavaScript
5. Implemented the mobile navigation menu
6. Added animations and transitions for interactive elements
7. Tested across different browsers and screen sizes
8. Optimized for performance and accessibility

## Challenges and Solutions

### Challenge 1: Responsive Image Slider
- **Problem**: Creating a slider that works smoothly across all device sizes
- **Solution**: Used JavaScript to control slide transitions and implemented separate image sets for mobile and desktop to ensure optimal display

### Challenge 2: Mobile Navigation
- **Problem**: Designing an intuitive navigation system that works well on smaller screens
- **Solution**: Implemented a hamburger menu that expands to a full-screen navigation on mobile devices

### Challenge 3: Maintaining Design Consistency
- **Problem**: Ensuring the design looks consistent across different screen sizes
- **Solution**: Used CSS Grid and Flexbox with carefully planned breakpoints to maintain the visual hierarchy and spacing

## Future Improvements

- Add product detail pages
- Implement shopping cart functionality
- Add product filtering and search capabilities
- Create user authentication system
- Implement product reviews and ratings
- Add dark/light theme toggle

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request
