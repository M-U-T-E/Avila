import styled from "styled-components";

const MessageBubble = styled.div`
    padding: 1rem 1.5rem;
    word-wrap: break-word;
    max-width: 35rem;

    & > bdi {
        display: block;
    }

    & > .name{
        font-size: 1.2rem;
        padding-bottom: .5rem;
        text-align: left;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 17.5rem;
    }
`

const MessageWrapper = styled.div<{ isOwn: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: ${(props) => props.isOwn ? "end" : "start"};
    max-width: 50rem;

    & > div{
        background: ${props => props.isOwn ? props.theme.ownMessageBackground : props.theme.othersMessageBackground};
        background-attachment: fixed;
        color: ${(props) => props.isOwn ? props.theme.ownMessageForeground : props.theme.othersMessageForeground};
    }

    & > div:first-child{
        border-radius: ${props => props.isOwn ? props.theme.ownFirstMessageRadius : props.theme.othersFirstMessageRadius};
    }

    & > div:not(:first-child):not(:last-child){
        border-radius: ${props => props.isOwn ? props.theme.ownMiddleMessageRadius : props.theme.othersMiddleMessageRadius};
    }

    & > div:only-child,
    & > div:last-child{
        border-radius: ${props => props.isOwn ? props.theme.ownLastOrOnlyMessageRadius : props.theme.othersLastOrOnlyMessageRadius};
    }

    & > div:not(:last-child){
        margin-bottom: .6rem;
    }
`

const Avatar = styled.img`
    position: sticky;
    top: 0;
    width: 4rem;
    border-radius: 1rem;
    box-shadow: rgba(157, 157, 162, 0.2) 0 .1rem 1.6rem 0;
    border: .2rem solid rgba(157, 157, 162, 0.2);
    margin-right: 1rem;
`

const MessageWithAvatar = styled.div`
    display: flex;
    align-items: start;
`

const MessagesContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    width: 50rem;
    margin: 1.2rem auto 0 auto;
    flex: 1;
    padding: 0 2rem;
    overflow-y: auto;

    & > :first-child {
        margin-top: auto !important;
    }

    & > div:not(:last-child){
        margin-bottom: .8rem;
    }
`

const InputWrapper = styled.div`
    height: 4.2rem;
    max-height: 20rem;
    margin: 1rem auto;
    width: 55rem;
    background-color: transparent;
    border-radius: 1rem;
    display: flex;
    position: relative;

    &:focus-within{
        background-position: 0% 0%;
        background: linear-gradient(to right, #B294FF, #242124, #5A4FCF, #242124, #B294FF);
        background-size: 500% auto;
        animation: gradient 3s linear infinite;
    }
    
    @keyframes gradient {
        0% {
            background-color: 0 0;
        }

        100% {
            background-position: 125% 0;
        }
    }
`

const MessageInput = styled.textarea`
    width: 100%;
    border: none;
    background-color: #222;
    color: #eee;
    resize: none;
    outline: none;
    padding: 1rem 4rem 1rem 1rem;
    margin-bottom: .2rem;
    border-radius: .8rem;
    line-height: 1.6;

    &::-webkit-scrollbar{
        width: 0px;
    }
`

const SendButton = styled.button`
    background-color: transparent;
    position: absolute;
    right: .5rem;
    bottom: 0;
    height: 4rem;
    width: 2.5rem;
    border: 0;
    cursor: pointer;

    & .base{
        fill: #ccc;
    }

    & .hover{
        transition: opacity 0.2s ease;
        fill:url('#buttonHoverGradient');
        opacity: 0;
    }

    &:hover .hover{
        opacity: 1;
    }
`

const ChatSection = styled.div`
    width: 60rem;
    margin: auto;
    display: flex;
    flex-direction: column;
    height: 100vh;
`

export { MessageBubble, MessageWrapper, Avatar, MessageWithAvatar, MessagesContainer, InputWrapper, MessageInput, SendButton, ChatSection }