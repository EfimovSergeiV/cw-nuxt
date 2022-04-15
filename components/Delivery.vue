<template>
  <div>
    <b-modal
      id="delivery-method"
      size="xl"
      header-bg-variant="dark"
      header-text-variant="light"
      body-bg-variant="dark"
      body-text-variant="primary"
      hide-header
      hide-footer
      ok-only
      ok-title="Закрыть окно"
      centered
    >
      <div class="text-light">
        <b-row class="mt-4 mb-2">
          <b-col cols="12">
            <h4>
              Доставка осуществляется транспортными компаниями во все регионы
              России и оплачивается покупателем в соответствии с тарифами
              транспортных компаний:
            </h4>
          </b-col>
        </b-row>
        <div class="paymethod-border">
          <!-- <b-row class="mb-4">
            <b-col cols="12">
              <h4>Оплата по выставленному счету</h4>
            </b-col>
          </b-row> -->
          <b-row align-v="center">
            <b-col cols="12">
              <b-row>
                <b-col cols="12">
                  <h3 class="hr text-warning">
                    <a
                      href="https://www.cdek.ru/ru/individuals/tariffs"
                      target="blank"
                    >
                      <h5 class="text-light">CDEK</h5>
                    </a>
                  </h3>
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
