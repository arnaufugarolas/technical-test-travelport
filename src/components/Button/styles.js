import styled from '@emotion/styled'

export const Button = styled.button`
  background-color: var(--clr-soft-black);
  color: var(--clr-sand);
  border: none;
  border-radius: 1rem;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: var(--clr-sand);
    color: var(--clr-soft-black);
  }
`
