const config = {
    app: {
        port: process.env.PORT || 8080,
    },
    db: {
        uri: process.env.MONGODB_URI || "mongodb+srv://minhhieuanlao1970:xaKSBpKqidWAStmy@blog.pdjww.mongodb.net/?retryWrites=true&w=majority&appName=blog",
    },
};

module.exports = config;