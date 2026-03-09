# Auto Token Extraction

This project now includes automatic token extraction from Chrome cookies, eliminating the need to manually copy/paste your Udemy access token.

## How It Works

When you click the login button, the app will automatically:
1. Try to extract your Udemy access token from Chrome cookies
2. If successful, log you in automatically
3. If unsuccessful, fall back to the manual token prompt

## Requirements

- Python 3 with `browser_cookie3` package installed
- Chrome browser with an active Udemy login session

## Installation

```bash
pip3 install browser_cookie3
```

## Manual Token Extraction

You can also extract the token manually using the command line:

```bash
# Print token and client ID
npm run extract-token

# Or run the Python script directly
python3 extract-token.py

# Get JSON output
python3 extract-token.py --json
```

## Files Added

- `extract-token.py` - Python script to extract cookies from Chrome
- `extract-token.js` - Node.js wrapper for integration with the app
- Modified `app/app.js` - Integrated auto-loading into login flow

## Troubleshooting

If auto-extraction fails:
- Make sure you're logged into Udemy in Chrome
- Ensure `browser_cookie3` is installed: `pip3 install browser_cookie3`
- The app will automatically fall back to manual token entry
