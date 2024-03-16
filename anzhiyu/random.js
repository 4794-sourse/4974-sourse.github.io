var posts=["2024/03/12/hello-world/","2024/03/14/tags/","2024/03/12/hello-x64/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };