import { Image, Info, InfoItem, Name, UserCard } from './styles'

const index = (props) => {
  const { user } = props

  return (
    <UserCard className='user-card'>
      <Image className='user-card__image' src={props.user.picture.large} />
      <Info className='user-card__info'>
        <Name className='user-card__info__name'>
          <span className='user-card__info__name__first-name'>
            {user.name.first}
          </span>
          <span className='user-card__info__name__last-name'>
            {user.name.last}
          </span>
        </Name>
        <InfoItem className='user-card__info__mail'>
          {user.email}
        </InfoItem>
      </Info>
    </UserCard>
  )
}

export default index
