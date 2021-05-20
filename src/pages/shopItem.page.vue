<template>
  <div>
    <p class="q-mt-md q-ml-lg" style="font-size:1.4rem ;color :#e07407">
      Browse our best
    </p>
    <div class="q-pa-md q-ml-md">
      <div class="row q-gutter-md ">
        <div class="col-12 col-md-3" v-for="card in cardData" :key="card.title">
          <q-card class="my-card">
            <video loop autoplay :src="card.video" width="100%" />

            <q-card-section>
              <div class="text-h6">{{ card.title }}</div>
            </q-card-section>
          </q-card>
        </div>

        <div class="col-12 col-md-2" style="position:relative">
          <q-btn
            flat
            round
            style="color:#e07407 ;font-size: 32px;"
            class="absolute-center"
            push
            icon="keyboard_arrow_right"
            direction="right"
            to="/shop"
          >
            <q-tooltip content-class="bg-orange">
              Visit Shop
            </q-tooltip>
          </q-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const cardData = [
  {
    title: "ItemKeep active with ADIDASs",
    video:
      "https://brand.assets.adidas.com/video/upload/q_auto,vc_auto/video/upload/global%20brand%20publishing/Horizontal/Impossible%20is%20nothing/SUSTAINABILITY/horizontal-concepts-ss21-IIN-sustainability-hp-teaser-carousel-1-v1-d.mp4"
  },
  {
    title: "World wide shopping experiance",
    video:
      "https://brand.assets.adidas.com/video/upload/q_auto,vc_auto/video/upload/global%20brand%20publishing/Creators%20Club%20Week%20ss21%20May/Educate/Adidas_CCW-May_Masthead_TC_Carousel_1050x1400_v04.mp4"
  },
  {
    title: "Join us to save our Planet",
    video:
      "https://brand.assets.adidas.com/video/upload/q_auto,vc_auto/video/upload/running-fw21-rfto-educate-hp-carousel-RFTO_g8ompu.mp4"
  }
];

export default {
  data() {
    return {
      cardData
    };
  }
};
</script>

<style scoped>
@media screen and (max-width: 768px) {
  p {
    margin: 0px 20px;
  }
  div {
    padding: 4px;
    margin: 10px 0px;
  }
}
</style>
