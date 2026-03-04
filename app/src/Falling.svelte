<script lang="ts">
  export let position: number;
  export let distance: number;
  export let phase: number;
  const duration = distance;
  const size = 10.0 / distance;
  const opacity = Math.exp(Math.min(0.0, -distance / 20.0));
  const delay = duration * phase;
</script>

<span class="falling" style="
  visibility: hidden;
  position: absolute;
  left: {100*position}%;
  visibility: hidden;
  animation-duration: {duration}s;
  animation-delay: {delay}s;
  font-size: min({size}vw, {size * 2}vh);
  width: 25%;
  text-align: center;
  opacity: {opacity};
">
  <slot></slot>
</span>

<style lang="css">
  @keyframes fall {
    from {
      transform: translate(-50%, -100%);
      visibility: visible;
    }
    to {
      transform: translate(-50%, 100vh);
      visibility: visible;
    }
  }

  .falling {
    animation-name: fall;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
</style>
