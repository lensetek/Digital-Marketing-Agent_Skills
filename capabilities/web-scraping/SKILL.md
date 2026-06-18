# Web Scraping Capability

## When to Use

Use this capability to extract public structured data from web pages, such as product listings, headings, metadata, FAQ content, pricing tables, schema markup, or competitor landing page elements.

## Preferred Implementation

- Use HTTP clients, HTML parsers, structured data extraction, or Playwright when rendering is required.
- Prefer small, respectful, task-specific extraction.
- Use Computer Use only if a page cannot be accessed with scripts and the user approves UI-based extraction.

## Inputs

- URLs.
- Data fields to extract.
- Rate and scope limits.
- Allowed pages.
- Output format.

## Outputs

- Extracted data table or JSON.
- Source URL per row.
- Extraction notes.
- Errors or missing fields.
- Data quality warnings.

## Security and Ethics

- Scrape only public data or user-authorized data.
- Do not bypass access controls, CAPTCHAs, login gates, or paywalls.
- Do not collect credentials, private customer data, or sensitive personal data.
- Respect site terms and rate limits.
