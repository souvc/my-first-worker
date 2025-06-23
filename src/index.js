/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	async fetch(request, env, ctx) {
		const url = new URL(request.url);
		const path = url.pathname;

		// 路由处理 - 根据请求路径分发到不同的处理逻辑
		switch (path) {
			// 首页路由 - 返回导航页面HTML
			case '/':
				return new Response(getNavigationPage(), {
					headers: { 'Content-Type': 'text/html; charset=utf-8' }
				});
			// API接口路由 - 返回JSON格式的问候消息
			case '/api/hello':
				return new Response(JSON.stringify({ message: 'Hello from API!' }), {
					headers: { 'Content-Type': 'application/json' }
				});
			// 关于页面路由 - 返回项目介绍页面HTML
			case '/about':
				return new Response(getAboutPage(), {
					headers: { 'Content-Type': 'text/html; charset=utf-8' }
				});
			// 默认路由 - 处理未匹配的路径，返回404错误
			default:
				return new Response('404 Not Found', { status: 404 });
		}
	},
};

// 导航页面HTML
function getNavigationPage() {
	return `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cloudflare Worker 导航页面</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .container {
            background: white;
            border-radius: 20px;
            padding: 40px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            text-align: center;
            max-width: 600px;
            width: 90%;
        }
        h1 {
            color: #333;
            margin-bottom: 20px;
            font-size: 2.5em;
        }
        .subtitle {
            color: #666;
            margin-bottom: 30px;
            font-size: 1.2em;
        }
        .nav-links {
            display: flex;
            flex-direction: column;
            gap: 15px;
            margin-bottom: 30px;
        }
        .nav-link {
            display: inline-block;
            padding: 15px 30px;
            background: linear-gradient(45deg, #667eea, #764ba2);
            color: white;
            text-decoration: none;
            border-radius: 10px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            font-weight: 500;
        }
        .nav-link:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }
        .info {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 10px;
            margin-top: 20px;
        }
        .info h3 {
            color: #333;
            margin-bottom: 10px;
        }
        .info p {
            color: #666;
            line-height: 1.6;
        }
        @media (min-width: 768px) {
            .nav-links {
                flex-direction: row;
                justify-content: center;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🚀 Cloudflare Worker</h1>
        <p class="subtitle">欢迎来到我的第一个 Worker 项目</p>
        
        <div class="nav-links">
            <a href="/" class="nav-link">🏠 首页</a>
            <a href="/about" class="nav-link">📖 关于</a>
            <a href="/api/hello" class="nav-link">🔗 API 测试</a>
        </div>
        
        <div class="info">
            <h3>项目信息</h3>
            <p>这是一个基于 Cloudflare Workers 的简单导航页面项目。</p>
            <p>项目包含基本的路由功能，可以处理不同的页面请求。</p>
            <p>当前时间: <span id="current-time"></span></p>
        </div>
    </div>
    
    <script>
        // 显示当前时间
        function updateTime() {
            const now = new Date();
            document.getElementById('current-time').textContent = now.toLocaleString('zh-CN');
        }
        updateTime();
        setInterval(updateTime, 1000);
    </script>
</body>
</html>
`;
}

// 关于页面HTML
function getAboutPage() {
	return `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>关于 - Cloudflare Worker</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
        }
        .container {
            background: white;
            border-radius: 20px;
            padding: 40px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            max-width: 800px;
            margin: 0 auto;
        }
        h1 {
            color: #333;
            margin-bottom: 20px;
            text-align: center;
        }
        .content {
            color: #666;
            line-height: 1.8;
            margin-bottom: 30px;
        }
        .features {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }
        .feature {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
        }
        .feature h3 {
            color: #333;
            margin-bottom: 10px;
        }
        .back-link {
            display: inline-block;
            padding: 12px 24px;
            background: linear-gradient(45deg, #667eea, #764ba2);
            color: white;
            text-decoration: none;
            border-radius: 8px;
            transition: transform 0.3s ease;
        }
        .back-link:hover {
            transform: translateY(-2px);
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>📖 关于这个项目</h1>
        
        <div class="content">
            <p>这是一个使用 Cloudflare Workers 构建的简单导航页面项目。该项目展示了如何在 Workers 环境中创建基本的 Web 应用程序。</p>
        </div>
        
        <div class="features">
            <div class="feature">
                <h3>🚀 快速部署</h3>
                <p>基于 Cloudflare 的全球边缘网络，实现快速响应</p>
            </div>
            <div class="feature">
                <h3>🔧 简单路由</h3>
                <p>实现了基本的路由功能，支持多页面导航</p>
            </div>
            <div class="feature">
                <h3>📱 响应式设计</h3>
                <p>适配不同设备屏幕，提供良好的用户体验</p>
            </div>
            <div class="feature">
                <h3>🎨 现代UI</h3>
                <p>使用现代CSS技术，创建美观的用户界面</p>
            </div>
        </div>
        
        <div style="text-align: center;">
            <a href="/" class="back-link">← 返回首页</a>
        </div>
    </div>
</body>
</html>
`;
}
