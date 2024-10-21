
// By fetching data from these endpoints and combine
const POSTS_URL = "https://jsonplaceholder.typicode.com/posts"
const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments"
const USERS_URL = "https://jsonplaceholder.typicode.com/users"

// Where the return type of User is defined as following:
interface User {
  posts: Post[]
  totalComments: number // we should return the number of all comments of all posts
  id: number
  name: string
};

interface Post {
  comments: PostComment[]
  id: number
  title: string
}

interface PostComment {
  id: number
  body: string
  email: string
}

// Goal is to implement the function below
async function getUsers(): Promise<User[]> {
  // IMPLEMENT HERE
  return []; // todo: return the user list
}

async function main() {
  const users = await getUsers();
  
  console.log(users); // we print the user list here
}

main();
