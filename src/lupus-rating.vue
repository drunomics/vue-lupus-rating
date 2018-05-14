<template>
  <div class="lupus-rating" v-on:mouseleave="hover(false)">
    <lupus-rating-star v-on:click.native="vote(1)" v-on:mouseenter.native="hover(1)" :class="style1"/>
    <lupus-rating-star v-on:click.native="vote(2)" v-on:mouseenter.native="hover(2)" :class="style2"/>
    <lupus-rating-star v-on:click.native="vote(3)" v-on:mouseenter.native="hover(3)" :class="style3"/>
    <lupus-rating-star v-on:click.native="vote(4)" v-on:mouseenter.native="hover(4)" :class="style4"/>
    <lupus-rating-star v-on:click.native="vote(5)" v-on:mouseenter.native="hover(5)" :class="style5"/>
    <div class="">({{ internal_votecount }})</div>
  </div>
</template>

<script>
  import axios from 'axios';
  import LupusRatingStar from './lupus-rating-star.vue';

  export default {
    name: 'lupus-rating',
    props: ['currentrating', 'votecount', 'voteurl', 'alreadyvoted', 'readonly'],
    data() {
      return  {
        voted: false,
        preventvote: false,
        hovered: false,
        internal_votecount: false,
      }
    },
    mounted() {
      if (this.alreadyvoted) {
        this.voted = this.alreadyvoted;
        this.preventvote = true;
      }
      if (this.votecount) {
        this.internal_votecount = this.votecount;
      }
    },
    components: {
      'lupus-rating-star': LupusRatingStar,
    },
    computed: {
      rating() {
        const integer_part = Math.floor(this.currentrating);
        const decimal_part = this.currentrating - integer_part;
        let rating = integer_part;

        if (decimal_part >= 0.3 && decimal_part <= 0.7) {
          rating = rating + 0.5;
        }
        if (decimal_part >= 0.8) {
          rating = rating + 1;
        }

        return rating;
      },
      style1() {
        return {
          'hovered': this.hovered >= 1  && !this.voted,
          'highlighted': this.voted >= 1,
          'voted': this.rating >= 1 && !this.voted,
          'voted-half': this.rating === 0.5  && !this.voted,
        }
      },
      style2() {
        return {
          'hovered': this.hovered >= 2  && !this.voted,
          'highlighted': this.voted >= 2,
          'voted': this.rating >= 2  && !this.voted,
          'voted-half': this.rating === 1.5  && !this.voted,
        }
      },
      style3() {
        return {
          'hovered': this.hovered >= 3  && !this.voted,
          'highlighted': this.voted >= 3,
          'voted': this.rating >= 3  && !this.voted,
          'voted-half': this.rating === 2.5  && !this.voted,
        }
      },
      style4() {
        return {
          'hovered': this.hovered >= 4  && !this.voted,
          'highlighted': this.voted >= 4,
          'voted': this.rating >= 4  && !this.voted,
          'voted-half': this.rating === 3.5  && !this.voted,
        }
      },
      style5() {
        return {
          'hovered': this.hovered >= 5  && !this.voted,
          'highlighted': this.voted >= 5,
          'voted': this.rating >= 5  && !this.voted,
          'voted-half': this.rating === 4.5  && !this.voted,
        }
      }
    },
    methods: {
      vote(vote) {
        if (this.preventvote || this.readonly) {
          return false;
        }
        if (this.votecount) {
          this.internal_votecount = parseInt(this.internal_votecount) + 1;
        }
        else {
          this.internal_votecount = 1
        }
        this.preventvote = true;
        this.voted = vote;
        if (this.voteurl) {
          axios.post(voteurl, {vote})
        }
      },
      hover(index) {
        if (this.readonly) {
          return false;
        }
        this.hovered = index;
      }
    }
  }
</script>

<style lang="scss">
  .lupus-rating {
    display: flex;
  }
</style>