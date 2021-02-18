import { history } from '@vitjs/runtime'

const NoFoundPage: React.FC = () => (
  <p>
    <button onClick={() => history.push('/')}>Back Home</button>
  </p>
)

export default NoFoundPage
