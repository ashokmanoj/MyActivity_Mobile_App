# MyActivity Mobile App – Project Structure

```
MobileApp/
├── App.tsx                    # Root entry (ErrorBoundary, GestureHandler)
├── index.ts                   # Expo registration
├── package.json
├── tsconfig.json
├── babel.config.js
├── app.json
├── PROJECT_STRUCTURE.md
│
└── src/
    ├── api/
    │   ├── client.ts          # Base fetch client (auth headers, error handling)
    │   ├── endpoints.ts       # All API endpoint strings
    │   └── modules/
    │       ├── auth.api.ts
    │       ├── distance.api.ts
    │       ├── task.api.ts
    │       └── expense.api.ts
    │
    ├── components/
    │   ├── common/
    │   │   ├── Header.tsx
    │   │   ├── Button.tsx
    │   │   ├── Input.tsx
    │   │   ├── Badge.tsx
    │   │   ├── EmptyState.tsx
    │   │   ├── LoadingOverlay.tsx
    │   │   ├── Card.tsx
    │   │   └── index.ts
    │   └── distance/
    │       ├── DistanceHeader.tsx
    │       ├── TransportSelector.tsx
    │       ├── OdometerCard.tsx
    │       ├── TotalDistanceBar.tsx
    │       ├── LeaveModal.tsx
    │       ├── DistanceListCard.tsx
    │       ├── VehicleSelector.tsx      # alias / legacy
    │       ├── OdometerBlock.tsx        # alias / legacy
    │       ├── SelectLeaveTypeModal.tsx
    │       ├── ConfirmLeaveModal.tsx
    │       └── index.ts
    │
    ├── navigation/
    │   └── AppNavigator.tsx    # Root + Drawer + all sub-stacks
    │
    ├── screens/
    │   ├── Auth/
    │   │   ├── SplashScreen.tsx
    │   │   ├── LoginScreen.tsx
    │   │   └── OTPScreen.tsx
    │   ├── Home/
    │   │   └── HomeScreen.tsx
    │   ├── Distance/
    │   │   ├── DistanceScreen.tsx
    │   │   └── DistanceListScreen.tsx
    │   ├── Task/
    │   │   ├── TaskListScreen.tsx
    │   │   └── NewTaskScreen.tsx
    │   ├── Expense/
    │   │   └── ExpenseListScreen.tsx
    │   ├── Activity/
    │   │   └── ActivityListScreen.tsx
    │   ├── RTS/
    │   │   └── RTSListScreen.tsx
    │   ├── Assets/
    │   │   └── AssetsScreen.tsx
    │   ├── Analytics/
    │   │   └── AnalyticsScreen.tsx
    │   ├── Profile/
    │   │   └── ProfileScreen.tsx
    │   ├── DrawerContent.tsx
    │   ├── (other flat screens: TaskActivity, ActivityDetail, RTSDetails, etc.)
    │   └── ...
    │
    ├── services/
    │   └── storage.service.ts  # Local storage (token, user, preferences)
    │
    ├── theme/
    │   ├── index.ts            # Colors, Spacing, Radius, FontSize, Shadow (+ legacy colors/typography)
    │   ├── colors.ts           # (legacy)
    │   └── typography.ts       # (legacy)
    │
    ├── types/
    │   └── index.ts            # All TypeScript interfaces & param lists
    │
    └── utils/
        ├── index.ts
        ├── date.utils.ts
        └── format.utils.ts
```

## Backend integration

- **`src/api/client.ts`** – Set base URL, add auth headers and token refresh.
- **`src/api/endpoints.ts`** – Single place for all API paths.
- **`src/api/modules/*.api.ts`** – Feature-specific API calls using `client` and `endpoints`.
- **`src/services/storage.service.ts`** – For auth token and user; optionally switch to `@react-native-async-storage/async-storage` for persistence.
- **`src/types/index.ts`** – Keep in sync with API request/response types.

## Conventions

- **Screens** – Grouped by feature under `screens/<Feature>/`. Some screens still live at `screens/` root and are imported from there.
- **Components** – Shared UI in `components/common/`; feature-specific in `components/<feature>/`.
- **API** – All HTTP via `api/client` and `api/modules/*.api.ts`.
- **Theme** – Use `theme/index.ts` (Colors, Spacing, Radius, FontSize, Shadow).
