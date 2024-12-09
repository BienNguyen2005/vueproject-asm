<template>
  <div class="blog-list">
    <div class="blog-header">
      <h2>Blog</h2>
      <p>Here, we share travel tips, destination guides, and stories that inspire your next adventure.</p>
    </div>
    <div class="blog-categories">
      <button>All</button>
      <button>Destination</button>
      <button>Culinary</button>
      <button>Lifestyle</button>
      <button>Tips & Hacks</button>
    </div>
    <div class="blog-posts">
      <div class="post" v-for="(article, index) in articles" :key="index">
        <img :src="article.image" alt="Post Image" class="post-image">
        <div class="post-content">
          <h3 class="post-title">{{ article.title }}</h3>
          <p class="post-excerpt">{{ article.body }}</p>
          <div class="post-meta">
            <span>{{ formatDate(article.createAt) }}</span>
            <span>•</span>
            <span>{{ Math.ceil(article.body.length / 1000) }} mins read</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleService from "@/services/article.service.js";

export default {
  data() {
    return {
      articles: [],
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString('en-US', options);
    },
    async retrieveArticles() {
      try {
        this.articles = await ArticleService.getAll();
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.retrieveArticles();
  },
}
</script>

<style scoped>
.blog-list {
  padding: 20px;
}

.blog-header {
  text-align: center;
  margin-bottom: 20px;
}

.blog-categories {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

.blog-categories button {
  padding: 10px 20px;
  border: none;
  background-color: #f0f0f0;
  cursor: pointer;
  transition: background-color 0.3s;
}

.blog-categories button:hover {
  background-color: #ddd;
}

.blog-posts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.post {
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.post-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.post-content {
  padding: 15px;
}

.post-title {
  font-size: 1.25rem;
  margin-bottom: 10px;
}

.post-excerpt {
  color: #666;
  margin-bottom: 10px;
}

.post-meta {
  font-size: 0.9rem;
  color: #999;
}
</style>