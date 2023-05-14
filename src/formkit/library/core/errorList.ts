export default {
    $el: 'ul',
    attrs: {
        class: '$classes.messages',
    },
    children: [
        {
            $el: 'li',
            for: ['message', '$messages'],
            attrs: {
                class: '$classes.message',
            },
            children: '$message.value',
        },
    ],
}
