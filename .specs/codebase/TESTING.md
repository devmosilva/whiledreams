# Testing

## Coverage matrix

| Layer | Required verification | Parallel-safe |
| --- | --- | --- |
| React/CSS presentation | Playwright screenshot at desktop and mobile | No |
| TypeScript components | `npm run typecheck` and `npm run lint` | Yes |
| Production integration | `npm run build` | No |

## Gate commands

- Quick: `npm run typecheck && npm run lint`
- Build: `npm run typecheck && npm run lint && npm run build`
- Visual: run the app and capture 1672×941 plus 390×844 with Playwright.

There is no automated component or end-to-end test suite in the current project. Visual regressions are verified through bounded screenshot review until a test suite is introduced.

