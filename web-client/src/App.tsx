import { faker } from '@faker-js/faker'
import { ThemeProvider } from "styled-components"
import { MessageWrapper, Avatar, MessageWithAvatar, ChatSection, MessagesContainer } from "./components/ChatSection.style"
import { RenderMessageWithName, RenderMessage, RenderMessageInput } from "./components/ChatSection"
import GlobalStyles from "./GlobalStyle.style"
import Logo from './assets/logo.png'


const theme = {
  dark: {
    ownMessageBackground: "linear-gradient(90deg, rgba(197, 207, 211, 1) 0%, rgba(197, 207, 211, 0.75) 100%)",
    othersMessageBackground: "linear-gradient(90deg, rgba(31, 32, 31, .4) 0%, rgba(31, 32, 31, 1) 100%)",
    ownMessageForeground: "#222",
    othersMessageForeground: "#eee",
    ownFirstMessageRadius: "1rem 1rem 0 1rem",
    othersFirstMessageRadius: "1rem 1rem 1rem 0",
    ownMiddleMessageRadius: "1rem 0 0 1rem",
    othersMiddleMessageRadius: "0 1rem 1rem 0",
    ownLastOrOnlyMessageRadius: "1rem 0 1rem 1rem",
    othersLastOrOnlyMessageRadius: "0 1rem 1rem 1rem",
  }
}

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme.dark}>
        <ChatSection>
          <MessagesContainer>
            <MessageWithAvatar>
              <Avatar src={Logo} />
              <MessageWrapper $isOwn={false}>
                <RenderMessageWithName name={faker.person.firstName()} text={faker.lorem.paragraph()} />
              </MessageWrapper>
            </MessageWithAvatar>
            <MessageWrapper $isOwn={true}>
              <RenderMessage text={faker.lorem.paragraph()} />
            </MessageWrapper>
            <MessageWithAvatar>
              <Avatar src={Logo} />
              <MessageWrapper $isOwn={false}>
                <RenderMessageWithName name={faker.person.firstName()} text={faker.lorem.paragraph()} />
                <RenderMessageWithName name={faker.person.firstName()} text={faker.lorem.paragraph()} />
                <RenderMessageWithName name={faker.person.firstName()} text={faker.lorem.paragraph()} />
                <RenderMessageWithName name={faker.person.firstName()} text={faker.lorem.paragraph()} />
                <RenderMessageWithName name={faker.person.firstName()} text={faker.lorem.paragraph()} />
                <RenderMessageWithName name={faker.person.firstName()} text={faker.lorem.paragraph()} />
                <RenderMessageWithName name={faker.person.firstName()} text={faker.lorem.paragraph()} />
                <RenderMessageWithName name={faker.person.firstName()} text={faker.lorem.paragraph()} />
              </MessageWrapper>
            </MessageWithAvatar>
          </MessagesContainer>
          <RenderMessageInput />
        </ChatSection>
      </ThemeProvider >
    </>
  )
}

export default App
