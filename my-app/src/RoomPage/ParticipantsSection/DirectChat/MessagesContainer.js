import React ,{useRef,useEffect} from 'react'
const SingleMessage=({isAuthor,messageContent})=>{
    const messageStyling= isAuthor?'author_direct_message':'receiver_direct_message';
    // const messageStyling= isAuthor?'message_content  message_right_styles':'message_content message_left_styles';
    const  containerStyling=isAuthor?'direct_message_container_author':'direct_message_container_receiver';

    return(
        <div className={containerStyling}>
            <p className={messageStyling}>{messageContent}</p>
        </div>
    )

}
const MessagesContainer = ({messages}) => {
    const scrollRef=useRef();

    useEffect(()=>{
        if(scrollRef){
            scrollRef.current.scrollIntoView({behaviour:'smooth'})
        }

    },[messages])
    return (
        <div className='direct_messages_container'>
            {messages.map(message=>{
               return <SingleMessage messageContent={message.messageContent}
                identity={message.identity}
                isAuthor={message.isAuthor}
                key={`${message.messageContent}-${message.identity}`}
                />
            })}
            <div ref={scrollRef}></div>
        </div>
    )
}

export default MessagesContainer
