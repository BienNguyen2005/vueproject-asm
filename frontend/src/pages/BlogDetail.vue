<template>
  <PageHeader 
    className='post-heading' 
    :bg="article.image"
    :title="article.title"
    subHeading='Problems look mighty small from 150 miles up'
  >
  <span class="meta">
    Posted by
    <a href="#!">{{ article.author }}</a>
    on {{ formatDate(article.updateAt) }}
  </span>
  </PageHeader>

  <article class="mb-4">
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <p>{{ article.body }}</p>
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
      var strArray=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      var d = date.slice(8, 10);
      var m = date.slice(5, 7);
      m = Number(m) -1;
      m = strArray[m];
      var y = date.slice(0, 4);
      return m + ' ' + d + ', ' + y;
    },
    async getArticle(id) {
      try {
        var data = await ArticleService.get(id);
        this.article.title = data.title;
        this.article.body = data.body;
        this.article.image = data.image;
        this.article.author = data.author;
        this.article.updateAt = data.updateAt;
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

<style>

</style>
