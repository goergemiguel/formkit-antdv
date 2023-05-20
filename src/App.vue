<script setup lang="ts">
import { ref } from 'vue'
import BasicSchema from './components/BasicSchema.vue'
import GridSchema from './components/GridSchema.vue'

const form = ref({})
</script>

<template>
    <div class="max-w-2xl mx-auto py-8">
        <div class="col-span-2">
            <FormKit type="group" v-model="form">
                <h2 class="text-xl mb-8 underline">Basic Schema</h2>
                <BasicSchema />
                <h2 class="text-xl mb-8 underline">Grid Schema</h2>
                <GridSchema />
            </FormKit>
        </div>
        <div class="fixed top-0 right-0 bg-gray-50 h-full p-4 text-xs">
            <code>
                <pre>{{ form }}</pre>
            </code>
        </div>
    </div>
</template>
