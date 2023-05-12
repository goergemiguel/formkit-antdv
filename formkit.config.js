import { plugin, defaultConfig } from '@formkit/vue'
import { createProPlugin, inputs } from '@formkit/pro'

import '@formkit/themes/genesis'
import '@formkit/pro/genesis'

const proPlugins = createProPlugin('fk-2ed9ffbc9', inputs)
const config = defaultConfig({
    plugins: [proPlugins],
})

export default config
