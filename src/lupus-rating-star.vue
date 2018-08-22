<template>
  <div class="lupus-rating-star">
    <svg viewBox="0 0 20 20" version="1.1"
         xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id="cut-off-right">
          <rect x="11" y="0" width="10" height="20" />
        </clipPath>
      </defs>
      <g id="GRIDS" stroke="none" stroke-width="1" fill="none"
         fill-rule="evenodd">
        <g id="starfill"
           fill-rule="nonzero">
          <g id="intro">
            <g id="rating">
              <g id="ic_star_rate_black_18px">
                <polygon id="Shape"
                         points="10 15.2916667 16.1833333 19.7916667 13.8166667 12.525 20 8.125 12.4166667 8.125 10 0.625 7.58333333 8.125 0 8.125 6.18333333 12.525 3.81666667 19.7916667"></polygon>
              </g>
            </g>
          </g>
        </g>
        <g id="starfill2"
           fill-rule="nonzero" clip-path="url(#cut-off-right)" >
          <g id="intro" >
            <g id="rating" >
              <g id="ic_star_rate_black_18px">
                <polygon id="Shape"
                         points="10 15.2916667 16.1833333 19.7916667 13.8166667 12.525 20 8.125 12.4166667 8.125 10 0.625 7.58333333 8.125 0 8.125 6.18333333 12.525 3.81666667 19.7916667"></polygon>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  </div>
</template>

<style lang="scss">
  .lupus-rating-star {
    #starfill, #starfill2 {
      fill: #fff;
      stroke: #eee;
      stroke-width: 2px;
    }
    #starfill2 {
      display: none;
    }
    cursor: pointer;
    &.voted {
      #starfill {
        fill: #000;
        stroke: #000;
      }
    }
    &.voted-half {
      #starfill {
        fill: #000;
        stroke: transparent;
      }
      #starfill2 {
        display: block;
      }
    }
    &.highlighted {
      #starfill {
        fill: yellow;
        stroke: yellow;
      }
      #starfill2 {
        display: none;
      }
    }
    &.hovered {
      #starfill {
        fill: yellow;
        stroke: yellow;
      }
      #starfill2 {
        display: none;
      }
    }
  }

  .readonly {
    .lupus-rating-star {
      cursor: initial;
    }
  }
</style>
