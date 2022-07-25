<template>
  <q-page class="page ">


    <div class="row q-col-gutter-none q-col-gutter-md-lg mb-85">

      <div class="col-12 col-md-6 bordered img-magnifier-container q-mb-lg q-mb-md-none" >
        <q-img :ratio="16/9" fit="cover" @click="modal=true" :src="item.image" alt=""/>
      </div>
      <div class="col-12 col-md-5 flex column items-start q-px-md q-px-md-none">

        <div class="flex items-center justify-between q-mb-md full-width">
          <h1 class="item-title">{{item.name}}</h1>
          <p v-if="cartData.selectedVolume" class="text-bold text-fs18 no-margin">{{cartData.selectedVolume.price}} руб</p>
        </div>


        <p class="q-mb-lg">{{item.description_short}}</p>
        <div class="flex items-center q-mb-md">
          <p class="q-mb-none q-mr-md">Объем:</p>
          <q-select dense square color="positive" outlined v-model="cartData.selectedVolume" :options="item.volumes"/>
        </div>
        <div class="flex items-center q-mb-md">
          <p class="q-mb-none q-mr-md">Упаковка:</p>
          <q-btn-toggle
            v-model="cartData.selectedBox"
            class="my-custom-toggle"
            no-caps

            unelevated
            toggle-color="primary"
            color="white"
            text-color="primary"
            :options="boxOptions"
          />
        </div>
        <div class="q-gutter-md q-mb-xl"  >
          <!--v-if="item.left>=1 "-->
          <q-btn-group class=" bg-grey-2 "  unelevated>
            <q-btn   @click="amount>1 ? amount-=1 : amount=1" size="12px"  icon="remove" />
            <q-btn   size="16px" disable :label="amount" />
            <q-btn   @click="amount+=1" size="12px"  icon-right="add"  />
          </q-btn-group>
          <q-btn unelevated color="primary" class="no-border-radius q-py-sm q-px-md" no-caps @click="addToCart" label="Добавить в корзину"/>

        </div>
        <div class="row q-col-gutter-md">
          <div class="col-4 col-md-3 ">
            <div class="text-center">
               <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M29.1668 11.6666H24.7918V5.83325H4.37516C2.771 5.83325 1.4585 7.14575 1.4585 8.74992V24.7916H4.37516C4.37516 27.2124 6.32933 29.1666 8.75016 29.1666C11.171 29.1666 13.1252 27.2124 13.1252 24.7916H21.8752C21.8752 27.2124 23.8293 29.1666 26.2502 29.1666C28.671 29.1666 30.6252 27.2124 30.6252 24.7916H33.5418V17.4999L29.1668 11.6666ZM28.4377 13.8541L31.296 17.4999H24.7918V13.8541H28.4377ZM8.75016 26.2499C7.94808 26.2499 7.29183 25.5937 7.29183 24.7916C7.29183 23.9895 7.94808 23.3333 8.75016 23.3333C9.55225 23.3333 10.2085 23.9895 10.2085 24.7916C10.2085 25.5937 9.55225 26.2499 8.75016 26.2499ZM11.9877 21.8749C11.1856 20.9853 10.0481 20.4166 8.75016 20.4166C7.45225 20.4166 6.31475 20.9853 5.51266 21.8749H4.37516V8.74992H21.8752V21.8749H11.9877ZM26.2502 26.2499C25.4481 26.2499 24.7918 25.5937 24.7918 24.7916C24.7918 23.9895 25.4481 23.3333 26.2502 23.3333C27.0522 23.3333 27.7085 23.9895 27.7085 24.7916C27.7085 25.5937 27.0522 26.2499 26.2502 26.2499Z" fill="#07737A"/>
            </svg>
            </div>

            <p class="no-margin text-body2">Доставка товара по России</p>
          </div>
          <div class="col-4 col-md-3">
            <div class="text-center">
            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30.6248 23.3334V20.4167L18.9582 13.1251V5.10425C18.9582 3.89383 17.9811 2.91675 16.7707 2.91675C15.5603 2.91675 14.5832 3.89383 14.5832 5.10425V13.1251L2.9165 20.4167V23.3334L14.5832 19.6876V27.7084L11.6665 29.8959V32.0834L16.7707 30.6251L21.8748 32.0834V29.8959L18.9582 27.7084V19.6876L30.6248 23.3334Z" fill="#07737A"/>
            </svg>
            </div>
            <p class="no-margin text-body2">Доставка товара по России</p>
          </div>
          <div class="col-4 col-md-3">
            <div class="text-center">
            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24.792 5.83325H2.91699V8.74992H24.792V5.83325Z" fill="#07737A"/>
              <path d="M21.8752 24.7916H24.7918V20.4166H26.2502V17.4999L24.7918 10.2083H2.91683L1.4585 17.4999V20.4166H2.91683V29.1666H16.0418V20.4166H21.8752V24.7916ZM13.1252 26.2499H5.8335V20.4166H13.1252V26.2499ZM4.4335 17.4999L5.3085 13.1249H22.4002L23.2752 17.4999H4.4335Z" fill="#07737A"/>
              <path d="M33.5417 26.25H29.1667V21.875H26.25V26.25H21.875V29.1667H26.25V33.5417H29.1667V29.1667H33.5417V26.25Z" fill="#07737A"/>
            </svg>
            </div>
            <p class="no-margin text-body2">Доставка товара по России</p>
          </div>
        </div>



      </div>
    </div>
    <div class="container">

       <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"

        >
          <q-tab name="info" no-caps label="Информация о товаре" />
          <q-tab name="description" no-caps label="Описание товара" />
          <q-tab name="purpose" no-caps label="Назначение" />
          <q-tab name="feedback" no-caps label="Отзывы(20)" />
          <q-tab name="video" no-caps label="Видео" />
          <q-tab name="avaiable" no-caps label="Наличие" />
          <q-tab name="faq" no-caps label="Вопрос-ответ" />
        </q-tabs>
        <q-separator />
        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="info">
            <div class="" v-html="item.info"></div>
          </q-tab-panel>
           <q-tab-panel name="description">
            <div class="" v-html="item.description"></div>
          </q-tab-panel>
          <q-tab-panel name="purpose">
            <div class="" v-html="item.purpose"></div>
          </q-tab-panel>
          <q-tab-panel name="feedback">
            <div class="" v-for="item in item.feedbacks">
              <p>{{item.fio}}</p>
              <p>{{item.text}}</p>
               <q-separator />
            </div>
          </q-tab-panel>
        <q-tab-panel name="faq">
             <q-list separator>
            <q-expansion-item
              v-for="(item,index) in item.faqs"
              :key="index"
              group="group"
              :label="item.question"

              header-class="text-playfair q-py-md text-body1"
              class="text-montserrat text-body2"
              expand-icon="add"
              expanded-icon="close"
            >
              <q-card >
                <q-card-section>
                  {{item.answer}}
                </q-card-section>
              </q-card>
            </q-expansion-item>


          </q-list>
          </q-tab-panel>

        </q-tab-panels>




    </div>


  </q-page>

