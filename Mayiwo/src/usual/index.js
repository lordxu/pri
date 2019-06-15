export default {
  getIntrinsicSize (el) {
    el.nodeType || (el = document.querySelector(el))
    let posRect = el.getBoundingClientRect()
    return {
      width: posRect.right - posRect.left,
      height: posRect.bottom - posRect.top
    }
  },

  resetFontSize () {
    let evt = 'resize'
    let timer = null

    window.addEventListener(evt, function () {
      clearTimeout(timer)
      timer = setTimeout(_resetFontSize, 300)
    }, false)

    window.addEventListener('pageshow', function (e) {
      if (e.persisted) {
        clearTimeout(timer)
        timer = setTimeout(_resetFontSize, 300)
      }
    }, false)

    _resetFontSize()

    function _resetFontSize () {
      let winWidth = window.innerWidth
      let size = (winWidth / 375) * 10
      document.documentElement.style.fontSize = size + 'px'
    }
  }
}