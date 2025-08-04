# Git Hooks Configuration

This project uses Git hooks to maintain code quality and consistency. The hooks are managed by Husky v9.

## Pre-commit Hook

Runs automatically before each commit:

- **Prettier**: Formats all staged files
- **Lint-staged**: Only processes staged files for efficiency

## Commit-msg Hook

Validates commit messages using Commitlint with conventional commit format:

### Valid commit types:

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code (formatting, etc.)
- `refactor`: Code change that neither fixes a bug nor adds a feature
- `perf`: Performance improvements
- `test`: Adding missing tests or correcting existing tests
- `build`: Changes that affect the build system or external dependencies
- `ci`: Changes to CI configuration files and scripts
- `chore`: Other changes that don't modify src or test files
- `revert`: Reverts a previous commit

### Examples:

```bash
# Good
git commit -m "feat: add dark mode support"
git commit -m "fix: resolve navigation bug in mobile view"
git commit -m "docs: update API documentation"

# Bad
git commit -m "Updated stuff"  # No type
git commit -m "FEAT: Add feature"  # Wrong case
git commit -m "feat: "  # No subject
```

## Pre-push Hook

Runs before pushing to remote:

- **TypeScript**: Type checks the entire codebase

## Manual Commands

```bash
# Check code formatting
npm run lint

# Fix code formatting
npm run lint:fix

# Run type checking
npm run type-check

# Run tests
npm test
```

## Bypassing Hooks (Use with caution!)

```bash
# Skip pre-commit hook
git commit --no-verify -m "commit message"

# Skip pre-push hook
git push --no-verify
```

## Troubleshooting

If hooks are not running:

```bash
# Reinstall husky
npm run prepare
```

If you get permission errors:

```bash
# Make hooks executable
chmod +x .husky/*
```
