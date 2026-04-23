# AdNova SaaS Prototype

A single-page SaaS implementation focused on Malaysian merchants.

## Included pages
- Landing
- Login / Register
- Dashboard
- AI Content Generator
- Meta Connection
- Publish Center
- Analytics
- Professional Bot Settings

## Persistence model (localStorage equivalent tables)
- `users`: id, email, plan, language, created_at
- `campaigns`: id, user_id, industry, product_name, country, state, city, platform, goal, tone, output_language, generated_content, created_at
- `publishes`: id, user_id, campaign_id, publish_type, platform, status, published_at
- `analytics`: id, user_id, campaign_id, metric_name, metric_value, metric_date
- `meta_connections`: id, user_id, status, account_name, connected_at
- `bot_settings`: id, user_id, platform, status, created_at

## Run locally
Open `index.html` in a browser.
