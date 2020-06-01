<template>
        <header>
            <div class="header__container">
                <div class="header__title">
                    <h1>La Casa de mi padre</h1>
                </div>

                <div class="header__phrase">
                    <h2 class="header__frase">
                        <span class="typed-text"><span style="color: white;">#</span>{{ typeValue }}|</span>
                    </h2>
                </div>

                <div class="header__direction">
                    <p>Edf. Santa Fe, nivel Mezzanina. Calle Tito Salas. Bellas Artes – Caracas.</p>
                    <p>Teléfonos: 0212 -578 5969 / 0424-149 8800</p>
                </div>
                <!-- <span class="cursor" :class="{'typing': typeStatus}">&nbsp;</span> -->
            </div>
        </header>
</template>

<script>
export default {
    name: 'PxHomeHeader',

        data: () => {
            return {
                typeValue: '',
                typeStatus: false,
                typeArray: ['Donde Todos Tiene un Lugar'],
                typingSpeed: 90,
                erasingSpeed: 50,
                newTextDelay: 800,
                typeArrayIndex: 0,
                charIndex: 0
            }
        },
   methods: {
      typeText() {
        if(this.charIndex < this.typeArray[this.typeArrayIndex].length) {
          if(!this.typeStatus)
            this.typeStatus = true;
          this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
          this.charIndex += 1;
          setTimeout(this.typeText, this.typingSpeed);
        }
        else {
          this.typeStatus = false;
          setTimeout(this.eraseText, this.newTextDelay);
        }
      },
      eraseText() {
        if(this.charIndex > 0) {
          if(!this.typeStatus)
            this.typeStatus = true;
          this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1);
          this.charIndex -= 1;
          setTimeout(this.eraseText, this.erasingSpeed);
        }
        else {
          this.typeStatus = false;
          this.typeArrayIndex += 1;
          if(this.typeArrayIndex >= this.typeArray.length)
            this.typeArrayIndex = 0;
          setTimeout(this.typeText, this.typingSpeed + 1000);
        }
      }
    },
    created() {
      setTimeout(this.typeText, this.newTextDelay + 200);
    }
}
</script>

<style scoped>
    header {
        height: 100vh;
        background-image: url('../assets/Alabanza-min.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        text-align: center;

        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        grid-template-areas:  "."
                              "header__content"
                              ".";
    }

    .header__container {
        grid-area: header__content;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        max-width: 1920px;
        align-items: center;
        justify-items: center;

        /* row-gap: 50px; */
    }

    .header__frase {
        background-color: #275287;
        color: #f2bf10;
        text-shadow: 0 0 3px #e4bf48;
        display: inline-block;
        width: 690px;
        font-size: 50px;
        align-self: center;
    }

    .header__direction {
        color: whitesmoke;
        font-weight: 600;
        text-align: center;
        font-size: 20px;
    }

    h1 {
        color: whitesmoke;
        font-size: 100px;
        text-shadow: 0 0 5px #FFF, 0 0 10px #484848, 0 0 20px #275287;
    }

    .v-application p {
        margin: 0px;
    }


@media (min-width: 911px){
    .header__container {
      row-gap: 50px;
    }
}

@media (min-width: 320px) and (max-width: 767px) {
    .header__container {
    grid-template-rows: min-content min-content min-content;
    row-gap: 1em;
    }

    .header__title h1 {
      font-size: 4.3em;
    }

    .header__frase {
      width: 100%;
      font-size: 1.4em;
    }

    .header__direction {
      font-size: 1em
    }
}

@media (min-width: 768px) and (max-width: 1024px) {
    .header__container {
      grid-template-rows: min-content min-content min-content;
    }

    .header__title h1 {
      font-size: 100px;
    }

    .header__frase {
      width: 100%;
      font-size: 50px;
    }

    .header__direction {
      align-self: flex-start;
      font-size: 20px;
    }
}


</style>