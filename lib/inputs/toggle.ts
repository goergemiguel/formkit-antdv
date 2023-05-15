import { Switch as AntToggle } from 'ant-design-vue'
import { withDefaultFormKitSchema } from '../utils'
import { customAntInputHandlers } from '../handlers'

export default {
    type: 'input',
    props: ['label', 'antProps'],
    schema: withDefaultFormKitSchema([
        {
            $cmp: AntToggle,
            bind: '$antProps',
            props: {
                onChange: '$handlers.simpleInput',
                checked: '$_value',
                onBlur: '$handlers.blur',
                onFocus: '$handlers.touch',
            },
        },
    ]),
    features: [customAntInputHandlers],
}
