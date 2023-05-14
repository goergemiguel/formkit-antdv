import { RadioGroup as AntRadioGroup } from 'ant-design-vue'
import { withDefaultFormKitSchema } from './utils'

export default {
    type: 'input',
    props: ['label', 'options', 'antProps'],
    schema: withDefaultFormKitSchema(
        [
            {
                $cmp: AntRadioGroup,
                children: ['$label'],
                bind: '$antProps',
                props: {
                    onChange: '$handlers.DOMInput',
                    value: '$_value',
                    onBlur: '$handlers.blur',
                    onFocus: '$handlers.touch',
                },
            },
        ],
        {
            showLabel: false,
        }
    ),
}