</template>
<script>


import {mapActions} from "vuex";

export default {
  data() {
    return {
      modal:false,
      amount:1,
      tab:'info',
      loading:false,
      agree:false,
      agree1:false,
      boxOptions:[
        {label:'Обычная',value:'Обычная'},
        {label:'Уникальная',value:'Уникальная'}
      ],
      cartData: {
        selectedVolume: null,
        selectedBox:'Обычная'
      },
      checkBox:false,
      item:{},
      faqItems:[
        {question:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
          answer:'- ЭLorem ipsum dolor sit amet, consectetur adipisicing elit. rendis porro quam quasi quibusdam quod rerum sed veritatis voluptates?'},
        {question:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
          answer:'- ЭLorem ipsum dolor sit amet, consectetur adipisicing elit. rendis porro quam quasi quibusdam quod rerum sed veritatis voluptates?'},
        {question:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
          answer:'- ЭLorem ipsum dolor sit amet, consectetur adipisicing elit. rendis porro quam quasi quibusdam quod rerum sed veritatis voluptates?'},
      ],
    }

  },
  async beforeMount() {
    await this.getItem()
    this.cartData.selectedVolume = this.item.volumes[0]
  },
  methods:{
    ... mapActions('data',['fetchCart']),
    async getItem(){
      const resp = await this.$api.get(`/api/item/one?slug=${this.$route.params.slug}`)
      this.item = resp.data
    },
    orderBtn(){
      this.$q.notify({
        message: `Заявка на заказ создана!<br><br> Мы с вами свяжемся в течении 12 часов для<br>уточнения тиража и оформления заказа.`,
        position: this.$q.screen.lt.sm ? 'bottom' : 'bottom-right',
        color:'positive',
        html: true,

      })
    },
    async addToCart(){
      console.log('dsfd')
      this.loading = !this.loading
      await this.$api.post('/api/cart/add',{
        id:this.item.id,
        amount:this.amount,
        cartData:this.cartData,
        session_id:this.$q.cookies.get('session_id')

      })
      this.loading = !this.loading
      this.$q.notify({
        message: 'Добавлено в корзину',
        position: this.$q.screen.lt.sm ? 'bottom' : 'bottom-right',
        color:'positive',
        icon: 'announcement'
      })
      await this.fetchCart()
      await this.getItem()
      this.amount=1
    }
  }
}
</script>

<style lang="sass" scoped>
.not-selected
  opacity: .5
  transition: all .2s linear
.item
  &-container
    max-width: 1000px
    margin: 0 auto
    padding: 0 10px
  &-card
    display: grid
    grid-template-columns: 1fr 1fr
    grid-gap: 30px
    margin-bottom: 65px
  &-title
    line-height: 32px
    font-size: 18px
    margin-top: 0
    margin-bottom: 20px
  &-feedback-grid
    display: grid
    grid-template-columns: 1fr
    grid-gap: 24px
  &-feedback-item
    display: grid
    grid-template-columns: 1fr 6fr
    border: 1px solid #E6E6E6
    box-sizing: border-box
    padding: 25px 35px
    grid-gap: 24px
.img-magnifier-container
  position: relative

.img-magnifier-glass
  position: absolute
  border: 3px solid #000
  border-radius: 50%
  cursor: none
  /*Set the size of the magnifier glass:*/
  width: 100px
  height: 100px
@media (max-width: 1024px)
  .item
    &-card
      grid-template-columns: 1fr
      margin-bottom: 0px
@media (max-width: 768px)
  .item-preview
    display: flex
    align-items: center
    justify-content: flex-start
    img
      max-width: 100px
      height: auto
      object-fit: contain
      margin-right: 15px
  .img-magnifier-container
    text-align: center
</style>
