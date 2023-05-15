import { InputPassword as AntInputPassword } from 'ant-design-vue'
import { withDefaultFormKitSchema } from './utils'

export default {
    type: 'input',
    props: ['label', 'antProps', 'required'],
    schema: withDefaultFormKitSchema([
        {
            $cmp: AntInputPassword,
            bind: '$antProps',
            props: {
                onChange: '$handlers.DOMInput',
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
}
