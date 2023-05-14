<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
    firstName: 'Joji',
    selectedSingleCheckbox: true,
    selectedGroupCheckbox: 'group_2',
})

const horizontalLine = {
    $el: 'hr',
    attrs: {
        class: 'text-gray-100 my-8',
    },
}

const schema = [
    {
        $formkit: 'text',
        label: 'First Name',
        name: 'firstName',
        help: 'The persons first name',
    },
    horizontalLine,
    {
        $formkit: 'button',
        label: 'Default Button',
    },
    {
        $formkit: 'button',
        label: 'Primary Button',
        antProps: {
            type: 'primary',
        },
    },
    horizontalLine,
    {
        $formkit: 'checkbox',
        name: 'selectedSingleCheckbox',
        label: 'Single Checkbox',
    },
    {
        $formkit: 'checkbox',
        name: 'selectedGroupCheckbox',
        label: 'Group Checkbox',
        antProps: {
            options: [
                { label: 'Group 1', value: 'group_1' },
                { label: 'Group 2', value: 'group_2' },
                { label: 'Group 3', value: 'group_3' },
            ],
        },
    },
    horizontalLine,
    {
        $formkit: 'datepicker',
        name: 'dateOfBirth',
        label: 'Date of Birth',
        help: 'The date person is born in DD/MM/YYYY',
        antProps: {
            format: 'DD/MM/YYYY',
        },
    },
    horizontalLine,
    {
        $formkit: 'textarea',
        name: 'selfDescription',
        label: 'Description',
        help: 'Some description about self',
        antProps: {
            rows: 5,
        },
    },
    horizontalLine,
    {
        $formkit: 'select',
        name: 'favouriteFood',
        label: 'Favourite Food',
        help: 'Select your favourite dish',
        antProps: {
            options: [
                { label: 'Chicken Wings', value: 'chicken_wings' },
                { label: 'Spaghetti', value: 'spaghetti' },
                { label: 'Beef Stew', value: 'beef_stew' },
            ],
        },
    },
    horizontalLine,
    {
        $formkit: 'radio',
        name: 'selectedRadio',
        label: 'Radio',
        antProps: {
            options: [
                { label: 'Group 1', value: 'group_1' },
                { label: 'Group 2', value: 'group_2' },
                { label: 'Group 3', value: 'group_3' },
            ],
        },
    },
    {
        $formkit: 'radio',
        name: 'selectedRadio2',
        label: 'Group Radio',
        antProps: {
            optionType: 'button',
            options: [
                { label: 'Group 1', value: 'group_1' },
                { label: 'Group 2', value: 'group_2' },
                { label: 'Group 3', value: 'group_3' },
            ],
        },
    },
    horizontalLine,
    {
        $formkit: 'toggle',
        name: 'isResidentInHongKong',
        label: 'Resident of Hong Kong?',
    },
]
</script>

<template>
    {{ form }}
    <div class="max-w-lg mx-auto py-8">
        <FormKit type="form" v-model="form">
            <FormKitSchema :schema="schema" />
        </FormKit>
    </div>
</template>
