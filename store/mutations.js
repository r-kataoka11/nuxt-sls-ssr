export default {
  setPostList: function (state, obj) {
    state.postList = state.postList.concat(obj)
  },
  setPage: function (state, obj) {
    state.page = obj
  },
  nextPage: function (state) {
    state.page += 1
  },
  setFirstPostList: function (state) {
    state.firstGetPostList = true
  }
}
