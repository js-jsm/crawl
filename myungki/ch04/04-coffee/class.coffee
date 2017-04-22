class Animal
    atype: "Animal"

    constructor: (@name) ->

    print: ->
        console.log "name is #{@name}, type is #{@atype}"

taro = new Animal "Taro"
taro.print()
