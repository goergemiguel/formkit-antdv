# Formkit + Ant Design

This library is an experiment and is in-progress. It combines usage of formkit schema, validation (and other features) but instead renders ant design components.

## TODO:

-   [x] Use schema approach to override formkit component library
-   [x] Add few Ant Design components to custom formkit library
-   [x] Set few examples of basic components
-   [x] Handle two-way binding of components (capture user input, render value)
-   [x] Support ALL Ant Design props in formkit schema
-   [x] Handle custom events of Ant design components
-   [x] Sync formkit validation and ant design component error state, show red borders when validation fails
-   [ ] Continue adding other ant design components to library definition
-   [ ] Try modifying ant design tokens and see if it causes any issues.
-   [ ] More comprehensive form examples
-   [ ] Auto generating documentation from examples

## Ant Design components supported:

| Ant Component | Support            | Formkit type |
| ------------- | ------------------ | ------------ |
| Button        | :white-check-mark: | button       |
| Checkbox      | :white-check-mark: | checkbox     |
| CheckboxGroup | :white-check-mark: | checkbox     |
| Datepicker    | :white-check-mark: | datepicker   |
| NumberInput   | :white-check-mark: | number       |
| TextInput     | :white-check-mark: | text         |
| PasswordInput | :white-check-mark: | password     |
| TextArea      | :white-check-mark: | textarea     |
| Radio         | :white-check-mark: | radio        |
| RadioGroup    | :white-check-mark: | radio        |
| Switch        | :white-check-mark: | toggle       |
| Divider       | :white-check-mark: | divider      |
| Select        | :white-check-mark: | select       |
