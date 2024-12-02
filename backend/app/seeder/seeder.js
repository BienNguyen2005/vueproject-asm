const mongoose = require('mongoose');
const Article = require('../models/Article');
const User = require('../models/User');
const config = require('../config');

const articles = [
    {
        title: "Hướng dẫn học React từ cơ bản đến nâng cao",
        body: "React là một thư viện JavaScript phổ biến để xây dựng giao diện người dùng...",
        image: "https://example.com/images/react-tutorial.jpg",
        author: "Minh Hiếu",
        createAt: new Date(),
        updateAt: new Date()
    },
    {
        title: "Tìm hiểu về NodeJS và Express",
        body: "Node.js là một môi trường runtime JavaScript được xây dựng trên Chrome's V8 Engine...",
        image: "https://example.com/images/nodejs-express.jpg",
        author: "Thu Hà",
        createAt: new Date(),
        updateAt: new Date()
    },
    {
        title: "MongoDB cơ bản",
        body: "MongoDB là một cơ sở dữ liệu NoSQL document-oriented...",
        image: "https://example.com/images/mongodb-basics.jpg",
        author: "Văn Nam",
        createAt: new Date(),
        updateAt: new Date()
    }
];

const users = [
    {
        userName: "Minh Hiếu",
        email: "minhhieu@example.com",
        password: "password123"
    },
    {
        userName: "Thu Hà",
        email: "thuha@example.com",
        password: "password456"
    },
    {
        userName: "Văn Nam",
        email: "vannam@example.com",
        password: "password789"
    }
];

// Kết nối database
mongoose.connect(config.db.uri)
    .then(async () => {
        console.log('Kết nối database thành công!');
        
        try {
            // Xóa dữ liệu cũ
            await Article.deleteMany({});
            await User.deleteMany({});
            
            // Thêm dữ liệu mới
            await Article.insertMany(articles);
            await User.insertMany(users);
            
            console.log('Đã thêm dữ liệu mẫu thành công!');
        } catch (error) {
            console.error('Lỗi khi thêm dữ liệu:', error);
        } finally {
            mongoose.connection.close();
        }
    })
    .catch((error) => {
        console.error('Lỗi kết nối database:', error);
    });
