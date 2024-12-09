<template>
  <PageHeader 
    className="post-heading" 
    :bg="article.image"
    :title="article.title"
    subHeading="Problems look mighty small from 150 miles up"
  />

  <article class="article-content">
    <div class="container">
      <div class="article-container">
        <!-- Article Meta -->
        <div class="article-meta">
          <div class="author-info">
            <div class="author-avatar">
              <i class="fas fa-user-circle"></i>
            </div>
            <div class="author-details">
              <span class="author-name">{{ article.author }}</span>
              <div class="post-info">
                <span class="post-date">
                  <i class="far fa-calendar-alt"></i>
                  {{ formatDate(article.updateAt) }}
                </span>
                <span class="read-time">
                  <i class="far fa-clock"></i>
                  {{ Math.ceil(article.body.length / 1000) }} phút đọc
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Article Content -->
        <div class="article-body">
          <p>{{ article.body }}</p>
        </div>

        <!-- Article Footer -->
        <div class="article-footer">
          <div class="share-section">
            <span class="share-text">Chia sẻ bài viết:</span>
            <div class="share-buttons">
              <button class="share-btn facebook">
                <i class="fab fa-facebook-f"></i>
              </button>
              <button class="share-btn twitter">
                <i class="fab fa-twitter"></i>
              </button>
              <button class="share-btn linkedin">
                <i class="fab fa-linkedin-in"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import PageHeader from "../components/PageHeader.vue";
import ArticleService from "@/services/article.service.js";

export default {
  components: {
    PageHeader,
  },
  props: {
    id: { type: String, required: true },
  },
  data() {
    return {
      article: {
        title: "",
        body: "",
        image: "",
        author: "",
        updateAt: "",
      },
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString('vi-VN', options);
    },
    async getArticle(id) {
      try {
        const data = await ArticleService.get(id);
        this.article = data;
      } catch (error) {
        console.log(error);
      }
    }
  },
  created() {
    this.getArticle(this.id);
  }
}
</script>

<style scoped>
.article-content {
  padding: 3rem 0;
  background-color: #f8f9fa;
  min-height: calc(100vh - 400px);
}

.article-container {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  border-radius: 15px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);
  padding: 2rem;
}

.article-meta {
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #eee;
}

.author-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.author-avatar {
  width: 50px;
  height: 50px;
  background: #f0f2f5;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.author-avatar i {
  font-size: 1.5rem;
  color: #666;
}

.author-details {
  display: flex;
  flex-direction: column;
}

.author-name {
  font-weight: 600;
  color: #2c3e50;
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
}

.post-info {
  display: flex;
  gap: 1.5rem;
  color: #666;
  font-size: 0.9rem;
}

.post-info i {
  margin-right: 0.5rem;
}

.article-body {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #2c3e50;
  margin-bottom: 2rem;
}

.article-body p {
  margin-bottom: 1.5rem;
  text-align: justify;
}

.article-footer {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #eee;
}

.share-section {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.share-text {
  color: #666;
  font-size: 0.95rem;
}

.share-buttons {
  display: flex;
  gap: 0.8rem;
}

.share-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.share-btn:hover {
  transform: translateY(-2px);
}

.facebook {
  background-color: #1877f2;
}

.twitter {
  background-color: #1da1f2;
}

.linkedin {
  background-color: #0a66c2;
}

@media (max-width: 768px) {
  .article-container {
    margin: 0 1rem;
    padding: 1.5rem;
  }

  .post-info {
    flex-direction: column;
    gap: 0.5rem;
  }

  .share-section {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>