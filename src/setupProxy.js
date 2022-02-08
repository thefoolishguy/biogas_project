const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = app => {
    app.use(
        createProxyMiddleware('/release/loginbiogas',
            {
                target:'https://ehy3b0lyhk.execute-api.us-east-1.amazonaws.com',
                changeOrigin: true
            }
        )
    )
}
