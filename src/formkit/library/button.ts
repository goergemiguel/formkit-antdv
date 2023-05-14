import { Button as AntButton } from 'ant-design-vue'
import { withOuterWrapperDivs, innerDiv } from './core'

export default {
    type: 'input',
    props: ['label', 'antProps'],
    schema: withOuterWrapperDivs([
        {
            ...innerDiv,
            children: {
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
            },
        },
    ]),
}
