import {useState} from 'react'
import './index.css'
import {Noteheading} from './styledComponents'


const Unlock = () => {
  const [unlock, setUnlock] = useState(true)
  const [text, setText] = useState('Locked')
  const [btnText, setBtnText] = useState('Unlock')

  const change = () => {
    setUnlock(prevUnlock => !prevUnlock)
    setText(prevUnlock => prevUnlock ? 'Unlocked' : 'Locked')
    setBtnText(prevUnlock => prevUnlock ? 'Lock' : 'Unlock')
  }

  retun (
    <section className="a">
      {unlock ? (
        <img
          src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
          alt="lock"
        />
      ) : (
        <img
          src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
          alt="unlock"
        />
      )}
      <Noteheading>
        Your Device is {text}
      </Noteheading>
      <button className="btn" onClick={change}>
        {btnText}
      </button>
    </section>
  )
}
export default Unlock
