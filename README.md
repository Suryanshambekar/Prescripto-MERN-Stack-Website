# Prescripto - Full Stack Medical Appointment Booking System

A comprehensive web application for managing medical appointments, built with a modern full-stack architecture. This platform allows patients to book appointments with doctors, doctors to manage their schedules and profiles, and administrators to oversee the entire system.

## Features

### For Patients (Frontend)
- User registration and authentication
- Browse available doctors
- Book, view, and cancel appointments
- Secure payment processing (Razorpay and Stripe integration)
- Profile management with image upload
- Appointment history tracking

### For Doctors
- Doctor login and authentication
- Manage availability and schedule
- View and manage appointments
- Complete appointments
- Dashboard with appointment statistics
- Profile management

### For Administrators
- Admin login and authentication
- Add new doctors to the system
- View all doctors and appointments
- Manage appointment cancellations
- Change doctor availability
- Administrative dashboard

### General Features
- Secure JWT-based authentication
- Image upload and management via Cloudinary
- Responsive design with Tailwind CSS
- Real-time notifications with React Toastify
- CORS-enabled API
- Environment-based configuration

## Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **JWT** - JSON Web Tokens for authentication
- **bcrypt** - Password hashing
- **Cloudinary** - Image hosting and management
- **Multer** - File upload middleware
- **Razorpay & Stripe** - Payment gateways
- **Validator** - Input validation
- **CORS** - Cross-origin resource sharing

### Frontend & Admin Panel
- **React** - UI library
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client
- **React Router** - Client-side routing
- **React Toastify** - Notification system
- **ESLint** - Code linting

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd prescripto-full-stack
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```
   
   Create a `.env` file in the backend directory with the following variables:
   ```
   PORT=4000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key
   RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_key_secret
   STRIPE_SECRET_KEY=your_stripe_secret_key
   ```
   
   Start the backend server:
   ```bash
   npm run server  # For development with nodemon
   # or
   npm start       # For production
   ```

3. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   npm run dev
   ```
   The frontend will be available at `http://localhost:5173`

4. **Admin Panel Setup**
   ```bash
   cd ../admin
   npm install
   npm run dev
   ```
   The admin panel will be available at `http://localhost:5174`

## Usage

1. **Access the Application**
   - Frontend: `http://localhost:5173`
   - Admin Panel: `http://localhost:5174`
   - Backend API: `http://localhost:4000`

2. **User Registration/Login**
   - Register as a new user or login with existing credentials

3. **Booking Appointments**
   - Browse available doctors
   - Select a doctor and available time slot
   - Complete payment through Razorpay or Stripe
   - Receive confirmation

4. **Doctor Management**
   - Doctors can login to manage their profiles and appointments
   - Update availability and view dashboard statistics

5. **Admin Operations**
   - Login to admin panel
   - Add new doctors with profile images
   - Monitor all appointments and doctors
   - Manage system-wide settings

## API Endpoints

### User Routes (`/api/user`)
- `POST /register` - Register new user
- `POST /login` - User login
- `GET /get-profile` - Get user profile
- `POST /update-profile` - Update user profile
- `POST /book-appointment` - Book appointment
- `GET /appointments` - List user appointments
- `POST /cancel-appointment` - Cancel appointment
- `POST /payment-razorpay` - Initiate Razorpay payment
- `POST /verifyRazorpay` - Verify Razorpay payment
- `POST /payment-stripe` - Initiate Stripe payment
- `POST /verifyStripe` - Verify Stripe payment

### Doctor Routes (`/api/doctor`)
- `POST /login` - Doctor login
- `GET /appointments` - Get doctor's appointments
- `POST /cancel-appointment` - Cancel appointment
- `GET /list` - List all doctors
- `POST /change-availability` - Change doctor availability
- `POST /complete-appointment` - Mark appointment complete
- `GET /dashboard` - Doctor dashboard data
- `GET /profile` - Get doctor profile
- `POST /update-profile` - Update doctor profile

### Admin Routes (`/api/admin`)
- `POST /login` - Admin login
- `POST /add-doctor` - Add new doctor
- `GET /appointments` - Get all appointments
- `POST /cancel-appointment` - Cancel appointment
- `GET /all-doctors` - List all doctors
- `POST /change-availability` - Change doctor availability
- `GET /dashboard` - Admin dashboard data

## Project Structure

```
prescripto-full-stack/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
├── admin/
│   ├── src/
│   ├── public/
│   └── package.json
└── README.md
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

