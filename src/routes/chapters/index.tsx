import { component$, useSignal, useStyles$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { chaptersData } from "~/data/chapters";
import chaptersStyles from "./chapter.css?inline";

export default component$(() => {
  const chapters = useSignal(chaptersData);
  useStyles$(chaptersStyles);
  return (
    <>
      <div class="container mt-2">
        <h1 class="page-title">Listado de cap&iacute;tulos</h1>
        <hr />
        <section class="accordion-container mb-5" id="accordion-container">
          {chapters.value.map((chapter, index) => {
            return (
              <div key={`accordion-${index + 1}_${new Date().toISOString()}`}>
                <div
                  class={`accordion-${index + 1}`}
                >
                  <h1
                    class={`accordion-page ${
                      chapter.open ? "item-active" : ""
                    }`}
                    onClick$={()=> {
                      // Modificamos la propiedad `open` al valor inverso
                      chapter.open = !chapter.open;
                      
                      // Actualizamos el contenedor donde almacenamos todos los capítulos
                      chapters.value = chapters.value.map((item) => {
                        if (item.question === chapter.question) {
                          return chapter;
                        }
                        return item;
                      });
                    }}
                  >
                    {chapter.question}
                  </h1>
                  <div class={`accordion-body ${chapter.open ? 'open' : ''}`}>
                    <p>{chapter.answer}</p>
                  </div>
                </div>
                <hr class="hr-line" />
              </div>
            );
          })}
        </section>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Capítulos",
  meta: [
    {
      name: "description",
      content: "Listado de capítulos que contiene el libro de Qwik",
    },
  ],
};
