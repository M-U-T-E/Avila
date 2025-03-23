import React, { useEffect, useRef } from "react"
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
    const inputWrapperRef = useRef<HTMLDivElement>(null)
    let fontSize: number = 0
    const handleOnInput = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.target instanceof HTMLTextAreaElement) {
            inputWrapperRef.current!.style.height = '4.2rem'
            const textareaHeight = e.target.scrollHeight + fontSize * .2
            inputWrapperRef.current!.style.height = `${textareaHeight / fontSize}rem`
        }
    }

    useEffect(() => {
        fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize)
    }, [])

    return <>
        <InputWrapper ref={inputWrapperRef}>
            <MessageInput placeholder='Write a message' dir='auto' onInput={handleOnInput} />
        </InputWrapper>
    </>
}

export { RenderMessage, RenderMessageWithName, RenderMessageInput }