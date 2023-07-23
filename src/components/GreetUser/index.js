import {
  MainContainer,
  NameInput,
  MsgContent,
  NameText,
} from './styledComponents'

const GreetUser = () => (
  <MainContainer>
    <NameInput type="text" placeholder="Your name" />
    <MsgContent>
      Hello <NameText>User</NameText>
    </MsgContent>
  </MainContainer>
)

export default GreetUser
