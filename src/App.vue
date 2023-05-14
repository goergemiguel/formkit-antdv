<script setup lang="ts">
import { ref } from 'vue'

const form = ref({})

const schema = [
    {
        $formkit: 'text',
        label: 'First Name',
        name: 'firstName',
        help: 'The persons first name',
        validation: 'required',
    },
    {
        $formkit: 'number',
        label: 'Salary',
        name: 'salary',
        help: 'Salary per month',
        validation: 'required',
    },
    {
        $formkit: 'password',
        label: 'Password',
        name: 'password',
        help: 'Choose a secure password',
        validation: 'required',
    },
    {
        $formkit: 'divider',
    },
    {
        $formkit: 'checkbox',
        name: 'selectedSingleCheckbox',
        label: 'Single Checkbox',
        validation: 'required',
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
        validation: 'min:2',
        validationVisibility: 'live',
        validationMessages: {
            min: 'Please select at least 2 group',
        },
    },
    {
        $formkit: 'divider',
    },
    {
        $formkit: 'datepicker',
        name: 'dateOfBirth',
        label: 'Date of Birth',
        help: 'The date person is born in DD/MM/YYYY',
        antProps: {
            format: 'DD/MM/YYYY',
        },
        validation: 'required',
    },
    {
        $formkit: 'divider',
    },
    {
        $formkit: 'textarea',
        name: 'selfDescription',
        label: 'Description',
        help: 'Some description about self',
        antProps: {
            rows: 5,
        },
        validation: 'required',
    },
    {
        $formkit: 'divider',
    },
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
        validation: 'required',
    },
    {
        $formkit: 'divider',
    },
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
        validation: 'required',
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
        validation: 'required',
    },
    {
        $formkit: 'divider',
    },
    {
        $formkit: 'toggle',
        name: 'isResidentInHongKong',
        label: 'Resident of Hong Kong?',
        validation: 'required',
    },
    {
        $formkit: 'divider',
    },
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
]
</script>

<template>
    <div class="max-w-lg mx-auto py-8">
        <div class="col-span-2">
            <FormKit type="form" v-model="form" :actions="false">
                <FormKitSchema :schema="schema" />
            </FormKit>
        </div>
        <div class="fixed top-0 right-0 bg-gray-50 h-full p-4 text-xs">
            <code>
                <pre>{{ form }}</pre>
            </code>
        </div>
    </div>
</template>
