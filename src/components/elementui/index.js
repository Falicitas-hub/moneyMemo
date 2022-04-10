import {
    Button,
    Menu,
    MenuItem,
    Icon,
    Tabs,
    TabPane,
    Form,
    FormItem,
    Select,
    Option,
    Input
} from 'element-ui';

const coms = [Input, Button, Menu, MenuItem, Icon, Tabs, TabPane, Form, FormItem, Select, Option]

export default {
    install(Vue, options) {
        coms.map(c => {
            Vue.component(c.name, c)
        })
    }
}