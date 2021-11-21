<script id="setup-tex">
  import { onMount } from "svelte";

  // We could also do this directly in index.html, but it doesn't work on page refresh.
  // Thanks to https://svelte.dev/repl/ebd12dbf04574b2bb40003cc8a4299b0
  onMount(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js";
    document.head.append(script);

    script.onload = () => {
      MathJax = {
        tex: {
          inlineMath: [["\\(", "\\)"]],
          displayMath: [["\\[", "\\]"]],
          processEscapes: true,
        },
        svg: { fontCache: "global" },
      };
    };
  });
</script>

<main>
  <h1>Stairway Constants</h1>
  <img
    src="./images/stairway-constants-icon-old-290x290.png"
    alt="symbols for all the stairway constants"
    id="constant-symbols"
  />
  <p><b>UNDER CONSTRUCTION</b></p>
  <p>
    Here will eventually be the web revision of <i>Stairway Constants</i>: all 8
    floors of constants rolled up into one scrolling webpage.
  </p>
  <p>Until then, enjoy some \(\LaTeX\) filler! \[\Huge \pi^\pi\]</p>
</main>

<style lang="css">
  #constant-symbols {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
</style>
