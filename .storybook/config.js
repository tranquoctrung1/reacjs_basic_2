// Storybook là 1 công cụ giúp chúng ta có thể lưu lại các componet mà chúng ta đang làm. 
// Lỡ như mình quên hay là có 1 người khác review code của mình hay là 1 cái gì đó thì chúng ta có thể dùng công cụ này để coi lại các component mà chúng ta đã làm 
// Như vậy thì công cụ Storybook rất hữu dụng cho chúng ta khi chúng ra làm 1 hay nhiều các dự dán lớn :)

import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/index.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);