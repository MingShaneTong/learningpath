import { useEffect, useState } from 'react'
import './App.css'
import { DefaultApi, Configuration } from '@learningpath/client-gateway'


function App() {
  const [count, setCount] = useState(0)
  const [pingResult, setPingResult] = useState<string>('')

  useEffect(() => {
    // Create an instance of the API client
    const config = new Configuration({ basePath: '/api' })
    const api = new DefaultApi(config)

    // Call the ping endpoint (adjust method name if needed)
    api.pingGet()
      .then(response => {
        setPingResult('Ping successful: ' + JSON.stringify(response))
      })
      .catch(error => {
        setPingResult('Ping failed: ' + error.message)
      })
  }, [])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
        </a>
        <a href="https://react.dev" target="_blank">
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <p>
          <strong>Gateway Ping Result:</strong> {pingResult}
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
