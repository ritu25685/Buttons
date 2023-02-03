import React from 'react'
import Button from './components/Button'
import {GoBell,GoCloudDownload,GoCreditCard} from 'react-icons/go'
const App = () => {
  const onHandleClick=()=>{
    console.log("Hello World")
  }
  const onMouseHover=()=>{
    console.log('mouseHover')

  }
  return (
    <div>
        <div>
          <Button onClick={onHandleClick} onMouseHover={onMouseHover} primary outline>
            <GoBell/>
            Click me!
            
          </Button>
          </div>
          <div>
          <Button danger outline>
            <GoCloudDownload/>
            Buy now
          </Button>
          </div>
          <div>
          <Button warning>
            <GoCreditCard/>
            See Deal!
          </Button>
          </div>
          <div>
          <Button secondary outline>
            Hide Ads!
          </Button>
          </div>
          <div>
          <Button primary rounded>
            something!
          </Button>
          
            
        </div>
        <div>
          <Button success outline>
            Correct
          </Button>
          </div>
    </div>
  )
}

export default App