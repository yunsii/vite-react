import './index.less'

export default function Welcome() {
  const [count, setCount] = useState<number>(0)

  return (
    <div className='App'>
      <header className='App-header'>
        <img
          src='https://github.com/vitjs/vit/raw/master/icons/logo.svg'
          className='App-logo mb-24px'
          alt='logo'
        />
        <p>Hello Vite-React!</p>
        <p>
          <button
            type='button'
            className='px-8px rounded-8px'
            onClick={() => setCount((currentCount) => currentCount + 1)}
          >
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>Welcome/index.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
          {' | '}
          <a
            className='App-link'
            href='https://vitejs.dev/guide/features.html'
            target='_blank'
            rel='noopener noreferrer'
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}
