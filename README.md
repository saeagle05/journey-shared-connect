
# 🚗 Ride With Me

<p align="center">
  <img src="public/placeholder.svg" alt="Ride With Me Logo" width="200">
</p>

## 🌟 Project Overview

**Ride With Me** is a free community-based ride-sharing platform designed to connect drivers and passengers. Unlike commercial ride-sharing services, our platform focuses on:

- **Environmental Impact**: Reducing carbon footprint through shared journeys
- **Community Building**: Creating social connections between neighbors and commuters
- **Accessibility**: Making transportation available to everyone regardless of economic status
- **Zero Commission**: No fees for drivers or passengers - supported by partnerships and advertising

Our mission is to transform how communities think about transportation by making ride-sharing a convenient, safe, and environmentally friendly option for everyone.

## ✨ Features

### For Drivers
- **Create and manage ride offers** with detailed trip information
- **Set your own schedule** for one-time trips or regular commutes
- **Specify available seats** and any special accommodations
- **Real-time location tracking** for passenger pickup and trip progress
- **Safety verification** through profile ratings and verification steps
- **Dashboard** for tracking all past, current, and upcoming rides

### For Passengers
- **Search for available rides** by destination, date, and specific requirements
- **Connect with drivers** going your way through in-app messaging
- **Track driver location** in real-time for accurate pickup timing
- **Safety features** including driver verification and trip tracking
- **Trip history** and favorite routes for quick booking
- **Special needs options** for requesting accessibility features

### Platform Features
- **Multilingual Support**: Currently English and Arabic, with more languages planned
- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- **Accessibility Focus**: Designed with features to support users with disabilities
- **Low Data Usage**: Optimized for areas with limited internet connectivity
- **Offline Capabilities**: Core features available even with intermittent connection

## 🖼️ Screenshots

<p align="center">
  <img src="https://via.placeholder.com/400x200?text=Homepage+Screenshot" alt="Homepage" width="400">
  <img src="https://via.placeholder.com/400x200?text=Trip+Search+Screenshot" alt="Trip Search" width="400">
</p>

<p align="center">
  <img src="https://via.placeholder.com/400x200?text=Profile+Screenshot" alt="User Profile" width="400">
  <img src="https://via.placeholder.com/400x200?text=Trip+Details+Screenshot" alt="Trip Details" width="400">
</p>

## 🚀 Demo

Visit our live demo: [Ride With Me Demo](https://lovable.dev/projects/484c297e-7d90-43f8-b9e0-bd2a385b3a04)

## 🔧 Getting Started

### Prerequisites

- Node.js (v16.0.0 or later)
- npm (v7.0.0 or later) or Bun

### Installation

```sh
# Clone the repository
git clone https://github.com/yourusername/ride-with-me.git

# Navigate to project directory
cd ride-with-me

# Install dependencies
npm install
# or
bun install

# Start the development server
npm run dev
# or
bun run dev
```

The application will start at `http://localhost:5173`.

### Environment Setup

For a full-featured experience with authentication and database:

1. Create a free [Supabase](https://supabase.com) account
2. Set up a new Supabase project
3. Configure the environment variables (see `.env.example`)
4. Run database migrations (instructions in `/database` folder)

## 📁 Project Structure

```
ride-with-me/
├── public/             # Static files and assets
├── src/
│   ├── components/     # Reusable UI components
│   │   ├── common/     # Shared components (buttons, forms, etc)
│   │   ├── layout/     # Layout components (header, footer, etc)
│   │   ├── home/       # Homepage-specific components
│   │   └── ui/         # UI component library (shadcn/ui)
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions and constants
│   │   └── localization/  # Language translations and utilities
│   ├── pages/          # Page components for routing
│   └── main.tsx        # Application entry point
└── README.md           # Project documentation
```

## 🔨 Technology Stack

- **Frontend**
  - React 18 with TypeScript
  - Vite for fast development and building
  - TailwindCSS for styling
  - Shadcn UI for component library
  - React Router for navigation
  - Tanstack Query for data fetching & state management

- **UI/UX**
  - Responsive design for all device sizes
  - RTL support for Arabic language
  - Lucide React for icons
  - Accessibility-focused components

## 🌱 Environmental Impact

By using Ride With Me, our community contributes to:

- **Reducing Carbon Emissions**: Each shared ride can save up to 2.6 kg of CO2
- **Decreasing Traffic Congestion**: Fewer cars on the road during peak hours
- **Lowering Demand for Parking**: Less urban space dedicated to vehicle storage
- **Building Sustainable Habits**: Encouraging car-free and car-light lifestyles

We track and display the collective environmental impact of our users on the platform dashboard.

## 🔒 Security & Privacy

- User verification processes for safety
- Data encryption for all sensitive information
- Options to limit location sharing when not needed
- Regular security audits and updates
- Full compliance with data protection regulations

## 🌐 Localization

Currently supporting:
- English (en)
- Arabic (ar)

Contributions for additional languages are welcome!

## 👥 Contributing

We welcome contributions from developers of all skill levels! Here's how to get started:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes (and add tests if applicable)
4. Run tests to make sure everything still works
5. Commit your changes (`git commit -m 'Add some amazing feature'`)
6. Push to your branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

Please read our [Contributing Guidelines](CONTRIBUTING.md) for more details.

### Areas We Need Help With

- Additional language translations
- Accessibility improvements
- Performance optimizations for low-end devices
- Additional safety features
- Documentation improvements

## 📝 Testing

Run the test suite:

```sh
npm run test
```

We use Vitest for unit testing and Cypress for end-to-end testing.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact & Support

- Project Link: [https://github.com/yourusername/ride-with-me](https://github.com/yourusername/ride-with-me)
- Issue Tracker: [https://github.com/yourusername/ride-with-me/issues](https://github.com/yourusername/ride-with-me/issues)
- Support: ridewithme@example.com

## 🙏 Acknowledgements

- [Lovable](https://lovable.dev) - AI development platform
- [React](https://reactjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Shadcn UI](https://ui.shadcn.com)
- [Lucide Icons](https://lucide.dev)
- All our amazing contributors and community members

---

Made with ❤️ by the Ride With Me Team
