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
import theme from './theme'

import text from './library/text'
import button from './library/button'
import checkbox from './library/checkbox'
import datepicker from './library/datepicker'
import textarea from './library/textarea'
import select from './library/select'
import radio from './library/radio'
import toggle from './library/toggle'

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
    inputs: {
        text: text,
        button: button,
        checkbox: checkbox,
        datepicker: datepicker,
        textarea: textarea,
        select: select,
        radio: radio,
        toggle: toggle,
    },
})

export default config
