

function uno (dos) {
    console.log("uno")
    setTimeout(dos,2000)
}

function dos () {
    console.log("dos")

}

setTimeout(() => uno(dos),5000)





const nombre = function () {
    console.log("nombre")
}

nombre()


const persona = () => console.log("Carolina")

persona();

() => console.log()

