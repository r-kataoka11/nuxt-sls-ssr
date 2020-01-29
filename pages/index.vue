<template>
  <div class="topContent">
    <div class="topContent__main">
      <article v-for="item in $store.state.postList" v-bind:key="item.id" class="postList">
        <nuxt-link :to="{name:'postSlug', params: {postSlug: item.slug}}">
          <img :src="item.jetpack_featured_media_url">
          <h2 class="postList__title">
            {{ item.title.rendered }}
          </h2>
          <p class="postList__tag">
            <span v-for="tag in item._embedded['wp:term'][1]" v-bind:key="tag.id">{{ tag.name }}</span>
          </p>
          <p class="postList__date">
            {{ item.date | dateFormat }}
          </p>
        </nuxt-link>
      </article>
      <p @click="nextPostList" class="nextButton">
        Next
      </p>
    </div>
    <div class="topContent__sub" />
  </div>
</template>

<style lang="scss" scoped>
  // 投稿ページレイアウト
  .topContent {
    display: flex;
    max-width: 1280px;
    margin: 0 auto;

    &__main {
      flex: 1;
    }
    &__sub {
      width: 30%;
    }
  }

  // 投稿一覧（アイテム）
  .postList {
    margin-bottom: 1em;

    a {
      text-decoration: none;
      color: #333;
    }

    &__title {
      font-size: 1.4em;
    }
    &__tag {
      span {
        padding-right: 0.8em;
      }
      span + span {
        border-left: 1px solid #aaa;
        padding-left: 0.8em;
      }
    }
    &__date {
      color: #aaa;
      font-size: 0.8em;
    }
  }

  .nextButton {
    display: inline-block;
    background: #aaa;
    padding: 0.5em 1em;
    cursor: pointer;
  }
</style>

<script>
export default {
  async fetch({ store }) {
    if (!store.state.firstGetPostList) {
      await store.dispatch('getPostList')
    }
  },
  methods: {
    nextPostList: function () {
      this.$store.commit('nextPage')
      this.$store.dispatch('getPostList')
    }
  }
}
</script>
