# Apps n Fields - React Native App

A field service and task management mobile application built with React Native (Expo), matching the Figma design for "apps n fields".

## Features

- **Splash & Login** - OTP-based authentication flow
- **Home Dashboard** - 9-grid menu (New Task, Activity List, Expense List, RTS List, Asset List, Location List, Class Run, School Daily Report, Analytics)
- **Drawer Navigation** - Side menu with all main sections
- **Task Management** - New Task list, create task form, task activity with checklist
- **Activity** - Activity list and detail views
- **RTS** - RTS list with calendar, RTS details form
- **Class Run & School Daily Report** - School status with progress bars
- **Distance** - Distance tracking with total/summary
- **Location** - Location list and add location form
- **Expense** - Expense list, new expense, expense detail
- **Analytics** - Coming soon placeholder
- **Assets** - Asset list with status
- **Profile** - User profile view
- **Branch** - Branch list

## Design

- **Primary Color**: Deep purple (#4A148C)
- **Accent**: Orange (#FF6D00)
- **Status**: Red, Yellow, Green indicators
- Clean cards, rounded corners, subtle shadows

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Expo Go app (for physical device testing)

### Install & Run

```bash
# Install dependencies (already done)
npm install

# Start development server
npm start

# Run on Android
npm run android

# Run on iOS (macOS only)
npm run ios

# Run on Web
npm run web
```

### Flow

1. **Splash** - Shows for ~2.5 seconds
2. **Login** - Enter phone → Send OTP → Enter OTP → Login
3. **Home** - Tap menu icon to open drawer, tap grid items to navigate
4. **Screens** - All screens have back button and match the Figma layout

## Project Structure

```
src/
├── components/     # Reusable UI (Header, Button, Input, ListItem, etc.)
├── theme/          # Colors, typography
├── screens/        # All app screens
└── navigation/     # Drawer + Stack navigation
```

## Tech Stack

- React Native (Expo)
- TypeScript
- React Navigation (Drawer + Native Stack)
- Expo Vector Icons
