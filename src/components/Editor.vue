<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const editor = ref<HTMLDivElement | null>(null);
let historyIndex = -1;
const editorHistory: string[] = [];

const updateHistory = () => {
  if (editor.value) {
    editorHistory[historyIndex] = editor.value.innerHTML
    editorHistory.splice(historyIndex)
    editorHistory.push(editor.value.innerHTML)
  }
};

const undo = () => {
  //TODO REFACTORING
  if (historyIndex > 0) {
    historyIndex--;
    if (editor.value) {
      editor.value.innerHTML = editorHistory[historyIndex];
    }
  }
};

const redo = () => {
  //TODO REFACTORING
  if (historyIndex < editorHistory.length) {
    console.log(editorHistory.length)
    historyIndex++;
    if (editor.value) {
      editor.value.innerHTML = editorHistory[historyIndex];
    }
  }
};

const textTransform = (command: string, value: string | null = null) => {
  if (editor.value) {
    editor.value.focus();
    document.execCommand(command, false, value);
    updateHistory();
  }
};

const transformImg = () => {
  //TODO
  const url = prompt('Введите ссылку на картинку');
  if (url && editor.value) {
    const imgTag = `<img src="${url}" alt="Добавленное изображение"/>`;
    editor.value.innerHTML += imgTag;
    updateHistory();
  }
};

const copyHtml = async () => {
  if (editor.value) {
    await navigator.clipboard.writeText(editor.value.innerHTML).then(()=> {
      alert('Текст успешно скопирован!');
    })
  }
};

const handleFocus = () => {
  if (editor.value && editor.value.innerHTML === 'Введите текст') {
    editor.value.innerHTML = '';
  }
};

onMounted(() => {
  if (editor.value) {
    editor.value.innerHTML = 'Введите текст';
    updateHistory();
    editor.value.addEventListener('focus', handleFocus);
  }
});

onBeforeUnmount(() => {
  if (editor.value) {
    editor.value.removeEventListener('focus', handleFocus);
  }
  editorHistory.length = 0;
});
</script>

<template>
  <div class="container">
    <section class="action_block">
      <div class="action_wrapper">
        <div class="toolbar" id="toolbar">
          <button @click="undo">
            <img src='@/assets/img/undo.svg' alt="Кнопка назад">
          </button>
          <button @click="redo">
            <img src="@/assets/img/redo.svg" alt="Кнопка вперед">
          </button>
          <button @click="textTransform('formatBlock', '<h1>')">
            <img src="@/assets/img/headline.svg" alt="Кнопка заголовок">
          </button>
          <button @click="textTransform('formatBlock', '<p>')">
            <img src="@/assets/img/paragraph.svg" alt="Кнопка параграф">
          </button>
          <button @click="transformImg">
            <img src="@/assets/img/img-prompt.svg" alt="Кнопка добавить фото">
          </button>
          <p @click="copyHtml">Скопировать HTML</p>
        </div>
      </div>
    </section>
    <main class="main-block">
      <section>
        <div ref="editor" class="editor" id="editor" contenteditable="true" @focus="handleFocus"></div>
      </section>
    </main>
  </div>
</template>

<style lang="scss">
.container {
  max-width: 960px;
  margin: 0 auto;

  .action_block {
    margin: 70px 0 30px 0;

    .action_wrapper {
      .toolbar {
        display: flex;

        button {
          width: 42px;
          height: 40px;
          border: 0;
          background: #282828;
          cursor: pointer;
          border-radius: 5px;

          &:not(:first-child) {
            margin-left: 20px;
          }
        }

        p {
          margin-left: 20px;
          color: #639EFF;
        }
      }
    }
  }
  .main-block {
    .editor {
      color: #fff;
    }
  }
}

</style>