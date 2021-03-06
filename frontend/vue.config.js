const url = "http://127.0.0.1:3000/api/chat";

module.exports = {
  devServer: {
    proxy: {
      "/": {
        changeOrigin: true,
        cookieDomainRewrite: "127.0.0.1",
        logLevel: "debug",
        target: url,
      },
      "/sockjs-node": {
        changeOrigin: true,
        cookieDomainRewrite: "127.0.0.1",
        logLevel: "debug",
        target: url,
      },
      "/socket.io": {
        changeOrigin: true,
        cookieDomainRewrite: "127.0.0.1",
        logLevel: "debug",
        target: url,
      },
    },
  },
};
