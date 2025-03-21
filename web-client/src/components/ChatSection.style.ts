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

const ChatSection = styled.div`
    width: 60rem;
    margin: auto;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    height: 90vh;

    & > :first-child {
        margin-top: auto !important;
    }

    & > div:not(:last-child){
        margin-bottom: .8rem;
    }
`

export { MessageBubble, MessageWrapper, Avatar, MessageWithAvatar, ChatSection }