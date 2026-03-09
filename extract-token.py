#!/usr/bin/env python3
import browser_cookie3
import sys

try:
    cj = browser_cookie3.chrome(domain_name='udemy.com')
    cookies = {cookie.name: cookie.value for cookie in cj}
    
    access_token = cookies.get('access_token', '').strip('"')
    client_id = cookies.get('client_id', '')
    
    if not access_token or not client_id:
        print("Error: Could not find access_token or client_id in Chrome cookies.", file=sys.stderr)
        print("Make sure you're logged into Udemy in Chrome.", file=sys.stderr)
        sys.exit(1)
    
    if '--json' in sys.argv:
        import json
        print(json.dumps({'access_token': access_token, 'client_id': client_id}))
    else:
        print(f"Access Token: {access_token}")
        print(f"Client ID: {client_id}")
except Exception as e:
    print(f"Error: {e}", file=sys.stderr)
    sys.exit(1)
