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
| Button        | :white_check_mark: | button       |
| Checkbox      | :white_check_mark: | checkbox     |
| CheckboxGroup | :white_check_mark: | checkbox     |
| Datepicker    | :white_check_mark: | datepicker   |
| NumberInput   | :white_check_mark: | number       |
| TextInput     | :white_check_mark: | text         |
| PasswordInput | :white_check_mark: | password     |
| TextArea      | :white_check_mark: | textarea     |
| Radio         | :white_check_mark: | radio        |
| RadioGroup    | :white_check_mark: | radio        |
| Switch        | :white_check_mark: | toggle       |
| Divider       | :white_check_mark: | divider      |
| Select        | :white_check_mark: | select       |
