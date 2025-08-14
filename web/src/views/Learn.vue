<script setup>
import { reactive, ref, computed } from 'vue';
const rawHtml = `<span style="color:blue">This should be blue</span>`
const id = 'my-id'
const sayHello = () => 'Hello from function';
const alertHello = () => alert('Hello from function');


const model = reactive({
  firstName: 'John',
  lastName: 'Doe',
  age: 17,
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zip: 30
  }
});

const isAdult = computed(() => model.age >= 18 ? 'Adult' : 'Minor');
const items = ref([{ message: 'Foo' }, { message: 'Bar' }])
const forInComponent = `<SomeComponent v-for="(item, index) in items" :item="item" :index="index" :key="item.message" />`
</script>

<template>
  <div style="display: none;">
    <h1><a href="https://vuejs.org/guide/essentials/template-syntax.html">Template Syntax</a></h1>
    <h2>Raw Html</h2>
    {{ rawHtml }}
    <p v-html="rawHtml"></p>
    <h2>Attribute Bindings</h2>
    <div v-bind:id="id">normal -> v-bind:id="id"</div>
    <div :id="id">shorthand -> :id="id"</div>
    <div :id>same name ->:id</div>
    <h2>Calling Functions</h2>
    <button @click="alertHello">{{ sayHello() }}</button>
  </div>

  <div style="display: none;">
    <h1><a href="https://vuejs.org/guide/essentials/reactivity-fundamentals.html">Reactivity Fundamentals</a></h1>
    <div>model = {{ model }}</div>
    <div>model.address.zip = {{ model.address.zip }}</div>
    <button @click="model.address.zip++">Zip++</button>
  </div>

  <div style="display: none;">
    <h1><a href="https://vuejs.org/guide/essentials/computed.html">Computed Properties</a></h1>
    <div>computed = {{ isAdult }}</div>
  </div>
  <div style="display: none;">
    <h1><a href="https://vuejs.org/guide/essentials/class-and-style.html">Class and Style Bindings</a></h1>
    <div :style="{ color: 'red' }">classes</div>
  </div>
  <div style="display: none;">
    <h1><a href="https://vuejs.org/guide/essentials/conditional.html">Conditional Rendering</a></h1>
    <div v-if="model.age > 18">Adult</div>
    <div v-else-if="model.age === 18">Just turned adult</div>
    <div v-else>Minor</div>
    <template v-if="model.age > 18">Adult</template>
    <template v-else-if="model.age === 18">Just turned adult</template>
    <template v-else>Minor</template>
    <p>When v-if and v-for are both used on the same element, v-if will be evaluated first. See the list rendering guide
      for details.</p>
  </div>
  <div style="display: none;">
    <h1><a href="https://vuejs.org/guide/essentials/list.html">List Rendering</a></h1>
    <li v-for="item in items" :key="item.message">
      {{ item.message }}
    </li>
    <li v-for="(item, index) in items" :key="item.message">
      {{ index }} - {{ item.message }}
    </li>
    <li v-for="item of items" :key="item.message">
      {{ item.message }}
    </li>
    <li v-for="(value, key, index) in model">
      {{ index }} -> {{ key }} = {{ value }}
    </li>
    <p>{{ forInComponent }}</p>
  </div>
  <div style="display: div;">
    <h1><a href="https://vuejs.org/guide/essentials/event-handling.html">Event Handling</a></h1>
  </div>


  <div style="display: div;">
    <h1><a href=""></a></h1>
  </div>
</template>

<style scoped></style>
