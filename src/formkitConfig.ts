import { defaultConfig } from '@formkit/vue'
import { createProPlugin, inputs } from '@formkit/pro'
import { generateClasses } from '@formkit/themes'
import { inputs as customInputs, theme } from '../lib'

const proPlugins = createProPlugin('fk-2ed9ffbc9', inputs)

const config = defaultConfig({
    plugins: [proPlugins],
    config: {
        classes: generateClasses(theme),
    },
    inputs: customInputs,
})

export default config
