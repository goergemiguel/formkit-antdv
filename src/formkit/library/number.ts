import { InputNumber as AntInputNumber } from 'ant-design-vue'
import {
    withOuterWrapperDivs,
    innerDiv,
    labelText,
    helpText,
    errorMessages,
} from './core'

function customHandler(node) {
    node.on('created', () => {
        Object.assign(node.context.handlers, {
            handleChange: (e) => {
                node.input(e)
            },
        })
    })
}

export default {
    type: 'input',
    props: ['label', 'antProps'],
    schema: withOuterWrapperDivs([
        labelText,
        {
            ...innerDiv,
            children: [
                {
                    $cmp: AntInputNumber,
                    bind: '$antProps',
                    props: {
                        onChange: '$handlers.handleChange',
                        value: '$_value',
                        class: 'w-full',
                        onBlur: '$handlers.blur',
                        onFocus: '$handlers.touch',
                    },
                },
            ],
        },
        helpText,
        errorMessages,
    ]),
    features: [customHandler],
}
