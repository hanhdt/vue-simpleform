# vue-simpleform

A Vue component for building form

## Installation

```Shell
  $npm install --save @hanhdt/vue-simpleform
```

## Usage

### Props descriptions

- `title`: This is displayed as Form's title in the `<h2>` element
- `operation`: The asynchronous function called when the form is submitted. It is returned in a promise-style
- `valid`: A Boolean to prevent calling the operation if the form is not valid

### Using `SimpleForm` component in existing Vue project

#### Import package

in the `main.js`, import the package as a global component.

```javascript
 import '@hanhdt/vue-simpleform'
```

#### Add `SimpleForm` component into `*.vue` template

```html
  <SimpleForm
    class="form"
    :title="title"
    :operation="() => console.log('form submit')"
    :valid="valid">
    <!-- FORM INPUTS -->
  </SimpleForm>
```