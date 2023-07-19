# Page Navigation

This project creates dynamic page navigation for a multi-section web page. When a section is in the viewport, it will be highlighted. Clicking on a navigation link will scroll smoothly to the associated section.

## Features

- Dynamic navigation: Navigation is built automatically based on the sections on the page 
- Scroll to section: Clicking on a navigation link will scroll smoothly to the target section
- Section highlighting: The section in the viewport is highlighted to indicate which section is active
- Responsive: Works on mobile and desktop layouts

## Usage

The navigation is built automatically when the page loads by:

1. Finding all sections on the page (elements with id starting with "section")
2. Creating a navigation item for each section
3. Adding the navigation items to the unordered list #navbar__list

When scrolling the page:

- The section closest to the top is highlighted 
- The associated navigation item is also highlighted

When clicking a navigation item: 

- The page smoothly scrolls to bring the associated section into view
- The section and navigation item are highlighted

The menu button can be used to toggle a mobile menu on small screens.

## Customization

- Change active class names:
  - For sections: change "your-active-class" 
  - For navigation items: change "clicked_navbar"
- Change mobile menu breakpoint
- Change scroll offset thresholds
- Add transition effects

## Dependencies

- None

## Notes

- Uses modern JavaScript (ES6)
- Follows ESLint code standards
- Uses DocumentFragment for efficient DOM manipulation
- Works on modern browsers

Let me know if you need any clarification or have additional questions!
