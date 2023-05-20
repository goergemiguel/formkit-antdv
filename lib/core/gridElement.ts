export default function makeGridElement(
    children: any[] | Object,
    attrs?: Object | null
) {
    return {
        $el: 'div',
        attrs: {
            class: 'grid grid-cols-2 gap-x-4 gap-y-4',
            ...attrs,
        },
        children: children,
    }
}
