<script setup lang="ts">
import { withGrid } from '../../lib/utils'

const schema = withGrid(
    [
        {
            $formkit: 'text',
            name: 'firstName',
            label: 'First Name',
            required: true,
            validation: 'required',
        },
        {
            $formkit: 'text',
            name: 'lastName',
            label: 'Last Name',
            required: true,
            validation: 'required',
        },
        {
            $formkit: 'textarea',
            name: 'selfIntroduction',
            label: 'Self Introduction',
            // override formkit outer wrapper div
            classes: {
                outer: 'col-span-2',
            },
            antProps: {
                rows: 10,
            },
        },
        {
            $formkit: 'text',
            name: 'emailAddress',
            label: 'Email Address',
            required: true,
            validation: 'required|email',
        },
        {
            $formkit: 'text',
            name: 'contactNumber',
            label: 'Contact Number',
        },
        {
            $formkit: 'select',
            name: 'role',
            label: 'Role',
            classes: {
                outer: 'col-span-2',
            },
            antProps: {
                options: [
                    { label: 'Staff', value: 'staff' },
                    { label: 'Supervisor', value: 'supervisor' },
                    { label: 'Manager', value: 'Manager' },
                    { label: 'Admin', value: 'Admin' },
                ],
            },
            required: true,
            validation: 'required',
        },
        {
            $formkit: 'toggle',
            name: 'isActive',
            label: 'Active',
        },
    ],
    {}
)
</script>

<template>
    <FormKit type="group" name="gridSchema">
        <FormKitSchema :schema="schema" />
    </FormKit>
</template>
