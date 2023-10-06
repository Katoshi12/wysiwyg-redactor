<script setup lang="ts">
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
          <button @click="transformTitle">
            <img src="@/assets/img/headline.svg" alt="Кнопка заголовок">
          </button>
          <button @click="transformParagraph">
            <img src="@/assets/img/paragraph.svg" alt="Кнопка параграф">
          </button>
          <button @click="transformImg">
            <img src="@/assets/img/img-prompt.svg" alt="Кнопка добавить фото">
          </button>
          <p @click="">Скопировать HTML</p>
        </div>
      </div>
    </section>
    <main class="main-block">
      <section>
        <div ref="editor" class="editor" id="editor" contenteditable="true">
          Таким образом консультация с широким активом представляет
          собой интересный эксперимент проверки позиций, занимаемых участниками в отношении поставленных задач. С другой
          стороны постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный
          эксперимент проверки форм развития. Идейные соображения высшего порядка, а также укрепление и развитие
          структуры влечет за собой процесс внедрения и модернизации соответствующий условий активизации. Задача
          организации, в особенности же реализация намеченных плановых заданий играет важную роль в формировании
          дальнейших направлений развития. Повседневная практика показывает, что постоянное
          информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании существенных
          финансовых и административных условий.
        </div>
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