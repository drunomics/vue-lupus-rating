<template>
  <div class="lupus-rating" v-on:mouseleave="hover(false)" :class="{'readonly': readonly}">
    <lupus-rating-star v-on:click.native="vote(1)" v-on:mouseenter.native="hover(1)" :class="style1"/>
    <lupus-rating-star v-on:click.native="vote(2)" v-on:mouseenter.native="hover(2)" :class="style2"/>
    <lupus-rating-star v-on:click.native="vote(3)" v-on:mouseenter.native="hover(3)" :class="style3"/>
    <lupus-rating-star v-on:click.native="vote(4)" v-on:mouseenter.native="hover(4)" :class="style4"/>
    <lupus-rating-star v-on:click.native="vote(5)" v-on:mouseenter.native="hover(5)" :class="style5"/>
    <div class="lupus-rating__count">({{ internal_votecount }})</div>
  </div>
</template>

<script>
import LupusRatingStar from './lupus-rating-star.vue'

export default {
  name: 'lupus-rating',
  props: {
    'currentrating': null,
    'votecount': null,
    'alreadyvoted': null,
    'readonly': null,
    'entityid': {
      type: String,
      required: true
    },
    'entitytype': {
      type: String,
      required: true
    },
    'entitybundle': {
      type: String,
      required: true
    }
  },
  data () {
    return {
      voted: false,
      hovered: false,
      internal_votecount: 0
    }
  },
  mounted () {
    if (this.alreadyvoted) {
      this.voted = this.alreadyvoted
    }
    if (this.votecount) {
      this.internal_votecount = this.votecount
    }
  },
  components: {
    'lupus-rating-star': LupusRatingStar
  },
  computed: {
    rating () {
      const integerPart = Math.floor(this.currentrating)
      const decimalPart = this.currentrating - integerPart
      let rating = integerPart

      if (decimalPart >= 0.3 && decimalPart < 0.7) {
        rating = rating + 0.5
      }
      if (decimalPart >= 0.7) {
        rating = rating + 1
      }

      return rating
    },
    style1 () {
      return {
        'hovered': this.hovered >= 1,
        'highlighted': this.voted >= 1,
        'voted': this.rating >= 1 && !this.voted,
        'voted-half': this.rating === 0.5 && !this.voted
      }
    },
    style2 () {
      return {
        'hovered': this.hovered >= 2,
        'highlighted': this.voted >= 2,
        'voted': this.rating >= 2 && !this.voted,
        'voted-half': this.rating === 1.5 && !this.voted
      }
    },
    style3 () {
      return {
        'hovered': this.hovered >= 3,
        'highlighted': this.voted >= 3,
        'voted': this.rating >= 3 && !this.voted,
        'voted-half': this.rating === 2.5 && !this.voted
      }
    },
    style4 () {
      return {
        'hovered': this.hovered >= 4,
        'highlighted': this.voted >= 4,
        'voted': this.rating >= 4 && !this.voted,
        'voted-half': this.rating === 3.5 && !this.voted
      }
    },
    style5 () {
      return {
        'hovered': this.hovered >= 5,
        'highlighted': this.voted >= 5,
        'voted': this.rating >= 5 && !this.voted,
        'voted-half': this.rating === 4.5 && !this.voted
      }
    }
  },
  methods: {
    vote (vote) {
      if (this.readonly) {
        return false
      }
      if (!this.alreadyvoted && !this.voted) {
        if (this.votecount) {
          this.internal_votecount = parseInt(this.internal_votecount) + 1
        } else {
          this.internal_votecount = 1
        }
      }
      this.voted = vote
      const votedata = {
        vote: vote,
        entityid: this.entityid,
        entitytype: this.entitytype,
        entitybundle: this.entitybundle
      }
      this.$emit('vote', votedata)
    },
    hover (index) {
      if (this.readonly) {
        return false
      }
      this.hovered = index
    }
  }
}
</script>

<style lang="scss">
  .lupus-rating {
    display: flex;
  }
</style>
