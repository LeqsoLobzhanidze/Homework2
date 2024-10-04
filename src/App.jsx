import './App.css'
import Card from './components/Card/Card'
import Header from './components/header/Header'
import Text from './components/text/Text'
import Button from './components/button/Button'
function App() {

  return (
    <div>
      <Header />
      <Card name={'ProductCard'}
       price={'No Price Detected'}
        quantity={'No Quantity Detected'}
        desc={'No Desc'}
        color={'No Color Given'}/>

        <Text text={'Hello Dato Mas'} 
              fontSize={'32px'} 
              textColor={'blue'} 
              textAlign={'center'}  />

         <Button
         text={'Click Me'} 
         bgColor={'Aqua'} 
         width={'100px'} 
         height={'40px'}  />
    </div>
  )
}

export default App
