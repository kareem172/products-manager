# Vue.js Product Management Application

## Overview

This is a product management application built with Vue.js 3, showcasing both the Options API and Composition API approaches. As my first Vue.js project, I implemented the same functionality using both APIs to explore and understand the differences between them.

## Features

- View all products with details like price, rating, and stock
- Add new products with comprehensive form validation
- Edit existing product information
- Delete products
- View detailed product information on a dedicated page
- Dark/Light mode toggle
- Responsive design for various screen sizes

## Project Structure

### Core Components

- **App.vue**: Main application component with theme support (dark/light mode)
- **NavBar.vue**: Navigation component with links to different sections

### Pages

- **Home.vue**: Landing page with welcome message
- **Options.vue**: Product listing using Options API
- **Composition.vue**: Product listing using Composition API
- **AddEditOptionsPage.vue**: Form for adding/editing products (Options API)
- **AddEditCompositionPage.vue**: Form for adding/editing products (Composition API)
- **ProductPage.vue**: Detailed view of a single product

### Reusable Components

- **ProductCard.vue**: Card component for displaying product information
- **ProductForm.vue**: Form component for adding/editing products
- **ProductDisplay.vue**: Component for displaying detailed product information

### State Management

- **Vuex Store**: Centralized state management for products and theme
  - Actions for CRUD operations (ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT)
  - State for products, selected product, and dark mode

### API Integration

- Uses Axios for HTTP requests to a local JSON server
- CRUD operations for products

### Routing

- Vue Router with nested routes for both API approaches
- Separate route files for Options API and Composition API

## Implementation Approaches

### Options API Implementation

- Uses Vue's traditional Options API with data, methods, computed properties
- Leverages mixins for reusable product-related functionality
- Component lifecycle hooks like mounted for initialization

### Composition API Implementation

- Uses Vue 3's Composition API with setup(), ref(), computed(), etc.
- Leverages composable functions for better code organization
- Uses onMounted() for initialization
- Provides better type inference and code reuse

## Getting Started

### Prerequisites

- Node.js and npm/pnpm installed

### Installation

```
pnpm install
```

### Running the Development Server

```
# Start the JSON server (database)
pnpm run db

# In another terminal, start the Vue development server
pnpm run serve
```

### Building for Production

```
pnpm run build
```

## Learning Outcomes

This project helped me understand:

- The differences between Options API and Composition API
- State management with Vuex
- Routing with Vue Router
- Form handling and validation in Vue
- Component composition and reusability
- API integration with Axios
- Responsive design principles

## Technologies Used

- Vue.js 3
- Vuex 4
- Vue Router 4
- Axios
- JSON Server (for mock backend)
- Lucide Vue (for icons)
