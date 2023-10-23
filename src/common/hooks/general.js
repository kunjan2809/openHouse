import { useEffect } from "react"

export const useScrollToTop = (trigger) => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [trigger])
}