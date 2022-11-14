export interface Post {
  id: {
    "$toString": "$_id"
  };
  title: string;
  content: string;
}
