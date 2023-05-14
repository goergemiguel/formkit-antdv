import { Switch as AntToggle } from 'ant-design-vue'
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
                node.input(!node.value)
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
                    $cmp: AntToggle,
                    bind: '$antProps',
                    props: {
                        onChange: '$handlers.handleChange',
                        checked: '$_value',
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
