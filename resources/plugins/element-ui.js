import Vue from 'vue'
import MenuItem from 'element-ui/lib/menu-item'
import Button from 'element-ui/lib/button'
import Alert from 'element-ui/lib/alert'
import Row from 'element-ui/lib/row'
import Col from 'element-ui/lib/col'
import Container from 'element-ui/lib/container'
import Main from 'element-ui/lib/main'
import Loading from 'element-ui/lib/loading'
import MessageBox from 'element-ui/lib/message-box'
import Menu from 'element-ui/lib/menu'

export default () => {
  Vue.use(Menu)
  Vue.use(MenuItem)
  Vue.use(Button)
  Vue.use(Alert)
  Vue.use(Row)
  Vue.use(Col)
  Vue.use(Container)
  Vue.use(Main)
  Vue.use(Loading.directive);

  Vue.prototype.$loading = Loading.service;
  Vue.prototype.$alert = MessageBox.alert;
  Vue.prototype.$prompt = MessageBox.prompt;
}
