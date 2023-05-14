import {
    Checkbox as AntCheckbox,
    CheckboxGroup as AntCheckboxGroup,
} from 'ant-design-vue'
import { withDefaultFormKitSchema } from './utils'

function customHandler(node) {
    node.on('created', () => {
        Object.assign(node.context.handlers, {
            handleSingleChange: (e) => {
                node.input(!node.value)
            },
            handleGroupChange: (e) => {
                node.input(e)
            },
        })
    })
}

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
                        onChange: '$handlers.handleGroupChange',
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
                        onChange: '$handlers.handleSingleChange',
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
    features: [customHandler],
}
