import type { Component } from 'solid-js';
import { createSignal, createEffect } from 'solid-js';

import styles from './App.module.css';

const App: Component = () => {
  const [searchText, setSearchText] = createSignal('');
  const [time, setTime] = createSignal('');
  const onEnter = (evt: KeyboardEvent) => {
    if (evt.key === 'Enter') {
      location.assign(`https://www.baidu.com/s?wd=${searchText()}`);
    }
  };

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <p class="text-white">time</p>
        <input
          placeholder="百度搜索"
          type="text"
          class="text-gray-900 border-0 outline-none rounded-md text-xl p-2 w-96"
          onkeypress={onEnter}
          value={searchText()}
          onInput={(e) => setSearchText(e.currentTarget.value)}
        />
      </header>
    </div>
  );
};

export default App;
