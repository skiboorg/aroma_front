<template>
  <q-page>
    <section class="about">
      <div class="container">
        <div class="row q-col-gutter-none q-col-gutter-md-xl items-center">
          <div class=" col-12 col-md-6 q-mb-lg q-mb-md-none">
            <h3 class="title mb-125 text-lh-35">«Энергия аромата» - производство сыродавленых масел</h3>
            <p class="text-lh-24 q-mb-xl">
              Мы не просто производим масла: мы исследуем, пробуем и
              делимся с вами лучшими рецептами использования нашей
              продукции, даем советы и консультируем по каждому
              отдельному случаю.
            </p>
            <q-btn :to="{'name':'catalog'}" color="primary" class="no-border-radius q-py-md q-px-xl gt-sm" no-caps unelevated label="Смотреть каталог"/>
            <!--            <router-link class="link" :to="{name:'about'}">Узнать больше</router-link>-->
          </div>
          <div class="col-12 col-md-6">
            <img class="img gt-sm"  src="~assets/about2.jpg" alt="">
            <img style="width: 100%" class=" lt-md q-mb-md"  src="~assets/about-2-sm.jpg" alt="">

          </div>
          <div class="flex justify-center lt-md full-width">
            <q-btn :to="{'name':'catalog'}" color="primary" class="no-border-radius q-py-md q-px-xl " no-caps unelevated label="Смотреть каталог"/>
          </div>
        </div>

      </div>
    </section>
    <section class="about2">
      <div class="row">
        <div class="col-12 col-md-6  about2-bg gt-sm">

        </div>
        <div class="col-12 col-lg-4 col-md-6 ">
          <div class="about2-right">
            <h3 class="title q-mb-xl text-lh-35">«Энергия аромата» - производство сыродавленых масел</h3>
            <p class="text-lh-24">Энергия Аромата -это проект о природной защите
              организма
              и целебной силе натуральных масел.
            </p>
            <p class="text-lh-24 ">
              Мы не просто производим масла: мы исследуем, пробуем и
              делимся с вами лучшими рецептами использования нашей
              продукции, даем советы и консультируем по каждому
              отдельному случаю.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="gallery">
      <div class="container">
        <div class="gallery-title">
          <h3 class="title q-mb-none">Популярные товары</h3>

          <div class="gt-sm">
            <q-btn color="primary" :to="{'name':'catalog'}" class="no-border-radius q-py-md q-px-xl" no-caps unelevated label="Смотреть каталог"/>

          </div>


        </div>
        <div class="">
          <q-no-ssr>
            <Carousel ref="gallery" :settings="settings" :breakpoints="breakpoints">
              <Slide v-for="(slide,index) in gallerySlides" :key="index">
                <router-link :to="{name:'item',params:{slug:slide.name_slug}}" >
                  <div class="gallery-item">
                    <!--                  @click="modalImg = slide.image,modal=true"-->

                    <div  class="gallery-item__img q-mb-lg">
                      <img  :src="slide.image_thumb" alt="">
                      <div class="gallery-item__img-overlay">
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.9999 8.9999H10.9999V5.9999C10.9999 5.73469 10.8945 5.48033 10.707 5.2928C10.5195 5.10526 10.2651 4.9999 9.9999 4.9999C9.73469 4.9999 9.48033 5.10526 9.2928 5.2928C9.10526 5.48033 8.9999 5.73469 8.9999 5.9999V8.9999H5.9999C5.73469 8.9999 5.48033 9.10526 5.2928 9.2928C5.10526 9.48033 4.9999 9.73469 4.9999 9.9999C4.9999 10.2651 5.10526 10.5195 5.2928 10.707C5.48033 10.8945 5.73469 10.9999 5.9999 10.9999H8.9999V13.9999C8.9999 14.2651 9.10526 14.5195 9.2928 14.707C9.48033 14.8945 9.73469 14.9999 9.9999 14.9999C10.2651 14.9999 10.5195 14.8945 10.707 14.707C10.8945 14.5195 10.9999 14.2651 10.9999 13.9999V10.9999H13.9999C14.2651 10.9999 14.5195 10.8945 14.707 10.707C14.8945 10.5195 14.9999 10.2651 14.9999 9.9999C14.9999 9.73469 14.8945 9.48033 14.707 9.2928C14.5195 9.10526 14.2651 8.9999 13.9999 8.9999ZM20.7099 19.2899L16.9999 15.6099C18.44 13.8143 19.1374 11.5352 18.9487 9.2412C18.76 6.94721 17.6996 4.81269 15.9854 3.27655C14.2713 1.74041 12.0337 0.919414 9.73283 0.982375C7.43194 1.04534 5.24263 1.98747 3.61505 3.61505C1.98747 5.24263 1.04534 7.43194 0.982375 9.73283C0.919414 12.0337 1.74041 14.2713 3.27655 15.9854C4.81269 17.6996 6.94721 18.76 9.2412 18.9487C11.5352 19.1374 13.8143 18.44 15.6099 16.9999L19.2899 20.6799C19.3829 20.7736 19.4935 20.848 19.6153 20.8988C19.7372 20.9496 19.8679 20.9757 19.9999 20.9757C20.1319 20.9757 20.2626 20.9496 20.3845 20.8988C20.5063 20.848 20.6169 20.7736 20.7099 20.6799C20.8901 20.4934 20.9909 20.2442 20.9909 19.9849C20.9909 19.7256 20.8901 19.4764 20.7099 19.2899ZM9.9999 16.9999C8.61544 16.9999 7.26206 16.5894 6.11091 15.8202C4.95977 15.051 4.06256 13.9578 3.53275 12.6787C3.00293 11.3996 2.86431 9.99214 3.13441 8.63427C3.4045 7.27641 4.07119 6.02912 5.05016 5.05016C6.02912 4.07119 7.27641 3.4045 8.63427 3.13441C9.99214 2.86431 11.3996 3.00293 12.6787 3.53275C13.9578 4.06256 15.051 4.95977 15.8202 6.11091C16.5894 7.26206 16.9999 8.61544 16.9999 9.9999C16.9999 11.8564 16.2624 13.6369 14.9497 14.9497C13.6369 16.2624 11.8564 16.9999 9.9999 16.9999Z" fill="white"/>
                        </svg>

                      </div>
                    </div>

                    <p v-if="slide.left===0" class="q-mb-none text-bold text-left text-negative text-caption">Нет в наличии</p>
                    <p v-if="slide.is_ordered" class="q-mb-none text-bold text-left text-positive text-caption">Заказана</p>
                    <p class="q-mb-sm text-left gallery-item__title text-avenir-450 text-dark">{{slide.name}}</p>
                    <!--                  <p class="text-left gallery-item__subtitle text-dark">{{slide.subtitle}}</p>-->

                    <p class="q-mb-none text-left text-caption">Артикул № {{slide.article}}</p>
                    <p class="q-mb-md text-left text-caption">Размер {{slide.size}}</p>
                    <p class="q-mb-none text-left text-fs18 text-avenir-450 text-warning">{{slide.price}} ₽</p>

                  </div>
                </router-link>
              </Slide>
              <template #addons>
                <Navigation />
              </template>

            </Carousel>
          </q-no-ssr>

          <div class="lt-md text-center">
              <q-btn :to="{'name':'catalog'}" color="primary" class="no-border-radius q-py-md q-px-xl " no-caps unelevated label="Смотреть каталог"/>
          </div>
        </div>
      </div>
    </section>


    <section class="blog">
      <div class="container">
        <div class="row items-center ">
          <div class="col-12 col-md-6 bg-grey-2 blog-right gt-sm">
            <img class="blog-img" src="~assets/blog-img.jpg" alt="">
          </div>
          <div class="col-12 col-md-5 offset-0 offset-md-1 ">
            <h3 class="title text-lh-35">Наш блог</h3>
            <p class="text-lh-24 q-mb-lg">
              Блог Энергии Аромата появился на свет в 2020 году,
              Более 12 тыс. человек каждый день читают наш блог,
              чтобы узнать больше о натуральных средствах, эфирных и
              сыродавленных маслах.
              Каждый день мы исследуем мир натуральных средств для
              укрепления здоровья, консультируемся с экспертами, докторами и психологами.</p>
            <p class="text-lh-24 q-mb-lg">
              В 2021 году блог Энергии Аромата вырос в собственное
              производство, чтобы дать нашим читателям возможность
              приобретать натуральный продукт, в качестве которого
              они могут быть уверены.

            </p>
            <q-btn color="primary" class="no-border-radius q-py-md q-px-xl gt-sm" @click="$router.push({name:'blog'})" no-caps unelevated label="Читать наш блог"/>
            <div class="text-right lt-md">
               <q-btn color="primary" class="no-border-radius q-py-md q-px-xl " @click="$router.push({name:'blog'})" no-caps unelevated label="Читать наш блог"/>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="mission bg-grey-2">
      <div class="container">
        <div class="mission-wrapper">
          <div class="mission-text">
            <h3 class="title text-lh-35">Наша миссия</h3>
            <p class="text-lh-24 q-mb-xl">
              Наша миссия – не только обеспечить вас натуральным
              качественным товаром, но и рассказать, как грамотно
              использовать масла для своего здоровья, а также
              готовить ту косметику, которая будет эффективна и
              действительно полезна Вашему организму.
            </p>

            <q-btn color="primary" class="no-border-radius q-py-md q-px-xl" no-caps unelevated label="Смотреть каталог"/>
          </div>
          <img class="gt-sm" src="~assets/mission-img.png" alt="">
        </div>
      </div>
    </section>
    <section class="team">
      <div class="container relative-position">
        <div class="team-grey-block gt-sm"></div>
        <div class="team-top row items-center">
          <div class="col-12 col-md-6 bg-primary flex items-center justify-center team-right gt-sm">
            <img class="" src="~assets/logo.svg" alt="">
          </div>
          <div class="col-12 col-md-5 offset-0 offset-md-1 ">
            <h3 class="title text-lh-35">Наша команда</h3>
            <p class="text-lh-24 q-mb-none">
              Наша команда – это эксперты в области ароматерапии и
              парфюмерии, психологи и врачи.
              Каждый день мы делимся с вами проверенными рецептами и
              помогаем с выбором и открываем для вас мир натуральных
              масел и смесей на их основе.
            </p>
          </div>
        </div>

      </div>
      <div class="container gt-sm">
         <h3 class="title text-lh-35 q-mb-xl">Командов профессионалов</h3>

      </div>
      <div class="team-slider-wrapper">
         <div class="team-slider-bg"></div>
      <div class="team-slider">
          <q-no-ssr>
            <Carousel ref="team" id="team" :settings="settings" :breakpoints="breakpoints">
              <Slide v-for="(slide,index) in teamSlides" :key="index">
                  <div class="gallery-item">
                    <div  class="gallery-item__img q-mb-lg">
                      <img  :src="slide.img" alt="">
                    </div>
                    <p class="q-mb-sm text-left gallery-item__title text-avenir-450 text-dark">{{slide.work}}</p>
                    <p class="q-mb-sm text-left gallery-item__title text-avenir-450 text-dark">{{slide.fio}}</p>
                  </div>
              </Slide>
              <template #addons>
                <Navigation />
              </template>

            </Carousel>
          </q-no-ssr>
        </div>
        <div class="team-slider-buttons q-gutter-lg gt-sm">
          <svg @click="teamSlide('prev')" class="cursor-pointer" width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M37 72.4575C17.4193 72.4575 1.54164 56.5837 1.54164 36.9992C1.54164 17.4185 17.4193 1.54085 37 1.54085C56.5806 1.54085 72.4583 17.4185 72.4583 36.9992C72.4583 56.5837 56.5806 72.4575 37 72.4575Z" stroke="#07737A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M42.5288 50.3054L29.1658 36.9999L42.5288 23.6944" stroke="#07737A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<svg @click="teamSlide('next')" class="cursor-pointer" width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M37 72.4575C56.5807 72.4575 72.4584 56.5837 72.4584 36.9992C72.4584 17.4185 56.5807 1.54085 37 1.54085C17.4194 1.54085 1.54169 17.4185 1.54169 36.9992C1.54169 56.5837 17.4194 72.4575 37 72.4575Z" stroke="#07737A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M31.4712 50.3054L44.8342 36.9999L31.4712 23.6944" stroke="#07737A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


        </div>
      </div>

    </section>
    <section class="feedback">
  <div class="container">
       <h3 class="title text-lh-35 q-mb-xl">Каждый день мы делаем клиентов счастливыми</h3>
    <div style="max-width: 1024px;margin: 0 auto" class="relative-position" >



       <q-no-ssr>
            <Carousel ref="gallery" :settings="settings" :breakpoints="breakpoints3">
              <Slide v-for="(slide,index) in feedbackSlides" :key="index">


                    <div  class="bg-grey-2 q-pa-md q-mx-md">
                    <p>{{slide.from}}</p>
                    <p>{{slide.text}}</p>

                    </div>





              </Slide>
              <template #addons>
                <Navigation />
              </template>

            </Carousel>
          </q-no-ssr>


    </div>

  </div>

