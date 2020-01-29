import Vue from 'vue'
import moment from 'moment'

/**
 * date型のものをformat（例：2019.01.01）します
 * @param {date} date formatする日付
 * @return {string} formatした日付
 */
Vue.filter('dateFormat', function (date) {
  if (date) {
    return moment(date).format('YYYY.MM.DD')
  }
})
