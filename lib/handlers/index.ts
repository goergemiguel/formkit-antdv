export function customAntInputHandlers(node: any) {
    node.on('created', () => {
        Object.assign(node.context.handlers, {
            toggleInput: () => {
                node.input(!node.value)
            },
            simpleInput: (e: Event) => {
                node.input(e)
            },
        })
    })
}
