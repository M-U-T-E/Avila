import React from "react"
import { RenderMessageProps, RenderMessageWithNameProps } from "./ChatSection.interface"
import { InputWrapper, MessageBubble, MessageInput } from "./ChatSection.style"

const RenderMessage: React.FC<RenderMessageProps> = ({ text }) => {
    const paragraphs = text.split('\n')

    return <>
        <MessageBubble>
            {paragraphs.map(
                (paragraph) => <bdi>{paragraph}</bdi>
            )}
        </MessageBubble>
    </>
}

const RenderMessageWithName: React.FC<RenderMessageWithNameProps> = ({ name, text }) => {
    const paragraphs = text.split('\n')

    return <>
        <MessageBubble>
            <bdi className="name">{name}</bdi>
            {paragraphs.map(
                (paragraph) => <bdi>{paragraph}</bdi>
            )}
        </MessageBubble>
    </>
}

const RenderMessageInput = () => {
    return <>
        <InputWrapper>
            <MessageInput placeholder='Write a message' dir='auto' />
        </InputWrapper>
    </>
}

export { RenderMessage, RenderMessageWithName, RenderMessageInput }