<template>
  <div>
    <b-modal
      id="pay-method"
      size="xl"
      title="Способы оплаты"
      header-bg-variant="dark"
      header-text-variant="light"
      body-bg-variant="dark"
      body-text-variant="primary"
      hide-footer
      ok-only
      ok-title="Закрыть окно"
      centered
    >
      <div class="text-light">
        <b-row class="mt-4 mb-2">
          <b-col cols="12">
            <h2>Для физических лиц</h2>
          </b-col>
        </b-row>
        <div class="paymethod-border">
          <!-- <b-row class="mb-4">
            <b-col cols="12">
              <h4>Оплата по выставленному счету</h4>
            </b-col>
          </b-row> -->
          <b-row align-v="center">
            <b-col cols="2">
              <div class="text-center">
                <b-img
                  src="../assets/images/payment1.png"
                  fluid
                  alt="Responsive image"
                ></b-img>
              </div>
            </b-col>
            <b-col cols="10">
              <b-row>
                <b-col cols="12">
                  <h3 class="hr">Оплата</h3>
                  <h3 class="hr text-warning">при получении</h3>
                  <h3 class="hr">
                    в нашем филиале, курьеру или самовывозе из транспортной
                    компании
                  </h3>
                </b-col>
                <b-col>
                  <b-row class="mt-3">
                    <b-col cols="12">
                      <h5>
                        Возможна оплата наличными или по карте. Перед оплатой Вы
                        сможете лично проверить комплектацию заказа и убедиться,
                        что он не был поврежден при транспортировке. Для
                        некоторых позиций "Под заказ" может потребоваться
                        предоплата.
                      </h5>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </div>
        <b-row class="mt-4 mb-2">
          <b-col cols="12">
            <h2>Для юридических лиц</h2>
          </b-col>
        </b-row>
        <div class="paymethod-border">
          <!-- <b-row class="mb-4">
            <b-col cols="12">
              <h4>Оплата по выставленному счету</h4>
            </b-col>
          </b-row> -->
          <b-row align-v="center">
            <b-col cols="2">
              <div class="text-center">
                <b-img
                  src="../assets/images/payment0.png"
                  fluid
                  alt="Responsive image"
                ></b-img>
              </div>
            </b-col>
            <b-col cols="10">
              <b-row>
                <b-col cols="12">
                  <h3 class="hr">Оплата</h3>
                  <h3 class="hr text-warning">по выставленному счету</h3>
                </b-col>
                <b-col>
                  <b-row class="mt-3">
                    <b-col cols="12">
                      <h5>
                        После согласования всех деталей заказа, Вам будет
                        выставлен счет, действительный в течение 3 дней. Если
                        нужно продлить срок - свяжитесь с нашим менеджером.
                      </h5>
                    </b-col>
                  </b-row>
                  <b-row class="mt-3">
                    <b-col cols="12">
                      <h5>
                        Вместе с заказом Вы получите все необходимые документы:
                        счет-фактуры и товарные накладные.
                      </h5>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<style scoped>
.paymethod-border {
  border: 1px solid #585858;
  margin: 2px;
  padding: 20px;
  border-radius: 5px;
}
</style>
