# 🚀 Getting Started

## The Project Setup

TOAST UI Editor can be used by using the package manager or downloading the source directly. However, we highly recommend using the package manager.

### Via Package Manager (npm)

You can conveniently install it using the commands provided by each package manager. When using npm, be sure to use it in the environment [Node.js](https://nodejs.org/en/) is installed.

```sh
$ npm install --save @drenso-toast-ui/editor # Latest Version
$ npm install --save @drenso-toast-ui/editor@<version> # Specific Version
```

When installed and used with npm, the list of files that can be imported is as follows:

```
- node_modules/
   ├─ @drenso-toast-ui/editor/
   │     ├─ dist/
   │     │    ├─ toastui-editor.js
   │     │    ├─ toastui-editor-viewer.js
   │     │    ├─ toastui-editor.css
   │     │    ├─ toastui-editor-viewer.css
   │     │    └─ toastui-editor-only.css
```

### Via Contents Delivery Network (CDN)

TOAST UI Editor is available over the CDN powered by [NHN Cloud](https://www.toast.com). You can use the CDN as below.

```html
...
<body>
  ...
  <script src="https://uicdn.toast.com/editor/latest/toastui-editor-all.min.js"></script>
</body>
...
```

If you want to use a specific version, use the tag name instead of `latest` in the url's path.

The CDN directory has the following structure:

```
- uicdn.toast.com/
   ├─ editor/
   │     ├─ latest/
   │     │    ├─ toastui-editor-all.js
   │     │    ├─ toastui-editor-all.min.js
   │     │    ├─ toastui-editor-viewer.js
   │     │    ├─ toastui-editor-viewer.min.js
   │     │    ├─ toastui-editor-editor.js
   │     │    ├─ toastui-editor-editor.min.js
   │     │    ├─ toastui-editor-editor.css
   │     │    ├─ toastui-editor-editor.min.css
   │     │    ├─ toastui-editor-viewer.css
   │     │    └─ toastui-editor-viewer.min.css
   │     ├─ 2.0.0/
   │     │    └─ ...
```

## Create Your First Editor

### Adding the Wrapper Element

You need to add the container element where TOAST UI Editor (henceforth referred to as 'Editor') will be created.

```html
...
<body>
  <div id="editor"></div>
</body>
...
```

### Importing the Editor's Constructor Function

The editor can be used by creating an instance with the constructor function. To get the constructor function, you should import the module using one of the following ways depending on your environment.

#### Using Module Format in Node Environment

- ES6 Modules

```javascript
import Editor from '@drenso-toast-ui/editor';
```

- CommonJS

```javascript
const Editor = require('@drenso-toast-ui/editor');
```

#### Using Namespace in Browser Environment

```javascript
const Editor = toastui.Editor;
```

### Adding CSS Files

You need to add the CSS files needed for the Editor. Import CSS files in node environment, and add it to html file when using CDN.

#### Using in Node Environment

- ES6 Modules

```javascript
import '@drenso-toast-ui/editor/dist/toastui-editor.css'; // Editor's Style
```

- CommonJS

```javascript
require('@drenso-toast-ui/editor/dist/toastui-editor.css');
```

#### Using in Browser Environment by CDN

```html
...
<head>
  ...
  <!-- Editor's Style -->
  <link rel="stylesheet" href="https://uicdn.toast.com/editor/latest/toastui-editor.min.css" />
</head>
...
```

### Creating Instance

You can create an instance with options and call various API after creating an instance.

```js
const editor = new Editor({
  el: document.querySelector('#editor')
});
```

![getting-started-01](https://user-images.githubusercontent.com/37766175/121855586-7d576000-cd2e-11eb-9196-0c20270d1221.png)

```js
const editor = new Editor({
  el: document.querySelector('#editor'),
  height: '600px',
  initialEditType: 'markdown',
  previewStyle: 'vertical'
});
```

![getting-started-02](https://user-images.githubusercontent.com/37766175/121464762-71e2fc80-c9ef-11eb-9a0a-7b06e08d3ccb.png)

The basic options available are:

- `height`: Height in string or auto ex) `300px` | `auto`
- `initialEditType`: Initial type to show `markdown` | `wysiwyg`
- `initialValue`: Initial value. Set Markdown string
- `previewStyle`: Preview style of Markdown mode `tab` | `vertical`
- `usageStatistics`: Let us know the _hostname_. We want to learn from you how you are using the editor. You are free to disable it. `true` | `false`

Find out more options [here](https://nhn.github.io/tui.editor/latest/ToastUIEditor).

## Example

You can see the example [here](https://nhn.github.io/tui.editor/latest/tutorial-example01-editor-basic).
