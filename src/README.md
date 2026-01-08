# The Technology Fiction Website - Component Structure

This project has been restructured for better maintainability and reusability. Here's the new folder structure:

## 📁 Folder Structure

```
src/
├── components/
│   ├── ui/           # Reusable UI components
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   └── Container.jsx
│   ├── sections/     # Page sections
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── About.jsx
│   │   ├── Testimonials.jsx
│   │   └── Contact.jsx
│   ├── layout/       # Layout components
│   │   ├── Navigation.jsx
│   │   └── Footer.jsx
│   └── index.js      # Component exports
├── constants/
│   └── data.js       # All website data and configuration
├── hooks/
│   └── useScrollSection.js  # Custom hooks
├── utils/
│   └── scrollToSection.js   # Utility functions
├── App.jsx           # Main app component
├── main.jsx          # App entry point
└── index.css         # Global styles
```

## 🧩 Components

### UI Components (`components/ui/`)
- **Button**: Reusable button with variants (primary, secondary, outline, ghost)
- **Card**: Container component with hover effects
- **Container**: Responsive container with different sizes

### Section Components (`components/sections/`)
- **Hero**: Landing section with customizable content
- **Services**: Services showcase with dynamic data
- **About**: Company information with stats and features
- **Testimonials**: Client testimonials display
- **Contact**: Contact form and information

### Layout Components (`components/layout/`)
- **Navigation**: Header with responsive menu
- **Footer**: Footer with company info and links

## 📊 Data Management

All website content is centralized in `constants/data.js`:
- `SITE_CONFIG`: Company information and navigation settings
- `SERVICES_DATA`: Services information
- `TESTIMONIALS_DATA`: Client testimonials
- `ABOUT_DATA`: Company stats and features
- `CONTACT_INFO`: Contact details
- `FOOTER_DATA`: Footer links and information

## 🔧 Customization

### Adding New Services
1. Update `SERVICES_DATA` in `constants/data.js`
2. The Services component will automatically render the new service

### Updating Contact Information
1. Modify `SITE_CONFIG.company` in `constants/data.js`
2. Changes will be reflected across Navigation, Contact, and Footer components

### Adding New Sections
1. Create a new component in `components/sections/`
2. Add it to the exports in `components/index.js`
3. Import and use it in `App.jsx`

## 🎨 Styling

The project uses Tailwind CSS with custom colors defined in `tailwind.config.js`:
- `primary-600`: Main brand color
- `accent-500`: Secondary brand color
- Custom fonts: `font-display` for headings

## 🚀 Usage

All components are highly customizable through props:

```jsx
<Hero 
  title="Custom Title"
  subtitle="Custom subtitle"
  primaryButton={{
    text: "Custom Button",
    action: () => console.log('clicked')
  }}
/>
```

## 📱 Responsive Design

All components are built with responsive design in mind:
- Mobile-first approach
- Responsive grid layouts
- Adaptive navigation
- Touch-friendly interactions

## 🔄 Reusability

Components are designed to be reusable across different projects:
- Props-based customization
- Default values for all optional props
- Consistent styling patterns
- Modular architecture 