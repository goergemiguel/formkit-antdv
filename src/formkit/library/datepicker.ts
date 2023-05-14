import { DatePicker as AntDatePicker } from 'ant-design-vue'

import { withDefaultFormKitSchema } from './utils'

function customHandler(node) {
    node.on('created', () => {
        Object.assign(node.context.handlers, {
            handleChangeDate: (e) => {
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
            $cmp: AntDatePicker,
            bind: '$antProps',
            props: {
                onChange: '$handlers.handleChangeDate',
                value: '$_value',
                onBlur: '$handlers.blur',
                onFocus: '$handlers.touch',
            },
        },
    ]),
    features: [customHandler],
}
