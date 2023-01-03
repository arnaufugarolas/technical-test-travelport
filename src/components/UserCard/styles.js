import styled from '@emotion/styled'

export const UserCard = styled.div`
  display: flex;
  `

export const Image = styled.div`
  background-image: url(${props => props.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 8rem;
  height: 8rem;
`

export const Info = styled.div`
  align-self: center;
  font-family: var(--ff-primary-body);
`

export const InfoItem = styled.p`
  font-size: 1.5rem;
  text-align: center;
  width: 100%;
`

export const Name = styled(InfoItem)`
  font-weight: bold;
`
