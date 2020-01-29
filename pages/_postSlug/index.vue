<template>
  <div class="topContent">
    <div class="topContent__main">
      <article class="entry">
        <header class="entry-header">
          <h1 class="postContent__title">
            {{ postData[0].title.rendered }}
          </h1>
        </header>
        <div v-html="postData[0].content.rendered" class="entry-content" />
      </article>
    </div>
    <div class="topContent__sub" />
  </div>
</template>

<style lang="scss">
  // 投稿コンテンツ
  .postContent {
    &__title {
      font-size: 1.4em;
    }
    &__content {
      & * {
        box-sizing: border-box;
      }
    }
  }
</style>
<script>
import '@/assets/scss/content.scss'
export default {
  async asyncData({ store, params, $axios }) {
    let data = store.state.postList.filter(item => item.slug === params.postSlug)
    // 記事データがない場合
    if (data.length === 0) {
      const basePostURL = process.env.siteUrl + 'posts?slug='
      data = await $axios.$get(basePostURL + params.postSlug)
    }
    return {
      postData: data
    }
  }
}
</script>
