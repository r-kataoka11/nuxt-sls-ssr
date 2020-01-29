const basePostlistURL = process.env.siteUrl + 'posts?_embed&per_page=5&page='

export default {
  async getPostList({ commit, state }) {
    const response = await this.$axios.$get(basePostlistURL + state.page)
    commit('setPostList', response)
    commit('setFirstPostList')
  }
}
