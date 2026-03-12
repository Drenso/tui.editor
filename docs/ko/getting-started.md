# 🚀 시작하기

## 설치하기

TOAST UI Editor는 패키지 매니저를 이용하거나, 직접 소스 코드를 다운받아 사용할 수 있다. 하지만 패키지 매니저 사용을 권장한다.

### 패키지 매니서 사용하기 (npm)

각 패키지 매니저가 제공하는 CLI 도구를 사용하면 쉽게 패키지를 설치할 수 있다. npm 사용을 위해선 [Node.js](https://nodejs.org/ko/)를 미리 설치해야 한다.

```sh
$ npm install --save @drenso-toast-ui/editor # 최신 버전
$ npm install --save @drenso-toast-ui/editor@<version> # 특정 버전
```

npm을 통해 설치했다면, 아래와 같은 구조로 TOAST UI Editor가 설치된 것을 볼 수 있다.

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

### Contents Delivery Network (CDN) 사용하기

TOAST UI Editor는 CDN을 통해 사용할 수 있다.

```html
...
<body>
  ...
  <script src="https://uicdn.toast.com/editor/latest/toastui-editor-all.min.js"></script>
</body>
...
```

특정 버전을 사용하려면 url 경로에서 `latest` 대신 버전 태그를 사용해야 한다.

CDN은 아래와 같은 디렉토리 구조로 구성된다.

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
   │     ├─ 3.0.0/
   │     │    └─ ...
```

## 사용하기

### 컨테이너 요소 추가

TOAST UI Editor(이하 '에디터'로 명시)가 생성될 컨테이너 요소를 추가한다.

```html
...
<body>
  <div id="editor"></div>
</body>
...
```

### 에디터 생성자 함수 불러오기

에디터는 생성자 함수를 통해 인스턴스를 생성할 수 있다. 생성자 함수에 접근하기 위해서는 환경에 따라 접근할 수 있는 세 가지 방법이 존재한다.

#### Node.js 환경에서의 모듈 사용

- ES6 모듈

```javascript
import Editor from '@drenso-toast-ui/editor';
```

- CommonJS

```javascript
const Editor = require('@drenso-toast-ui/editor');
```

#### 브라우저 환경에서의 namespace 사용

```javascript
const Editor = toastui.Editor;
```

### CSS 파일 추가

에디터 사용을 위해 CSS파일을 추가해야 한다. Node.js 환경에서는 CSS 파일을 가져와 사용하며, CDN을 사용할 때는 html 파일에 CSS 파일 의존성을 추가하여 사용한다.

#### Node.js 환경

- ES6 모듈

```javascript
import '@drenso-toast-ui/editor/dist/toastui-editor.css'; // Editor 스타일
```

- CommonJS

```javascript
require('@drenso-toast-ui/editor/dist/toastui-editor.css');
```

#### CDN 환경

```html
...
<head>
  ...
  <!-- Editor's Style -->
  <link rel="stylesheet" href="https://uicdn.toast.com/editor/latest/toastui-editor.min.css" />
</head>
...
```

### 인스턴스 생성하기

옵션과 함께 인스턴스를 생성하여 다양한 API를 호출할 수 있다.

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

대표적인 기본 옵션은 아래와 같다.

- `height`: 에디터 영역의 높기 값. 문자열 값을 가진다. `300px` | `auto`
- `initialEditType`: 최초로 보여줄 에디터 타입. `markdown` | `wysiwyg`
- `initialValue`: 콘텐츠 초기값. 반드시 마크다운 문자열 형태여야 한다.
- `previewStyle`: 마크다운 프리뷰 스타일. `tab` | `vertical`
- `usageStatistics`: 에디터를 사용하는 웹 사이트의 _호스트명_을 전송한다. 어떠한 사용자가 에디터를 사용하고 있는지 수집하기 위합니다. 이 옵션은 불리언 값을 지정하여 비활성화할 수 있다. `true` | `false`

더 많은 옵션은 [여기](https://nhn.github.io/tui.editor/latest/ToastUIEditor)서 볼 수 있다.

## 예제

예제는 [여기](https://nhn.github.io/tui.editor/latest/tutorial-example01-editor-basic)서 확인할 수 있다.
