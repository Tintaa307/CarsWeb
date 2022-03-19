window.onload = () => {
    let links = document.querySelectorAll('.link')
    
    let primero = links[0]
    primero.addEventListener('click', () => {
      scrollSuave('#Home', 500, 0)
    })

    let segundo = links[1]
    segundo.addEventListener('click', () => {
      scrollSuave('#Me', 500, 0)
    })
  
    let tercero = links[2]
    tercero.addEventListener('click', () => {
      scrollSuave('#Recommend', 500, 0)
    })

    let cuarto = links[3]
    cuarto.addEventListener('click', () => {
      scrollSuave('#Services', 500, 0)
    })

    let quinto = links[4]
    quinto.addEventListener('click', () => {
      scrollSuave('#Contact', 500, 0)
    })

    let sexto = links[5]
    sexto.addEventListener('click', () => {
      scrollSuave('#Home', 500, 0)
    })

    let septimo = links[6]
    septimo.addEventListener('click', () => {
      scrollSuave('#Me', 500, 0)
    })

    let octavo = links[7]
    octavo.addEventListener('click', () => {
      scrollSuave('#Recommend', 500, 0)
    })

    let noveno = links[8]
    noveno.addEventListener('click', () => {
      scrollSuave('#Services', 500, 0)
    })

    let decimo = links[9]
    decimo.addEventListener('click', () => {
      scrollSuave('#Contact', 500, 0)
    })
}
  
  
const scrollSuave = (objetivo, duracion, compensacion) => {
    let elemObj = document.querySelector(objetivo)
    let elemPos = elemObj.getBoundingClientRect().top - compensacion
    let posInicial = window.pageYOffset
    let tiempoInicial = null
  
const animacion = tiempoAhora => {
      if (tiempoInicial === null) tiempoInicial = tiempoAhora
      tiempoPasado = tiempoAhora - tiempoInicial
      let auxAnimacion = easeInOutQuad(tiempoPasado, posInicial, elemPos, duracion)
      window.scrollTo(0, auxAnimacion)
      if (tiempoPasado < duracion) requestAnimationFrame(animacion)
    }
    requestAnimationFrame(animacion)
}
  
const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2
    if (t < 1) return c / 2 * t * t + b
    t--
    return - c / 2 * (t * (t - 2) - 1) + b
}