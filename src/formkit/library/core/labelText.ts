export default {
    $el: 'div',
    if: '$label',
    attrs: {
        class: 'text-gray-600 text-sm mb-2',
    },
    children: {
        if: '$required',
        then: [
            '$label',
            {
                $el: 'span',
                attrs: {
                    class: 'ml-0.5 text-red-500',
                },
                children: '*',
            },
        ],
        else: '$label',
    },
}
