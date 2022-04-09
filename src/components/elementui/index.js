import { Button, Menu, MenuItem, Icon } from 'element-ui';

const coms = [Button, Menu, MenuItem, Icon]

export default {
    install(Vue, options) {
        coms.map(c => {
            Vue.component(c.name, c)
        })
    }
}