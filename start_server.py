# -*- coding: utf-8 -*-
"""
Quick local launcher for Telecom Reader
Runs local HTTP server and automatically opens browser
"""
import http.server
import socketserver
import webbrowser
import os

PORT = 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

if __name__ == "__main__":
    url = f"http://localhost:{PORT}/index.html"
    print(f"==================================================")
    print(f"📡 TELECOM BILINGUAL READER - KỸ THUẬT TRUYỀN THÔNG")
    print(f"Server is running at: {url}")
    print(f"File path: {os.path.join(DIRECTORY, 'index.html')}")
    print(f"Press Ctrl+C to stop the server.")
    print(f"==================================================")
    
    webbrowser.open(url)
    
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped.")