</section>
<section class="feedback">
  <div class="container">
       <h3 class="title text-lh-35 q-mb-xl">Галерея</h3>
  </div>
      <q-no-ssr>
            <Carousel ref="gallery" :settings="settings" :breakpoints="breakpoints1">
              <Slide v-for="(slide,index) in gallerySlides1" :key="index">

                  <div class="gallery-item">
                    <!--                  @click="modalImg = slide.image,modal=true"-->

                    <div  class="gallery-item__img q-mb-lg">
                      <img  :src="slide.img" alt="">

                    </div>



                  </div>

              </Slide>
              <template #addons>
                <Navigation />
              </template>

            </Carousel>
          </q-no-ssr>
</section>
  </q-page>

</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data(){
    return{
      modal:false,
      modalImg:'',
      settings: {
        itemsToShow: 1,
        snapAlign: 'start',
      },
      breakpoints: {
        320: {
          itemsToShow: 1.5,
          snapAlign: 'center',
        },
        // 700px and up
        700: {
          itemsToShow: 3.5,
          snapAlign: 'center',
        },
        // 1024 and up
        1024: {
          itemsToShow: 4.5,
          //snapAlign: 'start',
        },
      },
       breakpoints1: {
        320: {
          itemsToShow: 1.5,
          snapAlign: 'center',
        },
        // 700px and up
        700: {
          itemsToShow: 3.5,
          snapAlign: 'center',
        },
        // 1024 and up
        1024: {
          itemsToShow: 7,
          //snapAlign: 'start',
        },
      },
         breakpoints3: {
        320: {
          itemsToShow: 1,
          snapAlign: 'center',
        },
        // 700px and up
        700: {
          itemsToShow: 1,
          snapAlign: 'center',
        },
        // 1024 and up
        1024: {
          itemsToShow: 2,
          //snapAlign: 'start',
        },
      },
      team_slide:1,
      teamSlides:[
        {img:'http://placehold.it/300x330',work:'Директор',fio:'Иванов Иван'},
        {img:'http://placehold.it/300x330',work:'Директор',fio:'Иванов Иван'},
        {img:'http://placehold.it/300x330',work:'Директор',fio:'Иванов Иван'},
        {img:'http://placehold.it/300x330',work:'Директор',fio:'Иванов Иван'},
        {img:'http://placehold.it/300x330',work:'Директор',fio:'Иванов Иван'},
      ],
       feedbackSlides:[
        {from:'Гость',text:' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'},
        {from:'Гость',text:' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'},
        {from:'Гость',text:' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'},
        {from:'Гость',text:' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'},
        {from:'Гость',text:' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'},

      ],
      gallerySlides:[],
      gallerySlides1:[
        {img:'http://placehold.it/300x330',work:'Директор',fio:'Иванов Иван'},
        {img:'http://placehold.it/300x330',work:'Директор',fio:'Иванов Иван'},
        {img:'http://placehold.it/300x330',work:'Директор',fio:'Иванов Иван'},
        {img:'http://placehold.it/300x330',work:'Директор',fio:'Иванов Иван'},
        {img:'http://placehold.it/300x330',work:'Директор',fio:'Иванов Иван'},
        {img:'http://placehold.it/300x330',work:'Директор',fio:'Иванов Иван'},
        {img:'http://placehold.it/300x330',work:'Директор',fio:'Иванов Иван'},
        {img:'http://placehold.it/300x330',work:'Директор',fio:'Иванов Иван'},
        {img:'http://placehold.it/300x330',work:'Директор',fio:'Иванов Иван'},
        {img:'http://placehold.it/300x330',work:'Директор',fio:'Иванов Иван'},

      ],
      faqItems:[
        {question:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
          answer:'- ЭLorem ipsum dolor sit amet, consectetur adipisicing elit. rendis porro quam quasi quibusdam quod rerum sed veritatis voluptates?'},
        {question:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
          answer:'- ЭLorem ipsum dolor sit amet, consectetur adipisicing elit. rendis porro quam quasi quibusdam quod rerum sed veritatis voluptates?'},
        {question:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
          answer:'- ЭLorem ipsum dolor sit amet, consectetur adipisicing elit. rendis porro quam quasi quibusdam quod rerum sed veritatis voluptates?'},
      ],
      newsItems:[
        {date:'17 февраля 2020', tag:'Денис Белькевич',title:'Просто о сложном: Art Investment',text:'Предметы искусства с инвестиционной точки зрения такой же материальный актив, как драгоценные металлы, недвижимость, акции и другие ценные бумаги. В середине 1980-х «язык искусства» начали переводить на понятный инвестору финансовый язык. С 2000-х годов, после появления доступных статистических баз данных и инвестиционной аналитики, искусство начали использовать в качестве осмысленного финансового инструмента.',url:'https://artinvestment.ru/invest/analytics/20200217_art_invest_2.html'},
        {date:'22 ноября 2020', tag:'Ксения Хофманн',title:'Произведения искусства как инструмент инвестиций',text:'Произведения искусства могут расти в цене и приносить своим вкладчикам прибыль подобно акциям и другим известным нам активам. Например, картина «Спаситель мира», написанная Леонардо Да Винчи в 1499 году, сейчас стоит более $450 млн, а «Алжирские женщины» Пабло Пикассо – почти $180 млн.',url:'https://vc.ru/finance/179696-proizvedeniya-iskusstva-kak-instrument-investiciy'},
        {date:'4 сентября 2021', tag:'Алексей Кудрявцев',title:'Открытие платформы Artdox 1 ноября 2021 года',
          text:'Первого ноября в Москве при поддержке Digi Gravure и Академии акварели и изящных искусств Сергея Андрияки открывается новый портал доходного искусства Artdox. Все желающие получат возможноть приобрести уникальные по качеству работы именитых художников и получать прибыль от выставлений репродукций на выставках и экспозициях',url:'https://vc.ru/finance/179696-proizvedeniya-iskusstva-kak-instrument-investiciy'},
      ],
      interierItems:[
        {title:'Заказ экспозиции',text:'Если вы не успели купить картину из нашей Галереи, вы можете ее заказать.',url:'gallery',link:'В каталог'},
        // {title:'Доставка',text:'Доставка только по Москве и московской области. Курьер – бесплатно.',url: 'index',link:'Подробнее'},
        {title:'Доставка',text:'Мы можем доставить вам приобретенный товар СДЭКом, Почтой России или нашим курьером! Стоимость доставки и страхование товара полностью за наш счет.',url: 'index',link:'Подробнее'},
        {title:'Возврат',text:'Возврат товара происходит согласно ст.24 и ст.25 закона о защите прав потребителей 07.02.1992 N 2300-1',url:'index',link:'Подробнее'},
        //{title:'Возврат',text:'Возврат картин и средств за нее возможен в любое время у нас в офисе.',url:'index',link:'Подробнее'},
      ],
      teamItems:[
        {img:'team1.jpg',name:'Lindsey Rosser',work:'Директор'},
        {img:'team2.jpg',name:'Jordyn Vetrovs',work:'Искусствовед'},
        {img:'team3.jpg',name:'Hannah Herwitz',work:'Юрист'},
        {img:'team4.jpg',name:'Paityn Bergson',work:'Менеджер'},

      ]

    }
  },
  async beforeMount() {
    const resp = await this.$api.get('/api/item/get?type=index')
    this.gallerySlides = resp.data
    const resp_banner = await this.$api.get('/api/data/banners')
    this.offerSlides = resp_banner.data
  },
  methods:{
    teamSlide(act){
      console.log(this.$refs['team'])

    },
    galleryPrev(){
      document.getElementsByClassName('carousel__prev')[0].click()
    },
    galleryNext(){
      document.getElementsByClassName('carousel__next')[0].click()
    },
  },
  computed:{
    offerSliderProgress(){
      return ((100 / this.offerSlides.length) * .01) * this.offer_slide
    }
  }
}
</script>
<style lang="sass" scoped>
.offer
  background: $grey-2

  &-slider
    height: 900px
    background: $grey-2
  &-slide
    background: $grey-2
    color: #fff
    display: grid
    grid-template-columns: 1fr 1fr
    align-items: center
    &-controls
      position: absolute
      display: flex
      justify-content: space-between
      align-items: center
      width: 500px
      bottom: 150px
      &__buttons
        display: flex
        align-items: center
        justify-content: space-between
        flex-basis: 130px
      &__progress
        width: 300px
        &-num
          color: $grey-5
          display: flex
          align-items: center
          justify-content: space-evenly
          margin-bottom: 10px
