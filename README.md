# vue-lupus-rating
Vue rating component.

## Install

via npm:
`npm install https://github.com/drunomics/vue-lupus-rating.git`

## Usage

The following props are available to conigure this component:

* 'currentrating' -> the current average rating that is calulated by the backend. (e.g 4.7)
* 'votecount' -> the current total votes that were counted.
* 'useemit' -> if set to true the vote will be emitted via the `$emit` function, else it defaults to firing a custom event `lupus-rating.vote` on the document with the vote as eventdata.
* 'alreadyvoted' -> if the user already voted and further voting is disabled supply the actual vote the user made.
* 'readonly' -> Readonly mode without interaction, just display.

The Vote will be emitted via the `$emit` function if set or else it defaults to firing a custom event `lupus-rating.vote` on the document with the vote as eventdata.

Example data for the event:
```
{ vote: 4 }
```
