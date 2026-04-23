import http.server
import socketserver
import webbrowser
import os

# 设置端口
PORT = 8000

# 创建HTTP服务器
Handler = http.server.SimpleHTTPRequestHandler

# 设置服务器
with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"服务器启动在 http://localhost:{PORT}")
    print("按 Ctrl+C 停止服务器")
    
    # 自动打开浏览器
    webbrowser.open(f'http://localhost:{PORT}')
    
    # 启动服务器
    httpd.serve_forever()
