import { useState, useRef } from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

const getInitials = (name) => {
  const words = name.split(" ");
  return words
    .map((word) => word[0]?.toUpperCase())
    .slice(0, 2)
    .join("");
};

const Comment = ({ comment, setComments }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const postRef = useRef(null);

  const handleAddReplyClick = () => {
    setIsEditing((prev) => !prev);
    setTimeout(() => {
      if (postRef.current) {
        postRef.current.focus();
      }
    }, 0);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 items-start p-4 border-b border-gray-700">
      {/* Avatar */}
      <div className="w-12 h-12 rounded-full bg-gray-500 text-white flex items-center justify-center font-bold text-lg">
        {getInitials(comment.username || "User")}
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="bg-gray-800 text-white p-4 rounded-lg">
          <p className="font-semibold">{comment.username || "User"}</p>
          <p className="text-sm">{comment.comment}</p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 mt-2 text-gray-400 text-sm">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="hover:text-white"
          >
            {comment?.subComments?.length && isOpen ? "Hide Replies" : ""}
            {comment?.subComments?.length && !isOpen ? "Show Replies" : ""}
            {/* {isOpen ? "Hide Replies" : "View Replies"} */}
          </button>
          <button onClick={handleAddReplyClick} className="hover:text-white">
            Reply
          </button>
        </div>

        {/* Reply Form */}
        {isEditing && (
          <div className="mt-4">
            <CommentForm
              comment={comment}
              setComments={setComments}
              postRef={postRef}
              setIsEditing={setIsEditing}
              setIsOpen={setIsOpen}
            />
          </div>
        )}

        {/* Nested Replies */}
        {isOpen && (
          <div className="mt-4 ml-4 border-l-2 border-gray-600 pl-4">
            <CommentList
              subComments={comment.subComments}
              setComments={setComments}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
