/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    enabled: true,
    content: [
      "./src/**/*.html",
      "./src/**/*.js",
      "./src/**/*.jsx",
      "./src/**/*.ts",
      "./src/**/*.tsx",
      "./src/**/*.ejs",
      "./index.html",
    ],
  },
  variants: {},
  plugins: [],
  theme: {
    fontFamily: {
      sans: ["Roboto", "Noto Sans TC", "sans-serif"],
    },
    container: {
      center: true, // 將容器居中
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
    },
    extend: {
      backgroundImage: {
        "sm-banner":
          "url('https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-header-sm.png?raw=true')",
        banner:
          "url('https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-header.png?raw=true')",
        "sm-glasses":
          "url('https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/index-bg-sm.png?raw=true')",
        glasses:
          "url('https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/index-bg-sm.png?raw=true')",
        "sm-product-left":
          "url('https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/product-header-sm-1.png?raw=true')",
        "product-left":
          "url('https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/product-header-1.png?raw=true')",
        "sm-product-right":
          "url('https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/product-header-sm-2.png?raw=true')",
        "product-right":
          "url('https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/product-header-2.png?raw=true')",
      },
      colors: {
        primary: "#AA0601",
        "primary-Dark": "#650300",
        secondary: "#FBF2F2",
        "dark-brown": "#5F3E2D",
        "medium-brown": "#B75929",
      },
      boxShadow: {
        card: "0px 2px 6px #00000029",
      },
    },
  },
};
