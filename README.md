# Advanced E-Commerce Store

## Overview

This project is a full-stack E-Commerce application built with React, TypeScript, Redux Toolkit, React Query, Firebase Authentication, and Firestore.

The application allows users to:

* Register and authenticate using Firebase Authentication
* Log in and log out securely
* View products stored in Firestore
* Create, update, and delete products
* Add products to a shopping cart
* Place orders
* View order history
* Manage their user profile
* Store and retrieve data from Firebase Firestore

This project was developed as part of the Advanced E-Commerce Store assignment and demonstrates modern frontend development practices, cloud database integration, state management, testing, and CI/CD automation.

---

# Technologies Used

## Frontend

* React
* TypeScript
* Vite
* React Router
* Redux Toolkit
* React Query

## Backend Services

* Firebase Authentication
* Firebase Firestore

## Testing

* Vitest
* React Testing Library

## DevOps

* GitHub Actions CI/CD

---

# Features

## Authentication

Users can:

* Register with email and password
* Log in
* Log out
* Update profile information
* Delete their account

Authentication is managed using Firebase Authentication.

---

## User Management

Each registered user automatically receives a Firestore document containing:

* uid
* name
* email
* creation date

Users can:

* View profile information
* Update profile details
* Delete their account

---

## Product Management

The original Fake Store API was replaced with Firebase Firestore.

Users can:

* View all products
* Create products
* Update products
* Delete products

Products are stored inside the Firestore `products` collection.

Example Product Structure:

```json
{
  "title": "Laptop",
  "price": 999.99,
  "description": "Gaming Laptop",
  "category": "Electronics",
  "image": "image-url"
}
```

---

## Shopping Cart

The cart is managed using Redux Toolkit.

Features include:

* Add to cart
* Remove from cart
* Increase quantity
* Decrease quantity
* Calculate totals automatically

---

## Order Management

When a user checks out:

1. Cart items are collected
2. User information is attached
3. Order is stored in Firestore

Each order contains:

* User ID
* Products purchased
* Quantities
* Total price
* Creation date

Users can later view their order history.

---

# Project Structure

```text
src/
│
├── assets/
├── components/
├── context/
│   └── AuthContext.tsx
│
├── lib/
│   └── firebase/
│       └── firebase.ts
│
├── pages/
│   ├── Home.tsx
│   ├── Login.tsx
│   ├── Register.tsx
│   ├── Profile.tsx
│   ├── Products.tsx
│   ├── Cart.tsx
│   └── Logout.tsx
│
├── redux/
│   ├── cartSlice.ts
│   └── store.ts
│
├── services/
│   ├── productService.ts
│   ├── userService.ts
│   └── orderService.ts
│
├── tests/
│
└── styles/
```

---

# Challenges Faced and Solutions

## 1. Firebase Configuration Exposure

### Problem

Initially, Firebase credentials were committed directly into the project and pushed to GitHub.

### Solution

I:

* Moved credentials into environment variables
* Created a `.env` file
* Added `.env` to `.gitignore`
* Rotated Firebase keys after accidental publication

This improved security and followed industry best practices.

---

## 2. TypeScript Type Errors

### Problem

TypeScript generated several errors related to:

* React event types
* Context initialization
* Product interfaces
* Firestore document typing

Examples included:

```typescript
Argument of type 'string' is not assignable to parameter of type 'number'
```

and

```typescript
Conversion of type '{ id: string }[]' to type 'Product[]'
```

### Solution

I:

* Added proper interfaces
* Used type-only imports
* Added generic types where necessary
* Refactored Firestore data mapping

This improved type safety and reduced runtime errors.

---

## 3. React Context Issues

### Problem

While implementing AuthContext, TypeScript reported:

```typescript
'user' is declared but its value is never read
```

### Solution

I modified the default context values and removed unused parameters.

This allowed the project to build successfully in CI environments.

---

## 4. Firebase Authentication Errors

### Problem

During testing and CI execution, Firebase returned:

```text
FirebaseError: auth/invalid-api-key
```

### Cause

GitHub Actions did not have access to the local `.env` file.

### Solution

I:

* Added Firebase environment variables to GitHub Secrets
* Refactored test execution to avoid relying on production Firebase configuration

This separated testing from production credentials.

---

## 5. Jest Configuration Problems

### Problem

I initially attempted to use Jest with a Vite project.

This resulted in multiple issues:

* import.meta.env errors
* CommonJS vs ES Module conflicts
* ts-jest configuration problems
* JSX compilation errors

### Solution

I migrated testing to Vitest, which is designed specifically for Vite applications.

Benefits included:

* Native Vite compatibility
* Simpler configuration
* Faster test execution
* Better TypeScript support

---

## 6. Snapshot Testing Challenges

### Problem

Components using:

* Firebase
* React Router
* Authentication Context

caused snapshot tests to fail.

### Solution

I:

* Wrapped components in MemoryRouter where required
* Mocked dependencies
* Simplified component rendering

This allowed snapshot tests to execute correctly.

---

## 7. GitHub Actions CI/CD Issues

### Problem

The CI pipeline failed because:

```text
Could not read package.json
```

### Cause

The project was located inside:

```text
advanced-ecommerce-store/
└── ecommerce-app/
```

while GitHub Actions executed commands from the repository root.

### Solution

I configured the workflow to use:

```yaml
working-directory: ecommerce-app
```

This allowed GitHub Actions to correctly locate package.json and execute npm commands.

---

## 8. Firestore CRUD Migration

### Problem

The original application relied on Fake Store API endpoints.

### Solution

I migrated all CRUD operations to Firestore:

* Create Product
* Read Products
* Update Product
* Delete Product

This provided persistent cloud storage and real-time data management.

---

# CI/CD Pipeline

The project uses GitHub Actions.

Pipeline steps:

1. Checkout Repository
2. Setup Node.js
3. Install Dependencies
4. Run Tests
5. Build Application

This ensures every push and pull request is automatically validated.

---

# Future Improvements

Potential future enhancements include:

* Product image uploads using Firebase Storage
* Product search functionality
* Category filtering
* Admin dashboard
* Stripe payment integration
* Order status tracking
* User role management
* Product reviews and ratings

---

# Lessons Learned

This project significantly improved my understanding of:

* Firebase Authentication
* Firestore CRUD operations
* React Context API
* Redux Toolkit
* React Query
* TypeScript type safety
* Environment variable management
* Snapshot testing
* CI/CD pipelines
* GitHub Actions automation

It also provided valuable experience debugging real-world integration issues involving authentication, cloud databases, testing frameworks, and deployment pipelines.

---

# Author

Jahvantè Tota

Built using React, TypeScript, Firebase, Redux Toolkit, React Query, Vitest, and GitHub Actions.
