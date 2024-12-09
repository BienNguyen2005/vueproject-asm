<template>
  <PageHeader title='Edit Article' subHeading='Update your content' bg='assets/img/edit-bg.jpg' />
  
  <div class="edit-page">
    <div class="container">
      <div class="form-container">
        <form id="editForm" @submit.prevent="updateArticle">
          <!-- Title Input -->
          <div class="form-group">
            <label for="title">Title</label>
            <input 
              type="text"
              id="title"
              class="form-control"
              placeholder="Enter your article title"
              v-model="article.title"
              required
            />
          </div>

          <!-- Category Selection -->
          <div class="form-group">
            <label for="category">Category</label>
            <select 
              id="category"
              class="form-control"
              v-model="article.category"
              required
            >
              <option value="">Select a category</option>
              <option value="destination">Destination</option>
              <option value="culinary">Culinary</option>
              <option value="lifestyle">Lifestyle</option>
              <option value="tips">Tips & Hacks</option>
            </select>
          </div>

          <!-- Image URL Input -->
          <div class="form-group">
            <label for="image">Cover Image</label>
            <div class="image-upload">
              <input 
                type="text"
                id="image"
                class="form-control"
                placeholder="Enter the URL of your cover image"
                v-model="article.image"
                required
              />
              <button type="button" class="btn btn-outline" @click="uploadImage">
                <i class="fas fa-upload"></i>
              </button>
            </div>
            <div class="image-preview" v-if="article.image">
              <img :src="article.image" alt="Preview" @error="handleImageError">
            </div>
          </div>

          <!-- Content Input -->
          <div class="form-group">
            <label for="body">Content</label>
            <textarea 
              id="body"
              class="form-control"
              placeholder="Write your article content here..."
              v-model="article.body"
              required
            ></textarea>
          </div>

          <!-- Submit Button -->
          <div class="form-actions">
            <button type="button" class="btn btn-outline-secondary" @click="$router.push('/')">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary">
              Update Article
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
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
        category: "",
        author: this.$store.state.user.userName,
      },
    }
  },
  methods: {
    async updateArticle() {
      try {
        await ArticleService.update(this.id, this.article);
        this.$router.push('/');
      } catch (error) {
        console.log(error);
      }
    },
    async getArticle(id) {
      try {
        const data = await ArticleService.get(id);
        this.article = data;
      } catch (error) {
        console.log(error);
      }
    },
    handleImageError(e) {
      e.target.src = 'assets/img/default-cover.jpg';
    },
    uploadImage() {
      // Implement image upload functionality
      console.log('Image upload clicked');
    }
  },
  created() {
    this.getArticle(this.id);
  }
}
</script>

<style scoped>
.edit-page {
  padding: 3rem 0;
  background-color: #f8f9fa;
  min-height: calc(100vh - 300px);
}

.form-container {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  border-radius: 15px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);
  padding: 2rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.form-control {
  width: 100%;
  padding: 0.8rem;
  font-size: 1rem;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.form-control:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.image-upload {
  display: flex;
  gap: 10px;
}

.image-upload .form-control {
  flex: 1;
}

.image-preview {
  margin-top: 1rem;
  border-radius: 8px;
  overflow: hidden;
  border: 2px solid #e9ecef;
}

.image-preview img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}

textarea.form-control {
  min-height: 300px;
  resize: vertical;
}

.form-actions {
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e9ecef;
}

.btn {
  padding: 0.8rem 1.5rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary {
  background-color: #007bff;
  border: none;
  color: white;
}

.btn-primary:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
}

.btn-outline-secondary {
  border: 2px solid #6c757d;
  color: #6c757d;
  background: transparent;
}

.btn-outline-secondary:hover {
  background-color: #6c757d;
  color: white;
}

.btn-outline {
  border: 2px solid #e9ecef;
  background: transparent;
  color: #6c757d;
  padding: 0.8rem;
}

.btn-outline:hover {
  border-color: #007bff;
  color: #007bff;
}

@media (max-width: 768px) {
  .form-container {
    margin: 0 1rem;
    padding: 1.5rem;
  }

  .form-actions {
    flex-direction: column-reverse;
  }

  .btn {
    width: 100%;
  }
}
</style>