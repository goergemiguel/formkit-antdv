import { RadioGroup as AntRadioGroup } from 'ant-design-vue'
import { withOuterWrapperDivs, innerDiv, helpText, errorMessages } from './core'

export default {
    type: 'input',
    props: ['label', 'options', 'antProps'],
    schema: withOuterWrapperDivs([
        {
            ...innerDiv,
            children: [
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
        },
        helpText,
        errorMessages,
    ]),
}
