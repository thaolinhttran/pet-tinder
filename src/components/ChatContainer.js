const ChatContainer = () => {
    return (
        <div className="chat-container">
            <ChatHeader/>
            <div>
                <button className="option">Chat</button>
            </div>

            <PetsDisplay/>

            <ChatDisplay/>
        </div>
    )
}

export default ChatContainer;