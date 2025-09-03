import { create } from "twrnc";

const tw = create({
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8", // custom color
        secondary: "#9333EA",
      },
    },
  },
});

export default tw;
