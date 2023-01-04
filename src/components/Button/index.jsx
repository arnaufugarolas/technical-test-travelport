import { Button } from './styles'

export const Index = (props) => {
  const { onClick, value } = props

  const handleClick = () => {
    onClick()
  }

  return (
    <Button onClick={handleClick}>
      {value}
    </Button>
  )
}

export default Index
