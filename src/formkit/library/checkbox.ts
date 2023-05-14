import {
    Checkbox as AntCheckbox,
    CheckboxGroup as AntCheckboxGroup,
} from 'ant-design-vue'
import { withOuterWrapperDivs, innerDiv } from './core'

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
    schema: withOuterWrapperDivs([
        {
            ...innerDiv,
            children: {
                if: '$antProps.options',
                then: [
                    {
                        $cmp: AntCheckboxGroup,
                        children: ['$label'],
                        bind: '$antProps',
                        props: {
                            onChange: '$handlers.handleGroupChange',
                            value: '$_value',
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
                        },
                    },
                ],
            },
        },
    ]),
    features: [customHandler],
}
