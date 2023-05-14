function customHandler() {
    console.log('eaweaweaw')
}

export const outerDiv = {
    $el: 'div',
    attrs: {
        class: '$classes.outer',
    },
    children: [
        {
            $el: 'div',
            attrs: {
                class: '$classes.wrapper',
            },
            children: [],
        },
    ],
}

export const wrapperDiv = {
    $el: 'div',
    attrs: {
        class: '$classes.wrapper',
    },
    children: [],
}

export const innerDiv = {
    $el: 'div',
    attrs: {
        class: '$classes.inner',
    },
    children: [],
}

export const labelText = {
    $el: 'label',
    if: '$label',
    attrs: {
        class: '$classes.label',
    },
    children: '$label',
}

export const helpText = {
    $el: 'div',
    if: '$help',
    attrs: {
        class: '$classes.help',
    },
    children: '$help',
}

export const errorMessages = {
    $el: 'ul',
    attrs: {
        class: '$classes.messages',
    },
    children: [
        {
            $el: 'li',
            for: ['message', '$messages'],
            attrs: {
                class: '$classes.message pl-2',
            },
            children: '$message.value',
        },
    ],
}

export const withOuterWrapperDivs = (wrapperChildren: any[]) => {
    return {
        ...outerDiv,
        children: [
            {
                ...wrapperDiv,
                children: [...wrapperChildren],
            },
        ],
    }
}
