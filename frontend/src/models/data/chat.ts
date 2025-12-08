type Member = {
    userId: string
    canSend: boolean
    isOwner: boolean

} 

type Chat = {
    id: string
    members: Member[]
}