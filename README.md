# vue-simpleform

A Vue component for building form

[![npm (scoped)](https://img.shields.io/npm/v/@hanhdt/vue-simpleform.svg?style=for-the-badge)](https://www.npmjs.com/package/@hanhdt/vue-simpleform)

## [Demo page](/example)

![vue-simpleform](/vue-simpleform.png)

## Installation

NPM

```Shell
  $npm install --save @hanhdt/vue-simpleform
```

YARN

```Shell
  $yarn add @hanhdt/vue-simpleform
```

CDN

```Shell
  https://unpkg.com/@hanhdt/vue-simpleform@latest/dist/vue-simpleform.umd.js
```

## Provided Components

- `SimpleForm`: This is main component which will generally create HTML `form` tag
- `FormInput`: The form input component utility
- `Loading`: A loading component is called when the form is busy

## Usages

### Props descriptions

- `SimpleForm`
  - `title`: This is displayed as Form's title in the `<h2>` element
  - `operation`: The asynchronous function called when the form is submitted. It is returned in a promise-style
  - `valid`: A Boolean to prevent calling the operation if the form is not valid

- `FormInput`
  - `name`: form input's name
  - `inputClass`: the customed class
  - `placeholder`: input's placeholder
  - `type`: type of input tag rendered

### Using `SimpleForm` component in existing Vue project

#### Import package

in the `main.js`, import the package as a global component.

```javascript
 import '@hanhdt/vue-simpleform'
```

#### Add `SimpleForm` component into `*.vue` template

```XML
  <SimpleForm
    class="form"
    :title="title"
    :operation="() => console.log('form submit')"
    :valid="valid">

    <!-- FORM TEXT INPUT -->
    <FormInput
      name="title"
      v-model="title"
      placeholder="Short title (max 100 chars)"
      maxlength="100"
      :text="title"
      required />

    <!-- FORM TEXTAREA INPUT -->
    <FormInput
      type="textarea"
      name="description"
      v-model="description"
      placeholder="Describe your problem in details"
      rows="4" />

    <template slot="actions">
      <!-- BUTTON ACTIONS -->
      <button type="submit">
        Submit
      </button>
    </template>
  </SimpleForm>
```

---