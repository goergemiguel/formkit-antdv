import { Select as AntSelect } from 'ant-design-vue'
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
                    $cmp: AntSelect,
                    props: {
                        class: 'w-full',
                        onChange: '$handlers.handleChange',
                        value: '$_value',
                        onBlur: '$handlers.blur',
                        onFocus: '$handlers.touch',
                    },
                    bind: '$antProps',
                },
            ],
        },
        helpText,
        errorMessages,
    ]),
    features: [customHandler],
}
