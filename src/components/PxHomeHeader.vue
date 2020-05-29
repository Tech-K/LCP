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

        vertical-align: middle;
    }

    .header__frase {
        background-color: #275287;
        color: #f2bf10;
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
    }

    .v-application p {
        margin: 0px;
    }


</style>