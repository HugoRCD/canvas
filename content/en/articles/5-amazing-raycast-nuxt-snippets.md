---
title: 5 Amazing Raycast Snippets for Enhancing Your Nuxt (Vue) Projects
date: 22/01/2024
description: In the realm of web development, where efficiency is as valuable as
  expertise, tools that streamline and simplify our workflow are indispensable.
  Among these, Raycast snippets emerge as a powerful ally, especially for those
  working with Nuxt and Vue frameworks. But what exactly are these snippets, and
  how can they transform your development experience?
tags:
  - Nuxt
  - Vue
  - Raycast
  - Productivity
image: https://canvas.hrcd.fr/articles/5-raycast-snippets.jpg
readingTime: "10"
---

![preview](/articles/5-raycast-snippets.jpg)

In the realm of web development, where efficiency is as valuable as expertise, tools that streamline and simplify our workflow are indispensable. Among these, Raycast snippets emerge as a powerful ally, especially for those working with Nuxt and Vue frameworks. But what exactly are these snippets, and how can they transform your development experience?

## What Are Raycast Snippets?

Raycast snippets are small, reusable pieces of text or code that can be quickly inserted into your work. Think of them as shortcuts for frequently used content - whether it's code, canned email responses, or even emojis. They are designed to save time and reduce repetitive typing, allowing developers and writers to work more efficiently.

## How to Use Raycast Snippets

Using Raycast snippets is straightforward. Once you've created or imported a snippet within the Raycast app, you can assign a specific keyword to it. This keyword acts as a trigger - whenever you type it in any application, the snippet will automatically expand in place, replacing the keyword with the full text or code of the snippet.

For instance, if you have a snippet for a standard email sign-off, you can assign a keyword like `sig1`. Typing `sig1` in an email will then automatically expand to the full signature text. This feature is especially useful in coding, where you can have snippets for common code patterns or configurations.

![snippets-exemple](/articles/snippets-exemple.gif)

### Component Template: `!comp`

The `!comp` snippet is a basic yet powerful template for creating new Vue components. It includes a script setup with TypeScript support, a template section, and scoped styling. This snippet is ideal for rapidly scaffolding new components in your project.

**Usage Example:** Use `!comp` to quickly create new Vue components, ensuring consistency and saving time on setup.

```vue [MyComponent.vue]
<script setup lang="ts">
import type { PropType } from "vue";

const props = defineProps({
 item: {
  type: String, 
  required: true
 }
});
</script>

<template>
  <div>
    <h1>{{ item }}</h1>
  </div>
</template>

<style scoped>

</style>
```

### API Handler Template: `!api`

Handling API requests is a common task in modern web applications. The `!api` snippet provides a template for creating API handlers using `h3`, a lightweight HTTP toolkit. This snippet streamlines the process of setting up API routes and handling requests.

**Usage Example:** Implement the `!api` snippet for creating efficient API routes in your Nuxt application, especially when dealing with CRUD operations.

```ts [~/server/api/MyHandler.ts]
import { H3Event } from "h3";

export default defineEventHandler(async (event: H3Event) => {
  const body = await readBody(event);
  // your_api_logic
});
```

### State Management with Pinia: `!store`

State management is crucial in large-scale applications. The `!store` snippet utilizes Pinia, a Vue store, offering a structured template for managing application state. It includes a state definition, getters, and actions.

**Usage Example:** Utilize `!store` for setting up store modules in your Nuxt/Vue app, managing state more effectively and cleanly. the { clipboard } while be replaced by your actual clipboard.

```ts [~/store/{clipboard}.ts]
import { defineStore } from 'pinia';

type {clipboard}Store = { 
  count: number;
} 

export const use{clipboard}Store = defineStore('{clipboard}', {
  state: (): {clipboard}Store => ({ 
    count: 0,
  }), 
  getters: { 
    getCount(): number { 
      return this.count; 
    }
  },
  actions: { 
    increment() {
      this.count++; 
    }, 
  } 
});
```

### Composable Function Template: `!cps`

Composable functions in Vue 3 bring reusability and organization to your code. The `!cps` snippet offers a template for creating these functions, aiding in maintaining a clean and modular codebase.

**Usage Example:** Use `!cps` for creating reusable composable functions that can be shared across components, enhancing code reusability and maintainability.

```ts [~/composables/useComposables.ts]
export function use{clipboard}() {
  const {clipboard} = ref(null);
  
  // Composable logic
  
  return { {clipboard} };
}
```

### Fetching Data with Composition API: `!fcomp`

The `!fcomp` snippet is designed for fetching data using Vue's Composition API. It provides a setup for making HTTP requests, handling loading states, and managing errors, all within a component.

**Usage Example:** Implement `!fcomp` in scenarios where you need to fetch data from an API, providing a robust structure for data fetching and state management.

```vue [MyComponent.vue]
<script setup lang="ts">
const { data, pending, error, refresh } = useFetch("your_url", { 
  immediate: false,
  watch: false,
});

function loadData() {
  await refresh();
}
</script>

<template>
  <div>
    <button @click="loadData">Load Data</button>
    <div v-if="pending">Loading...</div>
    <div v-if="error">{{ error }}</div>
    <div v-if="data">{{ data }}</div>
  </div>
</template>

<style scoped>
/* composant styles */
</style>
```

### Why Use These Snippets?

#### Enhance Productivity

Raycast snippets save time and effort by providing ready-to-use code templates, allowing you to focus on the unique aspects of your project.

#### Maintain Consistency

Using standardized snippets ensures consistency across your codebase, making it easier to read, maintain, and collaborate on.

#### Streamline Development

Snippets cater to common development tasks, streamlining your workflow and reducing the likelihood of errors or oversights.

#### Foster Learning

For new developers or those new to Nuxt and Vue, these snippets offer insight into best practices and efficient coding patterns.

In conclusion, incorporating these Raycast snippets into your Nuxt and Vue development workflow can significantly enhance productivity, maintain code consistency, and streamline your development process. Whether you're building a small project or a large-scale application, these snippets are invaluable tools in the modern developer's arsenal.
