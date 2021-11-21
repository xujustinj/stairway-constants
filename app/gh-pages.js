// Thanks to https://blog.stranianelli.com/svelte-et-github-english/
require("gh-pages").publish(
  "public", // path to public directory
  {
    branch: "gh-pages",
    repo: "https://github.com/xujustinj/stairway-constants.git", // Update to point to your repository
    user: {
      name: "Justin Xu", // update to use your name
      email: "xu.justin.j@gmail.com", // Update to use your email
    },
    dotfiles: true,
  },
  () => {
    console.log("Deploy complete!");
  }
);
