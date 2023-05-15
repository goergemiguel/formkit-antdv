import { defaultConfig } from '@formkit/vue'
import { createProPlugin, inputs } from '@formkit/pro'
import { generateClasses } from '@formkit/themes'
import {
    arrowDown,
    arrowUp,
    check,
    circle,
    close,
    down,
    fileDoc,
    spinner,
    star,
    trash,
    date,
    left,
    right,
} from '@formkit/icons'

import { inputs as customInputs } from './inputs'
import theme from './theme'

const proPlugins = createProPlugin('fk-2ed9ffbc9', inputs)

const config = defaultConfig({
    plugins: [proPlugins],
    config: {
        classes: generateClasses(theme),
    },
    icons: {
        // include supporting icons from @formkit/icons
        arrowDown,
        arrowUp,
        close,
        checkboxDecorator: check,
        fileItem: fileDoc,
        fileRemove: close,
        noFiles: fileDoc,
        radioDecorator: circle,
        select: down,
        spinner,
        star,
        trash,
        date,
        left,
        right,
    },
    inputs: customInputs,
})

export default config