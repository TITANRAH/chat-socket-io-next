export interface User {
  _id: string;
  clerkUserId: string;
  name: string;
  userName: string;
  email: string;
  profilePicture: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}


export interface ChatyType {

  _id: string;
  users: User[];
  createBy: User;
  lastMessage: MessageType;
  isGroupChat: string;
  groupName: string;
  groupProfilePicture: string;
  groupBio: string;
  groupAdmins: User[];
  unreadCounts: any;
}

export interface MessageType {
  _id: string;
  chat: ChatyType;
  sender: User;
  text: string;
  image: User;
  readBy: User[];
  createdAt: string;
  updatedAt: string;
}
