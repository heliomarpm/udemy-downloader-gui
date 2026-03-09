#!/usr/bin/env node
const { execSync } = require('child_process');
const path = require('path');

function extractCookies() {
  try {
    const scriptPath = path.join(__dirname, 'extract-token.py');
    const result = execSync(`python3 "${scriptPath}" --json`, { encoding: 'utf8' });
    return JSON.parse(result.trim());
  } catch (error) {
    return null;
  }
}

function autoLoadToken(Settings) {
  if (!Settings.accessToken) {
    const cookies = extractCookies();
    if (cookies) {
      Settings.accessToken = cookies.access_token;
      console.log('Auto-loaded access token from Chrome cookies');
      return true;
    }
  }
  return false;
}

if (require.main === module) {
  try {
    const cookies = extractCookies();
    if (cookies) {
      console.log('Access Token:', cookies.access_token);
      console.log('Client ID:', cookies.client_id);
    } else {
      console.error('Failed to extract cookies. Make sure you are logged into Udemy in Chrome.');
      process.exit(1);
    }
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

module.exports = { extractCookies, autoLoadToken };
