const mongoose = require('mongoose');

// MongoDB connection URI - thay đổi theo thông tin của bạn
const uri = 'mongodb+srv://minhhieuanlao1970:xaKSBpKqidWAStmy@blog.pdjww.mongodb.net/?retryWrites=true&w=majority&appName=blog';

// Thử kết nối đến MongoDB
mongoose.connect(uri)
  .then(() => {
    console.log('Kết nối MongoDB thành công!');
  })
  .catch((error) => {
    console.error('Lỗi kết nối MongoDB:', error);
  });

// Đóng kết nối khi kết thúc
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Đã đóng kết nối MongoDB');
    process.exit(0);
  });
});