.about2
  &-bg
    height: 620px
    background: $primary url(~assets/about3.png) no-repeat right
  &-right
    position: relative
    height: 535px
    background: #FCFAF7
    padding: 40px 70px
    top: 40px
    left: -75px
@media (max-width: 1024px)
  .team-top
    margin-bottom: 50px !important
  .mission
    padding: 16px 0 !important
  .blog
    margin-bottom: 60px !important
  .about2
    &-right
      top: unset
      left: unset
      padding: 16px
      height: 720px
      background-size: cover !important
      background: #ffffff url(~assets/about-2-bg-sm.png) no-repeat right bottom
  .about
    & .text-h6
      font-size: 16px
  .offer
    &-slider
      height: 600px
    &-slide
      grid-template-columns: 1fr
      align-items: unset
      &-text
        order: 2
        & .title
          font-size: 24px
          line-height: 28px
        & .subtitle
          font-size: 14px
          line-height: 22px
      &-img
        order: 1
        display: flex
        align-items: center
        justify-content: center
        img
          width: 160px
          height: auto
      &-controls
        position: relative
        display: grid
        grid-template-columns: 1fr
        grid-gap: 30px
        padding: 0 40px
        width: unset
        bottom: 50px
        &__buttons
          justify-content: space-evenly
        &__progress
          width: 100%
.gallery-title
  display: flex
  align-items: center
  justify-content: space-between
  margin-bottom: 40px
  &__buttons
    display: flex
    align-items: center
    justify-content: space-between
    flex-basis: 120px

@media (max-width: 480px)
  .offer-slider
    height: 500px

.blog
  margin-bottom: 250px
  &-right
    position: relative
    height: 570px
  &-img
    position: absolute
    bottom: -50px
    left: -50px
.mission
  padding: 115px 0
  &-wrapper
    position: relative
    img
      position: absolute
      right: 0
      bottom: -115px
  &-text
    max-width: 500px

.team
  & .container
    z-index: 1
  &-top
    margin-bottom: 140px
  &-right
    height: 570px
  &-grey-block
    z-index: -1
    position: absolute
    width: 550px
    height: 485px
    top: 50%
    left: 50%
    transform: translateX(-50%) translateY(-50%)
    background: $grey-2
  &-slider
    max-width: 1100px
    margin-left: auto
    &-wrapper
      max-width: 1150px
      position: relative
      margin-left: auto
    &-bg
      position: absolute
      right: 0
      left: 0
      top: 150px
      bottom: 120px
      background: $grey-2
</style>
