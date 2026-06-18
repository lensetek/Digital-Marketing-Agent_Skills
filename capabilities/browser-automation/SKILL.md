# Browser Automation Capability

## When to Use

Use this capability for opening pages, navigating web apps, clicking UI, filling forms, taking screenshots, testing landing pages, checking responsive behavior, and verifying served frontend behavior.

## Preferred Implementation

- Use browser automation tools, Playwright, or an available in-app browser connector first.
- Use scriptable browser checks for repeatable QA.
- Use Computer Use only when the browser/app cannot be controlled by normal automation or requires manual visual UI interaction.

## Inputs

- URL or local file path.
- Objective.
- Viewport/device targets.
- Allowed actions.
- Credentials policy and login state.
- Expected evidence: screenshot, notes, or test result.

## Outputs

- Browser QA Report.
- Screenshots or visual findings.
- Interaction log.
- Broken links, console errors, layout issues, or accessibility concerns.
- Recommendation and next action.

## Security and Ethics

- Do not enter secrets unless the user explicitly approves a secure login flow.
- Do not expose cookies, tokens, private URLs, or account details in reports.
- Treat public frontend, browser JavaScript, and public assets as non-secret surfaces.
