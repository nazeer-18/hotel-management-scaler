# Hotel Room Management SPA

This project is a Single Page Application (SPA) designed for the administration of hotel room bookings. It was developed as a part of the assignment for the Scaler internship program. The application facilitates the management of rooms, including booking, viewing, editing, and deleting bookings with comprehensive criteria such as room type, pricing, and user details.

## Features

- **Multiple Room Types with Pricing**: Supports various room types, each with its distinct pricing.
- **Booking Management**: Enables the admin to book rooms based on availability, preventing overlaps in bookings.
- **Dynamic Pricing Update**: Automatically updates the booking price upon changes in room type, start time, or end time.
- **Edit Bookings**: Allows for the modification of existing bookings with an updated price confirmation.
- **Cancellation Policy**: Implements a cancellation policy with varying refund rates depending on the cancellation timeframe.
- **Responsive Design**: Adapts the layout for different screen sizes for accessibility on any device.
- **Email Notifications**: Sends booking confirmation emails to users (planned feature).

## Technologies Used

- **Frontend**: React.js for building the user interface, with Context API for state management and Tailwind CSS for styling.
- **Backend** (Mock): For demonstration purposes, the backend operations are simulated within the React application.
- **Deployment**: The application is intended to be deployed on platforms such as Netlify or Vercel.

## Getting Started

### Prerequisites

Ensure you have the following installed:
- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/<your-username>/hotel-room-management-spa.git
```

2. Install the necessary packages:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

This will launch the application in your default web browser at http://localhost:3000.

## Usage

The application's interface is designed to be intuitive, specifically catering to the needs of hotel administration tasks. Here are the primary functions you can expect:

- **Home Page**: Displays a welcoming message and provides navigation to other functionalities within the application.
- **Book a Room**: Admins can book rooms by entering the user’s email, selecting a room number, and specifying the booking start and end times.
- **View Bookings**: Offers a comprehensive list of all bookings, both upcoming and past, with options to filter by room number, room type, and booking dates.
- **Edit Booking**: Allows admins to modify the details of existing bookings, including user email, room number, start time, and end time, with an updated price confirmation.
- **Delete Booking**: Admins can cancel bookings, with the application displaying the refund amount according to the cancellation policy.

## License

Distributed under the MIT License. See `LICENSE` for more information.
