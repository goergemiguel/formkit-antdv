import { Button as AntButton } from 'ant-design-vue'
import { withDefaultFormKitSchema } from './utils'

export default {
    type: 'input',
    props: ['label', 'antProps'],
    schema: withDefaultFormKitSchema({
        if: '$antProps',
        then: [
            {
                $cmp: AntButton,
                children: ['$label'],
                bind: '$antProps',
            },
        ],
        else: [
            {
                $cmp: AntButton,
                children: ['$label'],
                bind: '$antProps',
                props: {
                    type: 'default',
                },
            },
        ],
    }),
}
