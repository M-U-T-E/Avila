import styled from "styled-components";

const MembersContainer = styled.div`
    width: 25rem;
    overflow: scroll;
    height: 100vh;

    & > div {
        margin-bottom: .5rem;
    }
`

const MembersRole = styled.bdi`
    display: block;
    color: #ccc;
    padding: 1rem;
`

const MemberInfo = styled.div`
    height: 4rem;
    display: flex;
    align-items: center;
    padding: 0 2rem;

    & > img {
        border-radius: 1rem;
        width: 3.5rem;
        box-shadow: rgba(157, 157, 162, 0.2) 0 .1rem 1.6rem 0;
        border: .2rem solid rgba(157, 157, 162, 0.2);
    }

    & > bdi {
        color: #eee;
        margin-left: 1rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 1.4rem;
    }
`

export { MembersContainer, MembersRole, MemberInfo }