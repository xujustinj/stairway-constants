<script id="setup-tex">
  import { onMount } from "svelte";
  import Falling from "./Falling.svelte";

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
  <div id="content">
    <div id="start">
      <div id="start-content">
        <h1 id="title">STAIRWAY<br>CONSTANTS</h1>
        <p>scroll up to begin</p>
      </div>
      <div id="start-background" aria-hidden="true">
        <Falling distance=5 phase=0.1 position=0.5>\(\pi\)</Falling>
      </div>
    </div>
  </div>
</main>

<style lang="css">
  #content {
    display: flex;
    flex-direction: column-reverse;
  }

  #start {
    position: relative;
    width: 100%;
    height: 100vh;
  }

  #start-content {
    top: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #start-background {
    top: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -1;
    color: #C60078;
  }

  h1 {
    font-size: min(10.0vw, 20.0vh);
    font-weight: bolder;
  }

  p {
    font-size: min(2vw, 4vh);
    font-weight: normal;
  }

  #title {
    text-align: center;
    line-height: 1;
    width: fit-content;
  }
</style>
