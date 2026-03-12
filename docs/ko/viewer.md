# 👀 뷰어

## 뷰어는 무엇일까?

TOASE UI Editor(이하 'Editor'라고 명시)는 에디터를 로딩하지 않고 _마크다운_ 콘텐츠를 보여줄 수 있도록 **뷰어**를 제공한다. 뷰어가 에디터보다 훨씬 **더 가볍다**.

## 뷰어 사용하기

뷰어를 사용하는 방법은 에디터와 유사하다.

> 참고. [Getting Started](https://github.com/Drenso/tui.editor/blob/master/docs/ko/getting-started.md)

### 컨테이너 요소 추가

뷰어가 생성될 컨테이너 요소를 추가한다.

```html
...
<body>
  <div id="viewer"></div>
</body>
...
```

### 뷰어 생성자 함수 불러오기

뷰어는 생성자 함수를 통해 인스턴스를 생성할 수 있다. 생성자 함수에 접근하기 위해서는 환경에 따라 접근할 수 있는 세 가지 방법이 존재한다.

#### Node.js 환경에서의 모듈 사용

- ES6 모듈

```javascript
import Viewer from '@drenso-toast-ui/editor/dist/toastui-editor-viewer';
```

- CommonJS

```javascript
const Viewer = require('@drenso-toast-ui/dist/toastui-editor-viewer');
```

#### 브라우저 환경에서의 namespace 사용

```javascript
const Viewer = toastui.Editor;
```

CDN에서 뷰어는 다음처럼 사용한다.

```html
...
<body>
  ...
  <script src="https://uicdn.toast.com/editor/latest/toastui-editor-viewer.js"></script>
</body>
...
```

### CSS 파일 추가

뷰어 사용을 위해 CSS파일을 추가해야 한다. Node.js 환경에서는 CSS 파일을 가져와 사용하며, CDN을 사용할 때는 html 파일에 CSS 파일 의존성을 추가하여 사용한다.

#### Using in Node Environment

- ES6 모듈

```javascript
import '@drenso-toast-ui/editor/dist/toastui-editor-viewer.css';
```

- CommonJS

```javascript
require('@drenso-toast-ui/editor/dist/toastui-editor-viewer.css');
```

#### CDN 환경

```html
...
<head>
  ...
  <link rel="stylesheet" href="https://uicdn.toast.com/editor/latest/toastui-editor-viewer.min.css" />
</head>
...
```

### 인스턴스 생성하기

옵션과 함께 인스턴스를 생성하여 다양한 API를 호출할 수 있다.

```js
const viewer = new Viewer({
  el: document.querySelector('#viewer'),
  height: '600px',
  initialValue: '# hello'
});
```

![viewer-01](https://user-images.githubusercontent.com/37766175/121862304-a3ccc980-cd35-11eb-92c8-02b0e6fcf3cf.png)

대표적인 기본 옵션은 아래와 같다.

- `height`: 에디터 영역의 높기 값. 문자열 값을 가진다. `300px` | `auto`
- `initialValue`: 콘텐츠 초기값. 반드시 마크다운 문자열 형태여야 한다.

더 많은 옵션은 [여기](https://nhn.github.io/tui.editor/latest/ToastUIEditorViewer)서 볼 수 있다.

## 뷰어를 사용하는 다른 방법

에디터에 이미 뷰어 기능이 포함되어 있으므로 에디터와 뷰어가 동시에 로드되지 않도록 주의해야 한다. 또한 `Editor.factory()` 정적 메서드를 사용하여 뷰어를 사용할 수 있다. 아래 코드처럼 `viewer` 옵션을 `true`로 설정하면 뷰어가 생성된다.

```js
import Editor from '@drenso-toast-ui/editor';

const viewer = Editor.factory({
  el: document.querySelector('#viewer'),
  viewer: true,
  height: '500px',
  initialValue: '# hello'
});
```

## 예제

예제는 [여기](https://nhn.github.io/tui.editor/latest/tutorial-example04-viewer)서 확인할 수 있다.
