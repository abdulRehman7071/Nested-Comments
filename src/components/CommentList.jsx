import Comment from "./Comment";

const CommentList = ({ subComments, setComments }) => {
  return (
    <>
      {subComments.map((sub) => (
        <Comment key={sub.id} comment={sub} setComments={setComments} />
      ))}
    </>
  );
};

export default CommentList;
