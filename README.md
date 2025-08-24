# GrowwBizz Website with Admin Panel

## Overview
This is a modern, responsive business website for GrowwBizz with a custom admin panel that allows you to edit website content without directly modifying code.

## Features
- **Responsive Design**: Works on all devices (desktop, tablet, mobile)
- **Modern UI**: Clean, professional design with custom color scheme
- **Admin Panel**: Secure login system to manage website content
- **Content Management**: Edit all sections of the website through an intuitive interface
- **Local Storage**: Changes are saved to browser's local storage

## Files Structure
- `index.html` - Main website
- `admin-login.html` - Admin login page
- `admin-dashboard.html` - Admin dashboard for content management
- `styles.css` - Website styling
- `script.js` - Website functionality
- `db.js` - Local database for content storage

## How to Use

### Viewing the Website
Simply open `index.html` in any modern web browser.

### Accessing the Admin Panel
1. Click on the "Admin Login" link at the bottom of the website
2. Use the following credentials:
   - Username: `admin`
   - Password: `password123`
3. You'll be redirected to the admin dashboard

### Using the Admin Dashboard
1. Use the sidebar navigation to select which section you want to edit
2. Make your changes in the form fields
3. Click "Save Changes" to update the website
4. View your changes by clicking "View Website" or navigating back to the main site

### Editable Content
- **Hero Section**: Main headline, subtitle, and button text
- **Services**: Add, edit, or remove service offerings
- **About Section**: Company description and button text
- **Testimonials**: Add, edit, or remove client testimonials
- **Contact Information**: Address, phone, email, and social media links
- **Footer**: Copyright information

## Technical Details

### Local Storage
This implementation uses the browser's localStorage API to persist changes. This means:
- Changes are saved to the user's browser
- Different users/computers will not share the same content unless the localStorage data is exported/imported
- Clearing browser data will reset content to defaults

### Security Note
This is a demonstration implementation with basic security. For a production environment, you would want to:
- Implement proper server-side authentication
- Use a real database instead of localStorage
- Add additional security measures like CSRF protection

## Customization

### Changing Default Admin Credentials
Edit the `db.js` file and modify the `adminUsers` array.

### Changing Color Scheme
Edit the CSS variables in the `:root` selector in `styles.css`.

### Adding New Sections
1. Add the HTML structure to `index.html`
2. Add corresponding fields to the admin dashboard in `admin-dashboard.html`
3. Update the content structure in `db.js`
4. Add the loading code to the script section in `index.html`

## Future Improvements
- Server-side database integration
- Image upload functionality
- Multiple admin user support
- Content versioning and rollback
- Export/import content functionality