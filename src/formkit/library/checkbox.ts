import {
    Checkbox as AntCheckbox,
    CheckboxGroup as AntCheckboxGroup,
} from 'ant-design-vue'
import { withDefaultFormKitSchema } from './utils'
import { customAntInputHandlers } from './handlers'

export default {
    type: 'input',
    props: ['label', 'options', 'antProps'],
    schema: withDefaultFormKitSchema(
        {
            if: '$antProps.options',
            then: [
                {
                    $cmp: AntCheckboxGroup,
                    children: ['$label'],
                    bind: '$antProps',
                    props: {
                        onChange: '$handlers.simpleInput',
                        value: '$_value',
                        onBlur: '$handlers.blur',
                        onFocus: '$handlers.touch',
                    },
                },
            ],
            else: [
                {
                    $cmp: AntCheckbox,
                    children: ['$label'],
                    bind: '$antProps',
                    props: {
                        onChange: '$handlers.toggleInput',
                        checked: '$_value',
                        onBlur: '$handlers.blur',
                        onFocus: '$handlers.touch',
                    },
                },
            ],
        },
        {
            showLabel: false,
        }
    ),
    features: [customAntInputHandlers],
}
