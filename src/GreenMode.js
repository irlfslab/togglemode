import { useState } from 'react'

export default function GreenMode () {
  const [greenMode, setGreenMode] = useState(false)

  return (
    <div className={`page ${greenMode && 'green-mode'}`}> 
      { console.log(greenMode) }
      <button
        className='green-mode-button'
        onClick={() => setGreenMode(true)}
      >
        Green Mode
      </button>
      { console.log('exec 2') }
      <button
        className='light-mode-button'
        onClick={() => setGreenMode(false)}
      >
        Light Mode
      </button>
      { console.log('exec 3') }
    </div>
  )
}
