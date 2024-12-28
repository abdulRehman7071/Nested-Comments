import { useState } from "react";

const CommentForm = ({
  comment,
  setComments,
  postRef,
  setIsEditing,
  setIsOpen,
}) => {
  const [newComment, setNewComment] = useState("");

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() === "") return;

    const newSubComment = {
      id: Date.now(),
      comment: newComment,
      subComments: [],
    };

    const addSubComment = (comments) => {
      return comments.map((c) => {
        if (c.id === comment.id) {
          return {
            ...c,
            subComments: [...c.subComments, newSubComment],
          };
        }
        return {
          ...c,
          subComments: addSubComment(c.subComments),
        };
      });
    };

    setComments((prevComments) => addSubComment(prevComments));
    setNewComment("");
    setIsEditing(false);
    setIsOpen(true);
  };

  return (
    <form
      onSubmit={handlePostSubmit}
      className="flex items-center gap-2 mt-4 transition-transform transform"
    >
      <input
        className="bg-black text-white focus:ring-2 focus:ring-gray-600 focus:outline-none border-2 border-zinc-700 rounded mr-4 px-4 py-2 transition-colors duration-300 hover:border-gray-500"
        value={newComment}
        placeholder="Post your thoughts..."
        onChange={(e) => setNewComment(e.target.value)}
        ref={postRef}
      />
      <button
        type="submit"
        className="bg-white px-4 py-2 text-sm font-bold text-black rounded-lg transition-transform transform hover:scale-110 hover:bg-gray-300"
      >
        Post
      </button>
    </form>
  );
};

export default CommentForm;
