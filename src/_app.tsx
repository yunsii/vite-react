import type { AppProps } from '@vitjs/runtime'

export default function App(props: AppProps) {
  const { Component } = props

  useEffect(() => {
    console.log('custom app')
  }, [])

  return (
    <>
      <Component />
    </>
  )
}
