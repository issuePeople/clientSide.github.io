module.exports = {
    runtimeCompiler: true,
    devServer: {
        host: "0.0.0.0",
        port: 1024,
        allowedHosts: "all",
        proxy: {
            target: 'http://issuepeople-env.eba-bhtdckwp.us-west-2.elasticbeanstalk.com/',
            ws: true,
            changeOrigin: true
        }
    }
}