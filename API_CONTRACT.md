# API Contract – Rental Platform

This API contract defines how the frontend and backend will communicate for the Rental Platform application.

---

## Data Models

### User
- id: integer
- name: string
- email: string
- password: string (hashed)

### Property
- id: integer
- title: string
- description: string
- price: number
- location: string
- type: string ("apartment" or "house")
- image_url: string
- available: boolean

---

## Endpoints

### 1. User Signup
- Method: POST  
- Path: /api/items
- Description: Registers a new user account.  

Request Body:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword"
}
