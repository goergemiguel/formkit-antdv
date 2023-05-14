import { Textarea as AntTextArea } from 'ant-design-vue'
import {
    withOuterWrapperDivs,
    innerDiv,
    labelText,
    helpText,
    errorMessages,
} from './core'

export default {
    type: 'input',
    props: ['label', 'antProps'],
    schema: withOuterWrapperDivs([
        labelText,
        {
            ...innerDiv,
            children: [
                {
                    $cmp: AntTextArea,
                    bind: '$antProps',
                    props: {
                        onChange: '$handlers.DOMInput',
                        value: '$_value',
                    },
                },
            ],
        },
        helpText,
        errorMessages,
    ]),
}
