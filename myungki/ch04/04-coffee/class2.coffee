class Animal

    atype: "Animal"

    constructor: (@name) ->

    print: ->
        console.log "name is #{@name}, type is #{@atype}"

class Dog extends Animal

    atype: "Dog"

    print: ->
        console.log "mung mung"
        super()

class Cat extends Animal

    atype: "Cat"

    print: ->
        console.log "nyaong"
        super()

jiro = new Dog "Jiro"
jiro.print()

mike = new Cat "Mike"
mike.print()
