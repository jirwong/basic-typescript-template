# Basic TypeScript Template

A minimal, opinionated TypeScript template for Node.js projects. Includes modern tooling for development, testing, and code quality.

## Quick Start

### Prerequisites

- **Node.js 22.16.0** (managed by `.node-version` and `.nvmrc`)
- **pnpm 10.26.1** (see `packageManager` in `package.json`)

### Setup

```bash
# Install dependencies
pnpm install

# This automatically installs git hooks via Lefthook
```

### Development

```bash
# Build and run once
pnpm dev

# Watch mode - rebuild and rerun on changes
pnpm dev:watch

# Type-check without building
pnpm typecheck

# Run tests
pnpm test

# Watch mode for tests
pnpm test:watch
```

## Available Commands

| Command             | Purpose                                     |
| ------------------- | ------------------------------------------- |
| `pnpm dev`          | Build and run TypeScript with esbuild       |
| `pnpm dev:watch`    | Watch src and rebuild/rerun on changes      |
| `pnpm build`        | Compile TypeScript to JavaScript in `dist/` |
| `pnpm typecheck`    | Type-check without emitting code            |
| `pnpm lint`         | Run ESLint on src directory                 |
| `pnpm lint:fix`     | Run ESLint with auto-fix                    |
| `pnpm test`         | Run tests once with Vitest                  |
| `pnpm test:watch`   | Run tests in watch mode                     |
| `pnpm format`       | Format all code with Prettier               |
| `pnpm format:check` | Check formatting without changes            |

## Project Structure

```
.
├── src/                    # TypeScript source files
├── dist/                   # Compiled JavaScript (generated)
├── .node-version          # Node version for nodenv
├── .nvmrc                 # Node version for NVM
├── tsconfig.json          # TypeScript configuration
├── package.json           # Dependencies and scripts
├── prettier.config.js     # Prettier configuration
├── eslint.config.js       # ESLint configuration
├── lefthook.yml           # Git hooks configuration
└── README.md              # This file
```

## Technology Stack

### Core

- **TypeScript 5.9.3** - Type-safe JavaScript with strict mode
- **esbuild 0.27.3** - Fast bundler and compiler
- **Node.js 22.16.0** - JavaScript runtime

### Development & Quality

- **Vitest 4.0.18** - Fast unit testing
- **ESLint 10.0.1** - Code linting with TypeScript support
- **Prettier 3.8.1** - Code formatting
- **Lefthook 2.1.1** - Git hooks for automated checks
- **nodemon 3.1.14** - Development auto-reload

### Runtime Dependencies

- **@t3-oss/env-core** - Type-safe environment variables
- **dotenv** - Load `.env` files
- **Zod** - TypeScript-first schema validation
- **es-toolkit** - Modern utility functions

## Code Quality

### Pre-commit Hooks

Git hooks are automatically installed when you run `pnpm install`:

- Runs ESLint on staged TypeScript files
- Formats code with Prettier
- Ensures code quality before commits

### Linting

```bash
# Check for issues
pnpm lint

# Auto-fix issues
pnpm lint:fix
```

### Type Safety

TypeScript strict mode is enabled. All files must have proper type annotations.

```bash
# Verify type safety
pnpm typecheck
```

### Testing

Unit tests use Vitest:

```bash
# Run all tests once
pnpm test

# Watch mode for development
pnpm test:watch
```

## Environment Variables

The project is configured for type-safe environment variables using `@t3-oss/env-core`:

1. Create a `.env` file in the project root
2. Define your environment variables
3. Use `dotenv` to load them
4. Access via validated schema

Example `.env`:

```
NODE_ENV=development
```

## Building for Production

```bash
# Compile TypeScript to JavaScript
pnpm build

# Output is in dist/index.js
```

## License

ISC
