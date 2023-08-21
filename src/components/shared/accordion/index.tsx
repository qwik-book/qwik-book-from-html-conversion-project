import { component$, useStyles$ } from '@builder.io/qwik';

import accordionStyles from './accordion.css?inline';
import { AccordionProps } from '~/models/accordion';

export default component$<AccordionProps>((props: AccordionProps) => {
  const { data: accordionItems } = props;
  useStyles$(accordionStyles);
  return (
    <section class='accordion-container mb-5' id='accordion-container'>
      {accordionItems.value.map((chapter, index) => {
        return (
          <div key={`accordion-${index + 1}_${new Date().toISOString()}`}>
            <div class={`accordion-${index + 1}`}>
              <h1
                class={`accordion-page ${chapter.open ? 'item-active' : ''}`}
                onClick$={() => {
                  // Modificamos la propiedad `open` al valor inverso
                  chapter.open = !chapter.open;

                  // Actualizamos el contenedor donde almacenamos todos los capítulos
                  accordionItems.value = accordionItems.value.map((item) => {
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
            <hr class='hr-line' />
          </div>
        );
      })}
    </section>
  );
});
