# vue-lupus-rating
Vue rating component.



## Install

via npm:
`npm install https://github.com/drunomics/vue-lupus-rating.git`

## Usage

The following props are available to conigure this component:

* 'currentrating' -> the current average rating that is calulated by the backend. (e.g 4.7)
* 'votecount' -> the current total votes that were counted.
* 'voteurl' -> supply a api endpoint where votes can be logged.
* 'alreadyvoted' -> if the user already voted and further voting is disabled supply the actual vote the user made.
* 'readonly' -> Readonly mode without interaction, just display.

The request to the voteurl will send a POST request with the very simple json payload:

`{ vote: 4 }` (e.g.)
