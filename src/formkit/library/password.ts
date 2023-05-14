import { InputPassword as AntInputPassword } from 'ant-design-vue'
import { withDefaultFormKitSchema } from './utils'

export default {
    type: 'input',
    props: ['label', 'antProps'],
    schema: withDefaultFormKitSchema([
        {
            $cmp: AntInputPassword,
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
