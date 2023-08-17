import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <section class="showcase">
        <div class="container">
          <div class="grid">
            <div class="grid-item-1">
              <div class="showcase-text">
                <h1>Aprende más sobre Qwik y desarrollo Web</h1>
                <p class="supporting-text">
                  {" "}
                  Más de 109.000 estudiantes aprender con mis recursos
                </p>
              </div>
              <div class="showcase-form">
                <form action="">
                  <input type="email" placeholder="Correo electrónico" />
                  <input type="submit" class="btn" value="Empieza a aprender" />
                </form>
                <p class="little-info">
                  Contenidos gratuitos tanto escritos como en video
                </p>
              </div>
            </div>

            <div class="grid-item-2">
              <div class="image">
              <img src="./img/profile/programmer-girl.webp" width="192" height="192" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="container mt-2 mb-5">
        <section class="stats">
          <div class="flex">
            <div class="stat">
              <img src="./img/icons/folder-open.svg" width="20" height="36" />
              <h3 class="title">Más de 18 capítulos al detalle</h3>
              <p class="text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div class="stat">
              <img src="./img/icons/graduate.svg" width="20" height="36" />
              <h3 class="title">Conocimientos sólidos en el framework</h3>
              <p class="text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div class="stat">
              <img src="./img/icons/credit-card.svg" width="20" height="36"/>
              <h3 class="title">
                Solo pagas una vez y dispones de actualizaciones
              </h3>
              <p class="text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </section>

        <section class="testimonials">
          <div class="container">
            <div class="testimonial grid-3">
              <div class="card">
                <div class="circle">
                  <img src="./img/profile/men_programmer.webp" alt="" width="20" height="36"/>
                </div>
                <h3>Aston</h3>
                <p>
                  I have learnt web development using this platfrom and I am
                  going to say this is the best platform for learning.
                  Absolutely worth the investment!
                </p>
              </div>
              <div class="card">
                <div class="circle">
                  <img src="./img/profile/qwik.webp" alt="" width="20" height="36" />
                </div>
                <h3>Beth</h3>
                <p>
                  I have learnt copywriting using this platfrom and I am going
                  to say this is the best platform for learning. Absolutely
                  worth the investment!
                </p>
              </div>
              <div class="card">
                <div class="circle">
                  <img src="./img/profile/girl.webp" alt="" width="20" height="36"/>
                </div>
                <h3>Chris</h3>
                <p>
                  I have learnt affilitate marketing using this platfrom and I
                  am going to say this is the best platform for learning.
                  Absolutely worth the investment!
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
