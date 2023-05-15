import { InputNumber as AntInputNumber } from 'ant-design-vue'
import { withDefaultFormKitSchema } from '../utils'
import { customAntInputHandlers } from '../handlers'

export default {
    type: 'input',
    props: ['label', 'antProps', 'required'],
    schema: withDefaultFormKitSchema([
        {
            $cmp: AntInputNumber,
            bind: '$antProps',
            props: {
                class: '$classes.innerChild',
                onChange: '$handlers.simpleInput',
                value: '$_value',
                onBlur: '$handlers.blur',
                onFocus: '$handlers.touch',
                status: {
                    if: '$fns.length($messages) > 0',
                    then: 'error',
                    else: '',
                },
            },
        },
    ]),
    features: [customAntInputHandlers],
}
