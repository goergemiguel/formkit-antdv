export function customAntInputHandlers(node) {
    node.on('created', () => {
        Object.assign(node.context.handlers, {
            toggleInput: (e) => {
                node.input(!node.value)
            },
            simpleInput: (e) => {
                node.input(e)
            },
        })
    })
}
