import { DatePicker as AntDatePicker } from 'ant-design-vue'
import dayjs from 'dayjs'
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
            handleChangeDate: (e) => {
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
                    $cmp: AntDatePicker,
                    bind: '$antProps',
                    props: {
                        onChange: '$handlers.handleChangeDate',
                        value: '$_value',
                    },
                },
            ],
        },
        helpText,
        errorMessages,
    ]),
    features: [customHandler],
}
