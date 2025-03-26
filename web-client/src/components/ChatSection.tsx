import React, { useEffect, useRef } from "react"
import { RenderMessageProps, RenderMessageWithNameProps } from "./ChatSection.interface"
import { InputWrapper, MessageBubble, MessageInput, SendButton } from "./ChatSection.style"

const RenderMessage: React.FC<RenderMessageProps> = ({ text }) => {
    const paragraphs = text.split('\n')

    return <>
        <MessageBubble>
            {paragraphs.map(
                (paragraph, key) => <bdi key={key}>{paragraph}</bdi>
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
                (paragraph, key) => <bdi key={key}>{paragraph}</bdi>
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
            <SendButton>
                <svg viewBox="0 0 256 256" width={"2.5rem"} xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="buttonHoverGradient">
                            <stop offset="5%" stopColor="#5A4FCF" />
                            <stop offset="95%" stopColor="#B294FF" />
                        </linearGradient>
                    </defs>
                    <path className="base" d="M223.4,114,54.9,19.7a16.3,16.3,0,0,0-18.2,1.2,15.9,15.9,0,0,0-5.1,17.9l28.1,78.5a4.1,4.1,0,0,0,3.8,2.7h72.2a8.2,8.2,0,0,1,8.3,7.5,8,8,0,0,1-8,8.5H63.5a4.1,4.1,0,0,0-3.8,2.7L31.6,217.2a16.1,16.1,0,0,0,15.1,21.4,16.5,16.5,0,0,0,7.8-2L223.4,142a16.1,16.1,0,0,0,0-28Z" />
                    <path className="hover" d="M223.4,114,54.9,19.7a16.3,16.3,0,0,0-18.2,1.2,15.9,15.9,0,0,0-5.1,17.9l28.1,78.5a4.1,4.1,0,0,0,3.8,2.7h72.2a8.2,8.2,0,0,1,8.3,7.5,8,8,0,0,1-8,8.5H63.5a4.1,4.1,0,0,0-3.8,2.7L31.6,217.2a16.1,16.1,0,0,0,15.1,21.4,16.5,16.5,0,0,0,7.8-2L223.4,142a16.1,16.1,0,0,0,0-28Z" />
                </svg>
            </SendButton>
        </InputWrapper>
    </>
}

export { RenderMessage, RenderMessageWithName, RenderMessageInput }