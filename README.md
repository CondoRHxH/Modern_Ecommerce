# Modern E-Commerce

A modern and responsive e-commerce web application built with **Next.js**, **React**, **Sanity**, and **Stripe**.

The project focuses on building a complete modern shopping experience, from browsing products and viewing product details to managing the cart and handling payments.

🔗 **Live Demo:** https://modern-ecommerce-ten.vercel.app/

---

## Features

* Shopping cart management
* Product browsing and product details
* Dynamic product pages
* Content management with **Sanity CMS**
* **Stripe** payment integration
* Responsive design
* Modern **Next.js App Router**
* Clean and modern UI
* Deployed with **Vercel**

---

## Tech Stack

### Frontend

* **Next.js**
* **React**
* **JavaScript / TypeScript**
* **CSS**

### Content Management

* **Sanity CMS**

Sanity is used to manage and serve the product data used by the application.

### Payments

* **Stripe**

Stripe is integrated to handle the payment flow.

### Deployment

* **Vercel**

---

## Project Structure

```text
Modern_Ecommerce/
│
├── app/                 # Next.js application routes and pages
│
├── components/          # Reusable React components
│
├── context/             # React Context and application state
│
├── lib/                 # Utility functions and integrations
│
├── public/               # Static assets
│
├── sanity/               # Sanity schemas and configuration
│
├── .sanity/              # Sanity generated/runtime files
│
├── sanity.config.js      # Sanity configuration
├── sanity.cli.js         # Sanity CLI configuration
│
├── next.config.ts        # Next.js configuration
├── package.json
└── README.md
```

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/CondoRHxH/Modern_Ecommerce.git
```

### 2. Navigate to the project

```bash
cd Modern_Ecommerce
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env.local` file in the root directory and add the required environment variables for your **Sanity** and **Stripe** configuration.

```env
# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
```

> Make sure to use your own credentials and never commit secret keys to GitHub.

### 5. Start the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## Deployment

The application is deployed on **Vercel** and is available here:

**https://modern-ecommerce-ten.vercel.app/**

---

## Project

If you find this project interesting, feel free to explore the repository and give it a star.
