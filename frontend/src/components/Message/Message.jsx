import "./Message.css"

function Message({messageType, content}){

    return(
        <div className={`message ${messageType}`}>
            {content}
        </div>
    )

}

export default Message;