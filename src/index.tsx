import * as React from 'react'
import uniqid from 'uniqid'

export function useMessageState<TData = any>(
  canal: string,
  defaultData: TData
): [TData, React.Dispatch<React.SetStateAction<TData>>] {
  const instanceIdRef = React.useRef(uniqid())

  const [state, _setState] = React.useState<TData>(defaultData)

  const handleMessage = (e: any) => {
    if (
      e.data?.type === 'use-message-state' &&
      e.data.from !== instanceIdRef.current &&
      e.data.canal === canal
    ) {
      _setState(e.data.data)
    }
  }

  const sendMessage = (data: TData) => {
    window.postMessage(
      {
        type: 'use-message-state',
        canal,
        data,
        from: instanceIdRef.current
      },
      document.location.origin
    )
  }

  React.useEffect(() => {
    window.addEventListener('message', handleMessage)

    return () => {
      window.removeEventListener('message', handleMessage)
    }
  }, [])

  const setState = (newState: TData) => {
    if (typeof newState === 'function') {
      _setState((state) => {
        const result = newState(state)

        sendMessage(result)

        return result
      })
    } else {
      sendMessage(newState)
      _setState(newState)
    }
  }

  return [state, setState]
}
