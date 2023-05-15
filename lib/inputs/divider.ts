import { Divider as AntDivider } from 'ant-design-vue'

export default {
    type: 'input',
    props: ['label', 'antProps'],
    schema: [
        {
            $cmp: AntDivider,
            bind: '$antProps',
        },
    ],
}
