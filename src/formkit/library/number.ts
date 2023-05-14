import { InputNumber as AntInputNumber } from 'ant-design-vue'
import { withDefaultFormKitSchema } from './utils'
import { customAntInputHandlers } from './handlers'

export default {
    type: 'input',
    props: ['label', 'antProps'],
    schema: withDefaultFormKitSchema([
        {
            $cmp: AntInputNumber,
            bind: '$antProps',
            props: {
                onChange: '$handlers.simpleInput',
                value: '$_value',
                class: 'w-full',
                onBlur: '$handlers.blur',
                onFocus: '$handlers.touch',
            },
        },
    ]),
    features: [customAntInputHandlers],
}
