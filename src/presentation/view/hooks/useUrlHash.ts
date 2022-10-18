import { useEffect, useState } from "react"

function useWindowEvent(event: string, callback: EventListener) {
    useEffect(() => {
        // Skip on SSR
        if (typeof window === 'undefined') return () => { }

        window.addEventListener(event, callback)

        // Unsubscribe on disposal
        return () => window.removeEventListener(event, callback)
    }, [event, callback])
}

export function useUrlHash(): string {
    const [urlHash, setUrlHash] = useState(
        typeof window != 'undefined' ? window.location.hash.substr(1) : ''
    )

    useWindowEvent('hashchange', () => {
        if (urlHash === window.location.hash.substr(1)) return

        setUrlHash(window.location.hash.substr(1))
    })
    return urlHash || ''
}