import { MemberInfo } from "./InfoContainer.style"

interface RenderMemberInfoProps {
    avatarPath: string,
    name: string
}

const RenderMemberInfo: React.FC<RenderMemberInfoProps> = ({ avatarPath, name }) => {
    return <>
        <MemberInfo>
            <img src={avatarPath} />
            <bdi>{name}</bdi>
        </MemberInfo>
    </>
}

export { RenderMemberInfo }