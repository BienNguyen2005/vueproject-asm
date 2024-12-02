<template>
    <footer class="modern-footer">
        <div class="footer-content">
            <!-- Logo và Giới thiệu -->
            <div class="footer-section">
                <h3 class="brand-name">Fox Blog</h3>
                <p class="brand-description">
                    Nơi chia sẻ kiến thức và kinh nghiệm về lập trình, công nghệ và cuộc sống.
                </p>
            </div>

            <!-- Liên kết nhanh -->
            <div class="footer-section">
                <h4>Liên Kết</h4>
                <ul class="footer-links">
                    <li><a href="/">Trang chủ</a></li>
                    <li><a href="/about">Giới thiệu</a></li>
                    <li><a href="/articles">Bài viết</a></li>
                    <li><a href="/contact">Liên hệ</a></li>
                </ul>
            </div>

            <!-- Danh mục -->
            <div class="footer-section">
                <h4>Danh Mục</h4>
                <ul class="footer-links">
                    <li><a href="/category/frontend">Frontend</a></li>
                    <li><a href="/category/backend">Backend</a></li>
                    <li><a href="/category/devops">DevOps</a></li>
                    <li><a href="/category/mobile">Mobile</a></li>
                </ul>
            </div>

            <!-- Liên hệ -->
            <div class="footer-section">
                <h4>Liên Hệ</h4>
                <div class="contact-info">
                    <p><i class="fas fa-envelope"></i> contact@foxblog.com</p>
                    <p><i class="fas fa-phone"></i> +84 123 456 789</p>
                    <p><i class="fas fa-map-marker-alt"></i> Hà Nội, Việt Nam</p>
                </div>
                <div class="social-links">
                    <a href="#" class="social-link"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
                    <a href="#" class="social-link"><i class="fab fa-linkedin-in"></i></a>
                    <a href="#" class="social-link"><i class="fab fa-github"></i></a>
                </div>
            </div>
        </div>

        <!-- Copyright -->
        <div class="footer-bottom">
            <div class="copyright">
                © {{ new Date().getFullYear() }} Fox Blog. All rights reserved.
            </div>
        </div>
    </footer>
</template>

<style scoped>
.modern-footer {
    background-color: #1a1a1a;
    color: #ffffff;
    padding: 60px 0 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;
    padding: 0 20px;
}

.footer-section {
    margin-bottom: 30px;
}

.brand-name {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 15px;
    color: #fff;
}

.brand-description {
    color: #b3b3b3;
    line-height: 1.6;
    margin-bottom: 20px;
}

h4 {
    color: #fff;
    font-size: 18px;
    margin-bottom: 20px;
    font-weight: 600;
}

.footer-links {
    list-style: none;
    padding: 0;
    margin: 0;
}

.footer-links li {
    margin-bottom: 12px;
}

.footer-links a {
    color: #b3b3b3;
    text-decoration: none;
    transition: color 0.3s ease;
}

.footer-links a:hover {
    color: #007bff;
}

.contact-info p {
    color: #b3b3b3;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.social-links {
    display: flex;
    gap: 15px;
    margin-top: 20px;
}

.social-link {
    color: #ffffff;
    background-color: #333;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: all 0.3s ease;
}

.social-link:hover {
    background-color: #007bff;
    transform: translateY(-3px);
}

.footer-bottom {
    border-top: 1px solid #333;
    margin-top: 40px;
    padding-top: 20px;
    text-align: center;
}

.copyright {
    color: #b3b3b3;
    font-size: 14px;
}

/* Responsive Design */
@media (max-width: 768px) {
    .footer-content {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 30px;
    }

    .footer-section {
        text-align: center;
    }

    .social-links {
        justify-content: center;
    }

    .contact-info p {
        justify-content: center;
    }
}
</style>

<script>
export default {
    name: 'CompFooter'
}
</script>