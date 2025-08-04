# GitHub Actions Workflows

This project uses GitHub Actions for continuous integration, code quality checks, and automated releases.

## Workflow Status

[![CI](https://github.com/destefanis/design-lint/actions/workflows/ci.yml/badge.svg)](https://github.com/destefanis/design-lint/actions/workflows/ci.yml)
[![Code Quality](https://github.com/destefanis/design-lint/actions/workflows/code-quality.yml/badge.svg)](https://github.com/destefanis/design-lint/actions/workflows/code-quality.yml)
[![Security](https://github.com/destefanis/design-lint/actions/workflows/security.yml/badge.svg)](https://github.com/destefanis/design-lint/actions/workflows/security.yml)
[![Figma Plugin Validation](https://github.com/destefanis/design-lint/actions/workflows/figma-plugin-validation.yml/badge.svg)](https://github.com/destefanis/design-lint/actions/workflows/figma-plugin-validation.yml)

## Workflows

### 1. CI (Continuous Integration)

**File:** `ci.yml`
**Triggers:** Push to main branches, Pull requests
**Purpose:** Main CI pipeline for testing and building

**Jobs:**

- **Test**: Runs tests on Node.js 16.x, 18.x, and 20.x
- **Build**: Builds the project and uploads artifacts
- **Type Check**: Validates TypeScript types
- **Lint**: Checks code formatting with Prettier

### 2. Code Quality

**File:** `code-quality.yml`
**Triggers:** Pull requests, Push to main branches
**Purpose:** Enforces code quality standards

**Jobs:**

- **Quality**: Runs Prettier, checks for console statements and TODOs
- **Commit Lint**: Validates commit messages follow conventional format
- **Bundle Size**: Reports on build size

### 3. Security

**File:** `security.yml`
**Triggers:** Push, Pull requests, Weekly schedule
**Purpose:** Security scanning and vulnerability detection

**Jobs:**

- **NPM Audit**: Checks for known vulnerabilities in dependencies
- **CodeQL**: Static analysis for security issues
- **Dependency Review**: Reviews dependency changes in PRs
- **Secrets Scan**: Scans for accidentally committed secrets

### 4. Figma Plugin Validation

**File:** `figma-plugin-validation.yml`
**Triggers:** Changes to plugin files
**Purpose:** Validates Figma plugin structure and requirements

**Jobs:**

- **Validate Manifest**: Checks manifest.json structure
- **Validate Plugin Structure**: Ensures proper Figma API usage

### 5. Release

**File:** `release.yml`
**Triggers:** Git tags (v*.*.\*)
**Purpose:** Automated release creation and Figma deployment

**Jobs:**

- **Build and Release**: Creates GitHub releases with artifacts
- **Publish to Figma**: Automatically deploys to Figma Community using [figma-plugin-deploy](https://github.com/typper-io/figma-plugin-deploy)

### 6. Dependabot

**File:** `dependabot.yml`
**Purpose:** Automated dependency updates

**Configuration:**

- Weekly updates for npm packages
- Groups minor and patch updates
- Separate handling for dev dependencies
- Ignores major updates for critical packages

## Branch Protection Rules

Recommended settings for the main branch:

- Require pull request reviews
- Require status checks to pass:
  - CI / Test
  - CI / Build
  - CI / Type Check
  - Code Quality / Code Quality Checks
- Require branches to be up to date
- Require conversation resolution
- Require signed commits (optional)

## Local Development

To run workflows locally for testing:

```bash
# Install act (GitHub Actions local runner)
brew install act # macOS
# or
curl https://raw.githubusercontent.com/nektos/act/master/install.sh | sudo bash # Linux

# Run a specific workflow
act -W .github/workflows/ci.yml

# Run with specific event
act pull_request -W .github/workflows/code-quality.yml
```

## Secrets Required

The following secrets should be configured in repository settings:

### Optional Secrets

- `CODECOV_TOKEN`: For code coverage reporting

### For Automated Figma Deployment

- `FIGMA_EMAIL`: Figma account email
- `FIGMA_PASSWORD`: Figma account password
- `FIGMA_TOTP_SECRET`: 2FA TOTP secret for automated access

Note: Plugin ID and Team ID are automatically read from `manifest.json`

See [AUTOMATED_DEPLOYMENT.md](../../docs/AUTOMATED_DEPLOYMENT.md) for detailed setup instructions.

## Troubleshooting

### Workflow Failures

1. Check the Actions tab in GitHub for detailed logs
2. Run workflows locally with `act` to debug
3. Ensure all required secrets are configured
4. Verify file paths and permissions

### Common Issues

- **Type check failures**: Run `npm run type-check` locally
- **Lint failures**: Run `npm run lint:fix` locally
- **Test failures**: Run `npm test` locally
- **Security warnings**: Run `npm audit` locally
