import { Switch as AntToggle } from 'ant-design-vue'
import { withDefaultFormKitSchema } from './utils'

function customHandler(node) {
    node.on('created', () => {
        Object.assign(node.context.handlers, {
            handleChange: (e) => {
                node.input(!node.value)
            },
        })
    })
}

export default {
    type: 'input',
    props: ['label', 'antProps'],
    schema: withDefaultFormKitSchema([
        {
            $cmp: AntToggle,
            bind: '$antProps',
            props: {
                onChange: '$handlers.handleChange',
                checked: '$_value',
                onBlur: '$handlers.blur',
                onFocus: '$handlers.touch',
            },
        },
    ]),
    features: [customHandler],
}
