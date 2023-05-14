import { InputNumber as AntInputNumber } from 'ant-design-vue'
import { withDefaultFormKitSchema } from './utils'

function customHandler(node) {
    node.on('created', () => {
        Object.assign(node.context.handlers, {
            handleChange: (e) => {
                node.input(e)
            },
        })
    })
}

export default {
    type: 'input',
    props: ['label', 'antProps'],
    schema: withDefaultFormKitSchema([
        {
            $cmp: AntInputNumber,
            bind: '$antProps',
            props: {
                onChange: '$handlers.handleChange',
                value: '$_value',
                class: 'w-full',
                onBlur: '$handlers.blur',
                onFocus: '$handlers.touch',
            },
        },
    ]),
    features: [customHandler],
}
