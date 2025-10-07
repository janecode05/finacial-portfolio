````markdown
# Financial Portfolio Management System — Dashboard Overview

## Overview

This Angular dashboard component provides a web-based overview of a user's financial portfolio. It visualizes asset allocation and displays key metrics such as total investment value using interactive charts.

---

## Features

- **Responsive Dashboard UI**  
  Displays portfolio summary with total investment and asset allocation chart.

- **Interactive Pie Chart**  
  Visualizes investment distribution across asset types (stocks, bonds, mutual funds, etc.).

- **Mock Data Service**  
  Uses a BehaviorSubject to simulate portfolio investments.

- **Chart.js Integration**  
  Utilizes Chart.js (via ng2-charts) for rendering charts with dynamic data.

- **Standalone Component**  
  Uses Angular standalone component with explicit imports.

---

## Prerequisites

- Node.js (v20)  
- Angular CLI (v20)  
- npm  package manager

---

## Installation

1. Clone the repository

```bash
git clone <repository-url>
cd financial-portfolio
````

2. Install dependencies

```bash
npm install
```

3. Install peer dependencies for charts (if not installed)

```bash
npm install chart.js ng2-charts
```

---

## Running the Application

To start the Angular development server and open the dashboard overview:

```bash
ng serve
```

Navigate to `http://localhost:4200/dashboard` in your browser.

---

## Dashboard Overview Component Details

### Location

* Component file: `src/app/features/dashboard/components/overview/overview.component.ts`
* Template file: `src/app/features/dashboard/components/overview/overview.component.html`
* Styles file: `src/app/features/dashboard/components/overview/overview.component.scss`

### Key Points

* **Chart.js Registration:**
  Chart.js controllers and elements are registered explicitly in the component:

  ```ts
  import { Chart, registerables } from 'chart.js';
  Chart.register(...registerables);
  ```

* **Data Source:**
  Uses a mock `PortfolioService` with a `BehaviorSubject` to simulate portfolio investments.

* **Responsive Design:**
  The component uses CSS media queries to adjust chart size for smaller devices.

* **Pipes & Modules:**
  The component imports Angular's `CommonModule` to enable pipes like `number`.

---

## Testing

Test cases are written using Jasmine and Karma (if included).

To run tests:

```bash
ng test
```

---

## Notes

* The backend is mocked; no real data persistence.
* For chart customization, see [Chart.js Documentation](https://www.chartjs.org/docs/latest/).
* This component is lazy-loaded via Angular routing.

---

## Troubleshooting

### Error: `"pie" is not a registered controller`

Make sure the Chart.js registerables are imported and registered as shown above.

---

