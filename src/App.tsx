import Authentication from './components/Authentication'
import Questionnaire from './components/Questionnaire'
import './index.css'


function App() {
  return (
    <>
      <Authentication>
        <Questionnaire/>
      </Authentication>
    </>
  )
}

export default App
