# Frontend Challenges Monorepo

## Objective

The primary objective of this repository is to master monorepo architectures and advance Frontend Engineering skills. This project serves as a playground for implementing various frontend challenges and exercises from reputable sources, including:

- [FrontendEval](https://frontendeval.com/)
- [Frontend Mentor](https://www.frontendmentor.io/)

By consolidating these challenges into a single monorepo, we aim to simulate a real-world enterprise environment where multiple distinct applications share code, configurations, and tooling.

## Why Turborepo?

We have chosen **Turborepo** to manage this workspace. As the number of challenges (apps) grows, a monorepo offers significant advantages over maintaining separate repositories:

1.  **Efficient Caching**: Turborepo caches build and test results. If you haven't changed a package, Turborepo won't rebuild it, saving massive amounts of time.
2.  **Parallel Execution**: Tasks like linting, testing, and building can run in parallel across all cores, speeding up the workflow.
3.  **Shared Dependencies**: We can easily share UI components, utility logic, and configurations (ESLint, TypeScript) across all apps, ensuring consistency and reducing code duplication.
4.  **Unified Tooling**: A single `pnpm install` sets up the entire workspace.

## Architecture

This project follows a modern, enterprise-ready monorepo structure:

```text
/
├── apps/                   # Application entry points (The Challenges)
│   ├── faq-component/      # Example: FAQ Component Challenge
│   └── [future-apps]/      # Future challenges will live here
│
├── packages/               # Shared libraries and configurations
│   ├── ui/                 # Shared UI Component Library (Design System)
│   ├── eslint-config/      # Shared ESLint configurations
│   ├── typescript-config/  # Shared TypeScript configurations
│   └── [utils]/            # (Future) Shared utility functions
│
├── package.json            # Root configuration
├── pnpm-workspace.yaml     # Workspace definition
└── turbo.json              # Turborepo pipeline configuration
```

- **`apps/*`**: Contains the individual applications. Each challenge is its own app.
- **`packages/ui`**: A shared React component library. Common elements like Buttons, Cards, or ThemeProviders should be defined here and consumed by the apps.
- **`packages/*-config`**: strict, shared configurations to ensure code quality and consistency across the entire monorepo.

## How to Use

### Prerequisites

- **Node.js**: Latest LTS recommended.
- **pnpm**: This project uses `pnpm` for efficient package management.

### Getting Started

1.  **Install Dependencies**:

    ```bash
    pnpm install
    ```

2.  **Run Development Server**:
    To start all apps (or specific ones):

    ```bash
    pnpm dev
    ```

    _This will start the dev server for `faq-component` and any other apps._

3.  **Build**:
    To build all apps and packages:
    ```bash
    pnpm build
    ```

### Working with Apps

#### Example: FAQ Component

To work specifically on the `faq-component` app:

```bash
# Filter by the app name defined in its package.json
pnpm --filter faq-component dev
```

#### Creating a New App

To add a new challenge (e.g., `modal-component`):

1.  **Create the App**:
    Navigate to `apps/` and initialize a new Vite project:

    ```bash
    cd apps
    npm create vite@latest modal-component -- --template react-ts
    ```

2.  **Integrate with Monorepo**:
    - Update `apps/modal-component/package.json`:
      - Change `name` to `modal-component` (or `@repo/modal-component` if you prefer scoped names).
      - Add dependencies to shared packages if needed (e.g., `"@repo/ui": "workspace:*"`).
    - Run `pnpm install` from the root to link dependencies.

3.  **Start Coding**:
    ```bash
    pnpm --filter modal-component dev
    ```

### Quality Control

- **Linting**:
  ```bash
  pnpm lint
  ```
- **Type Checking**:
  ```bash
  pnpm check-types
  ```
