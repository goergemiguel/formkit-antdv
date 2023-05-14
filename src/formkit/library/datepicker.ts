import { DatePicker as AntDatePicker } from 'ant-design-vue'
import { withDefaultFormKitSchema } from './utils'
import { customAntInputHandlers } from './handlers'

export default {
    type: 'input',
    props: ['label', 'antProps'],
    schema: withDefaultFormKitSchema([
        {
            $cmp: AntDatePicker,
            bind: '$antProps',
            props: {
                onChange: '$handlers.simpleInput',
                value: '$_value',
                onBlur: '$handlers.blur',
                onFocus: '$handlers.touch',
            },
        },
    ]),
    features: [customAntInputHandlers],
}
