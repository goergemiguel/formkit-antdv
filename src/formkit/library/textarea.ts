import { Textarea as AntTextArea } from 'ant-design-vue'
import { withDefaultFormKitSchema } from './utils'

export default {
    type: 'input',
    props: ['label', 'antProps'],
    schema: withDefaultFormKitSchema([
        {
            $cmp: AntTextArea,
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
