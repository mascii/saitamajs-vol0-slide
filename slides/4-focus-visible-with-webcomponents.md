import { StopPropagationDiv, ShowFocusInElement } from '../scripts/components'
import { DemoOfTest } from '../scripts/demo'

## `:focus-visible` と WebComponents

<br />

Shadow DOM によって `:focus-visible` な要素が隠蔽される

<StopPropagationDiv className="p-demo-of-wired-elements">
  例: <a href="https://wiredjs.com/">Wired Elements</a>
  <DemoOfTest />
</StopPropagationDiv>


- Shadow DOM 内部の要素は `document.querySelector()` ではアクセスできない
- つまり、`document.querySelector(':focus-visible')` が通用しない

---

## WebComponents もキー操作中であるかわかるか？

<br />

Shadow Root のモードが `closed` ではなく `open` であれば、Shadow Root の<br />
内部にアクセスすることで `:focus-visible` な要素を取得することができる<br />
<br />
<br />
以下のようにしてキー操作中であるかがわかる:

```typescript
const hasFocusVisible = (): boolean => {
  try {
    // フォーカス中の要素またはコンポーネントを取得
    let activeElement: Element | null = document.activeElement;

    while (activeElement) {
      // フォーカス中の要素が :focus-visible なものであるか判定
      if (activeElement.matches(':focus-visible')) {
        return true;
      } else if (!activeElement.shadowRoot) {
        return false;
      }
      activeElement = activeElement.shadowRoot.activeElement;
    }

    return false;
  } catch {
    return false;
  }
};
```

- `document.activeElement` でフォーカス中の要素またはコンポーネントを取得できる
- `Element#querySelector` は使うことがあったが `Element#matches` は初めて使った
- この実装をして `<iframe>` 内部に `:focus-visible` な要素があるケースに気付いた
