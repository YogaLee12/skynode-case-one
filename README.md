
## Getting Started

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## File Structure

/app: Contains all of the application's routes, components, and logic. This is where you'll primarily work.
/app/lib: Contains functions used throughout the application, such as reusable utility functions and data fetching functions.
/app/ui: Contains all of the application's UI components, such as cards, tables, and forms. 
/public: Contains all of the application's static assets, such as images.

## Database Overview

This project uses a relational database to store menu items, categories, and product variants.  
The schema is designed to support flexible pricing (e.g., "Half Dozen" / "Full Dozen" oysters) and maintain clean separation of data.

---

## 🗂 Tables

### 1. `categories`
Stores the high-level menu categories such as "Entrée", "Main", "Pasta", and "Side".

| Column | Type   | Description |
| ------ | ------ | ----------- |
| `id`   | UUID   | Primary key |
| `name` | String | Category name |

**Example:**
```
{
  "id": "a51f4cf5-9b4f-4f4d-8436-9a5d4a9a7b01",
  "name": "Entrée"
}
```
2. products
Stores each product's basic information.
Each product belongs to exactly one category.

Column	Type	Description
id	UUID	Primary key
name	String	Product name
description	String	Product description
category_id	UUID	Foreign key → categories.id

Example:

```
{
  "id": "6bb6b9f7-7f6c-4d2f-a4af-bb7c75c3f02a",
  "name": "Oysters",
  "description": "Freshly shucked sea oysters",
  "category_id": "a51f4cf5-9b4f-4f4d-8436-9a5d4a9a7b01"
}
```


3. product_variants
Stores pricing and variant information for each product.
Variants allow one product to have multiple prices and options.

Column	Type	Description
id	UUID	Primary key
product_id	UUID	Foreign key → products.id
name	String	Variant name (e.g., "Half Dozen", "Full Dozen", "Standard")
price	Number	Price in currency unit

Example:


```
{
  "id": "fbb5a0cf-1c6d-4d93-b4e0-836b73f41e50",
  "product_id": "6bb6b9f7-7f6c-4d2f-a4af-bb7c75c3f02a",
  "name": "Half Dozen",
  "price": 19.99
}
```

Relationships
One Category → Many Products
Each category can contain multiple products.

One Product → Many Variants
Each product can have one or more variants, each with its own price.


 Example Query Result
A query to fetch all products with category name and variants might return:
```
[
  {
    "id": "6bb6b9f7-7f6c-4d2f-a4af-bb7c75c3f02a",
    "name": "Oysters",
    "description": "Freshly shucked sea oysters",
    "category": {
      "id": "a51f4cf5-9b4f-4f4d-8436-9a5d4a9a7b01",
      "name": "Entrée"
    },
    "variants": [
      { "id": "fbb5a0cf-1c6d-4d93-b4e0-836b73f41e50", "name": "Half Dozen", "price": 19.99 },
      { "id": "66b342e4-f079-4fa0-8b53-bb49f2b5df56", "name": "Full Dozen", "price": 36.99 }
    ]
  }
]
```

Future Extensions
Add images table for product images.

Add orders and order_items for customer orders.

Add availability field to mark items as available or sold out.

Add created_at / updated_at timestamps for auditing.

 TypeScript Types
See definitions.ts for strongly-typed definitions used in the frontend and backend.

