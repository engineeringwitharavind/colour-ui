### Color-UI

![react](https://img.shields.io/badge/frontend-react-61dafb?style=flat&logo=React)
![styled-components](https://img.shields.io/badge/styling-styled--components-ec5c8d?style=flat&logo=styled-components)

<hr />

### Data Model:

As I couldn't find any relevant APIs due to time constraints, I have created a manual dataset with common english words and it's `hex` codes to match the requirements.

```json
{
  "tree": ["#228B22", "#008000", "#556B2F"],
  "sky": ["#87CEEB", "#00BFFF", "#1E90FF"],
  "apple": ["#FF4500", "#FF6347", "#8B0000"],
  "sun": ["#FFD700", "#FFA500", "#F0E68C"],
  "ocean": ["#1E90FF", "#00BFFF", "#4169E1"],
  "grass": ["#228B22", "#008000", "#7CFC00"],
  "rose": ["#FF69B4", "#FF1493", "#FFC0CB"],
  "cloud": ["#FFFFFF", "#F5F5F5", "#D3D3D3"],
  "banana": ["#FFFF00", "#FFD700", "#FFC125"],
  "cherry": ["#FF4500", "#FF6347", "#8B0000"],
  "lemon": ["#FFF44F", "#FFD700", "#F0E68C"],
  "peach": ["#FFDAB9", "#FFB6C1", "#FFC0CB"],
  "chocolate": ["#8B4513", "#D2691E", "#A0522D"],
  "coffee": ["#A52A2A", "#8B4513", "#D2691E"],
  "smoke": ["#D3D3D3", "#B0C4DE", "#778899"],
  "fire": ["#FF4500", "#FF6347", "#8B0000"],
  "leaf": ["#228B22", "#008000", "#556B2F"],
  "peacock": ["#00A86B", "#006747", "#339966"],
  "butterfly": ["#87CEEB", "#00BFFF", "#1E90FF"],
  "beach": ["#F5DEB3", "#D2B48C", "#DEB887"],
  "strawberry": ["#FF0000", "#DC143C", "#B22222"],
  "butter": ["#FFD700", "#FFA500", "#F0E68C"],
  "carrot": ["#FFA500", "#FF6347", "#FF4500"],
  "mint": ["#00FF7F", "#ADFF2F", "#98FB98"],
  "oak": ["#8B4513", "#D2691E", "#A0522D"],
  "lavender": ["#E6E6FA", "#9370DB", "#7B68EE"],
  "rosemary": ["#008000", "#228B22", "#556B2F"],
  "daisy": ["#FFD700", "#FFA500", "#F0E68C"],
  "vanilla": ["#FFFFF0", "#FFFACD", "#FAFAD2"],
  "blueberry": ["#0000CD", "#1E90FF", "#4169E1"],
  "champagne": ["#F7E7CE", "#E6BE8A", "#D2B48C"],
  "pumpkin": ["#FF4500", "#FF6347", "#8B0000"],
  "almond": ["#FF4500", "#FF6347", "#8B0000"],
  "cinnamon": ["#A52A2A", "#8B4513", "#D2691E"],
  "nutmeg": ["#8B4513", "#D2691E", "#A0522D"],
  "raspberry": ["#E30B5D", "#C71585", "#DB7093"]
}
```

### 🏁 &nbsp; <ins>Installing & Getting started</ins>

A minimal setup you need to get this application up & running.

Make sure you have `node.js` and `npm` or `yarn` installed on your machine.

Check if node.js is installed

```shell
node --version
```

Clone the repository using the below command

```shell
git clone https://github.com/engineeringwitharavind/color-ui.git
```

Go to the directory and install all the dependancies using this command

```shell
yarn && yarn start
```

<hr />

### ✨ &nbsp; <ins>Highlights</ins>

- I have built everything from scratch with modular CSS code. Styled Components is my preference as it has huge benefits compared to other component libraries when it comes to building React applications.

  - **Single Source of truth** and isolated CSS enclosed within the Component. **No naming collision issues** or **specificity wars**.
  - **Component Based** just like React. We can create tiny but useful sub components like `Aside`, `FullWidthWrapper` components.
  - Neat **mental model** that fits in our head, helps us **understand exactly what our pages will look like**, without needing to do a bunch of manual testing.
  - We could design our application with isolated components which results in **better Stacking Contexts** and **avoid z-index wars**.
  - All the **power of CSS** in addition to the **power of JavaScirpt** is quite fascinating.

- **CSS Reset** is a minimal set of rules that **focuses mainly on Accessibility**. It can be used with any production grade applications.
- Fully **responsive** to covers all range of devices.

<hr />

### 🚀 &nbsp; <ins>Hosting</ins>

- Application live URL: https://color-ui.netlify.app/

<hr />
