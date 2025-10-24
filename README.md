# Social Support Application

This project is a front-end implementation for a government social support portal, developed as a case study. It features a multi-step form wizard designed to allow citizens to apply for financial assistance easily and efficiently, with AI-powered assistance for descriptive fields.

## Features

- **Multi-Step Form Wizard:** A user-friendly 3-step application process with a progress bar.
- **AI-Powered Assistance:** A "Help Me Write" feature integrated with an OpenAI-compatible API to help users articulate their situation.
- **Responsive Design:** The application is fully responsive and works on mobile, tablet, and desktop devices.
- **Internationalization:** Supports English and Arabic (RTL) languages.
- **Form Validation:** Robust client-side validation for all fields.
- **Local Progress Storage:** Saves form progress in `LocalStorage`, allowing users to continue their application later.
- **Accessibility:** Basic accessibility features like ARIA roles and keyboard navigation are implemented.

## Tech Stack

- **Programming language:** TypeScript
- **Framework:** React.js with Vite
- **UI Library:** Material-UI (MUI)
- **Form Management:** React Hook Form with Yup for schema validation
- **State Management:** React Context API
- **API Client:** Axios
- **Internationalization:** i18next & react-i18next
- **Routing:** React Router
- **Styling:** Emotion
- **Testing:** Jest, React Testing Library

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v18.x or later recommended)
- npm or yarn

### Installation

1.  Clone the repository to your local machine:
    ```bash
    git clone https://github.com/maksimworking24102994/social-support-portal
    ```
2.  Install the dependencies:
    ```bash
    npm install
    ```

### Configuration

The application requires an API key for the "Help Me Write" feature.

1.  Create a `.env` file in the root of the project.

    - **For macOS and Linux:**
      ```bash
      touch .env
      ```
    - **For Windows:**
      - Using Command Prompt:
        ```bash
        type nul > .env
        ```
      - Or using PowerShell:
        ```powershell
        New-Item -ItemType file .env
        ```

2.  Add your `API key`, `OpenAI Model` and `API URL` to the `.env` file as follows:
    ```
    API_URL=Your_API_URL
    OPENAI_MODEL=Your_OPENAI_MODEL
    OPENAI_API_KEY=Your_OPENAI_API_KEY
    ```

### Running the Application

Once the dependencies are installed and the configuration is set, you can run the application in development mode:

```bash
npm run dev
```

This will start the development server, and you can view the application by navigating to `http://localhost:5173` (or another port if 5173 is busy) in your web browser.

## Available Scripts

- `npm run dev`: Runs the app in development mode.
- `npm run build`: Builds the app for production to the `dist` folder.
- `npm run preview`: Serves the production build locally.
- `npm run test`: Runs tests.

## Project Structure

The project follows a standard React application structure:

```
/src
|-- /api              # Axios instance and base API configuration
|-- /components       # Reusable UI components
|   |-- /FormWizard   # The main multi-step form component
|   |   |-- /Steps    # Components for each step in the wizard
|   |-- /HelpMeWrite  # AI-powered text generation component
|-- /config           # Environment variable handling
|-- /lib              # Core logic, hooks, context, and utilities
|   |-- /constants    # Global constants, such as select options
|   |-- /context      # React Context providers for state management
|   |-- /hooks        # Custom React hooks
|   |-- /schemas      # Yup validation schemas
|-- /pages            # Top-level page components (e.g., Home)
|-- /providers        # Global providers (theme, router, i18n)
|-- /services         # API service definitions (e.g., openai.ts)
|-- App.tsx           # Main application component with routing
|-- main.tsx          # Application entry point
```

## Architectural Decisions & Potential Improvements

### Decisions

- **Component-Based Architecture:** The UI is broken down into reusable components, promoting modularity and maintainability.
- **Centralized State Management (React Context):** React Context API is used for managing global state like form data and language direction. This provides a simple yet effective way to share state across components without relying on larger state management libraries like Redux, which would be overkill for this project's scale.
- **MUI for UI:** Material-UI was chosen for its comprehensive set of components, theming capabilities, and out-of-the-box support for RTL.
- **React Hook Form & Yup for Forms:** `react-hook-form` is used for managing form state and performance, leveraging uncontrolled inputs to minimize re-renders. It integrates seamlessly with `yup` for powerful, schema-based validation for each step of the wizard.
- **Vite for Build Tooling:** Vite was chosen as the build tool for its fast development server and efficient production builds, offering a superior developer experience compared to alternatives like Webpack-based Create React App.

### Potential Improvements

- **Backend API Integration:** Replace the mock submission with a real backend API call to persist the application data.
- **Enhanced Accessibility:** Conduct a full accessibility audit and implement more advanced ARIA attributes and patterns.
- **CI/CD Pipeline:** Set up a CI/CD pipeline to automate testing and deployment.
