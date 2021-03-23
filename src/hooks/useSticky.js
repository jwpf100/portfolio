import { useEffect, useState, useRef } from 'react'
import { debounce } from '../utilities/helpers'

function useSticky() {
  const [isSticky, setSticky] = useState(false)
  const element = useRef(null)

  const handleScroll = debounce(() => {
    element.current.getBoundingClientRect().bottom < 1
      ? setSticky(true)
      : setSticky(false)
  }, 20)

  // This function handles the scroll performance issue
  /*  const debounce = (func, wait = 20, immediate = true) => {
    let timeOut
    return () => {
      const context = this
      const args = arguments
      const later = () => {
        timeOut = null
        if (!immediate) func.apply(context, args)
      }
      const callNow = immediate && !timeOut
      clearTimeout(timeOut)
      timeOut = setTimeout(later, wait)
      if (callNow) func.apply(context, args)
    }
  }
*/

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', () => handleScroll)
    }
  }, [handleScroll])

  return { isSticky, element }
}

export default useSticky
