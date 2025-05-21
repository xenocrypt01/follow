let followers = parseInt(localStorage.getItem("followers")) || 0;
document.getElementById("follower-count").innerText = `Followers: ${followers}`;

function followMe() {
  followers++;
  localStorage.setItem("followers", followers);
  document.getElementById("follower-count").innerText = `Followers: ${followers}`;
}

function likePost(postId) {
  const key = `likes-${postId}`;
  let likes = parseInt(localStorage.getItem(key)) || 0;
  likes++;
  localStorage.setItem(key, likes);
  document.getElementById(`likes-${postId}`).innerText = `${likes} Likes`;
}

function addComment(postId) {
  const input = document.getElementById(`comment-input-${postId}`);
  const text = input.value.trim();
  if (text === "") return;
  const commentBox = document.getElementById(`comments-${postId}`);
  const comment = document.createElement("p");
  comment.innerText = text;
  commentBox.appendChild(comment);
  input.value = "";
}
