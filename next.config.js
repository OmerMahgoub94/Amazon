module.exports = {
    images: {
        domains: ['links.papareact.com', 'fakestoreapi.com']
    },
    rules: [
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        },
    ]
}