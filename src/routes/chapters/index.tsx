import { component$, useSignal, useStyles$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { chaptersData } from "~/data/chapters";
import Accordion from "~/components/shared/accordion";

export default component$(() => {
  const chapters = useSignal(chaptersData);
  return (
    <>
      <div class="container mt-2">
        <h1 class="page-title">Listado de cap&iacute;tulos - Total: {chapters.value.length}</h1>
        <hr />
        <br/>
        <p>A continuación tenéis disponible el listado de los capítulos con la introducción de lo que se va a trabajar en cada uno de ellos.</p>
        <Accordion data={chapters}/>
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
