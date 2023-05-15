import { Select as AntSelect } from 'ant-design-vue'
import { withDefaultFormKitSchema } from './utils'
import { customAntInputHandlers } from './handlers'

export default {
    type: 'input',
    props: ['label', 'antProps', 'required'],
    schema: withDefaultFormKitSchema([
        {
            $cmp: AntSelect,
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
            bind: '$antProps',
        },
    ]),
    features: [customAntInputHandlers],
}
