export default {
  "./src/**/*.ts": (files) => [
    "tsc --noEmit",
    `biome check --apply ${files.join(" ")}`,
  ],
}