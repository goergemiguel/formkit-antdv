export default {
    $el: 'div',
    if: '$label',
    attrs: {
        class: '$classes.label',
    },
    children: {
        if: '$required',
        then: [
            '$label',
            {
                $el: 'span',
                attrs: {
                    class: '$classes.asterisk',
                },
                children: '*',
            },
        ],
        else: '$label',
    },
}
