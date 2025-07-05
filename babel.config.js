// babel.config.js
module.exports = {
  presets: [
    [
      "next/babel",
      {
        "preset-react": {
          runtime: "automatic", // ✅ enables the new JSX transform
        },
      },
    ],
  ],
};
