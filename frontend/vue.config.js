const url = 'http://127.0.0.1:3000'

module.exports = {
    devServer: {
        proxy: {
            '/api': {
                changeOrigin: true,
                cookieDomainRewrite: "127.0.0.1",
                logLevel: "debug",
                target: url,
                // onProxyReq: proxyReq => {
                //     // Browers may send Origin headers even with same-origin
                //     // requests. To prevent CORS issues, we have to change
                //     // the Origin to match the target URL.
                //     if (proxyReq.getHeader('origin')) {
                //         proxyReq.setHeader('origin', url);
                //     }
                // }
            },
            '/sockjs-node': {
                changeOrigin: true,
                cookieDomainRewrite: "127.0.0.1",
                logLevel: "debug",
                target: url,
            },
            '/socket.io': {
                changeOrigin: true,
                cookieDomainRewrite: "127.0.0.1",
                logLevel: "debug",
                target: url,
            },
        },
    },
};
