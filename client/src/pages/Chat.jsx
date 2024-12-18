import { useContext } from "react";
import { Container } from "react-bootstrap";
import ChatBox from "../components/chat/ChatBox";
import { ChatContext } from "../context/ChatContext";
import UserChat from "../components/chat/UserChat";
import PotentialChats from "../components/chat/PotentialChats";
import { AuthContext } from "../context/AuthContext";
import Stack from "react-bootstrap/Stack";

const Chat = () => {
    const { user } = useContext(AuthContext);
    const { userChats, isUserChatsLoading, updateCurrentChat} = useContext(ChatContext);

    console.log('UserChats', userChats);

    return <Container>
        <PotentialChats />
        {userChats?.length < 1 ? null : (
            <Stack direction="horizontal" gap={4}  className="align-items-start">
                <Stack className=" messages-box flex-grow-0 pe-3 " gap={3}>
                    {isUserChatsLoading && <p>Loading chats...</p>}
                    {userChats?.map((chat,index)=>{
                        return(
                            <div key={index} onClick={()=>updateCurrentChat(chat)}>
                                <UserChat chat={chat} user={user} />
                            </div>
                        );
                    })}
                </Stack>               
                <ChatBox />
            </Stack>
        )}
    </Container>
}

export default Chat;