import { Input as AntInput } from 'ant-design-vue'
import { withDefaultFormKitSchema } from './utils'

export default {
    type: 'input',
    props: ['label', 'antProps'],
    schema: withDefaultFormKitSchema([
        {
            $cmp: AntInput,
            bind: '$antProps',
            props: {
                onChange: '$handlers.DOMInput',
                value: '$_value',
                onBlur: '$handlers.blur',
                onFocus: '$handlers.touch',
            },
        },
    ]),
}
