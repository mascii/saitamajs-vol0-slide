import { RadioButtonWithVisasqLiteStyle, StopPropagationDiv } from '../scripts/components'
import {
  DemoOfRadioButtonsWithDefaultStyle,
  DemoOfRadioButtonsWithCustomizedStyle,
  DemoOfTextFieldWithDefaultStyle,
  DemoOfTextFieldWithCustomizedStyle,
  DemoOfRadioButtonsWithVisasqLiteStyle,
} from '../scripts/demo'

## `:focus-visible` とは？

<br />

- キー操作時のみスタイルを当てるための疑似クラス

<br />
<StopPropagationDiv>
  <DemoOfRadioButtonsWithDefaultStyle />
</StopPropagationDiv>
<br />

- Chrome では 2020/10 から使えるようになった

<p class="p-caniuse">
  <img src="../assets/caniuse.png" />
  <a href="https://caniuse.com/css-focus-visible">https://caniuse.com/css-focus-visible</a>
</p>

---

## `:focus-visible` のデモ

<br />
<StopPropagationDiv>
  <DemoOfRadioButtonsWithDefaultStyle />
  <br />
  <DemoOfRadioButtonsWithCustomizedStyle />
  <br />
  <DemoOfTextFieldWithDefaultStyle />
  <br />
  <DemoOfTextFieldWithCustomizedStyle />
  <br />
  <DemoOfRadioButtonsWithVisasqLiteStyle />
</StopPropagationDiv>
