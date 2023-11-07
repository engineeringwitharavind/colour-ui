### Hue Sync

![react](https://img.shields.io/badge/interfaces-react-61dafb?style=flat&logo=React)
![styled-components](https://img.shields.io/badge/styling-styled--components-ec5c8d?style=flat&logo=styled-components)

Discover dominant color palettes related to your search query!

<hr />

### Screenshots:

Initial State:
<img width="1920" alt="Initial State UI" src="https://github.com/engineeringwitharavind/hue-sync/blob/main/public/Initial%20State.png">

Happy Flow: 
<img width="1920" alt="Initial State UI" src="https://github.com/engineeringwitharavind/hue-sync/blob/main/public/Happy%20Flow.png">

<hr />

### Primary Components and Data Flow:

#### Components:

- **SearchTextInput:** This parent component handles user searches and fetches images related to the `searchQuery`.

- **PaletteItem:** A component that receives a list of image URLs (`imageUrl`) as a prop and extracts color codes from the prop object, storing them in a separate state variable.

- **ColorGrid:** Another parent component responsible for rendering a masonry grid of `ColorCard` components, each displaying `HEX` color codes.

- **ColorCard:** A child card component that holds individual `HEX` color code values.

#### Data Flow:

1. **SearchTextInput:**

   - Manages two state variables: `searchQuery` for capturing user input and `imageThumbnails` to store image thumbnails fetched based on the `searchQuery`.

2. **Fetch Function (`fetchRelatedColors`):**

   - Fetches images using the `searchQuery`, mapping the results, and extracting image thumbnail links, which are then pushed to the `imageThumbnails` state.

3. **Form Submission (`handleSubmit`):**

   - Handles form submissions by triggering the `fetchRelatedColors` function and resetting the `searchQuery`.

4. **PaletteItem:**

   - Extracts colors from images based on the word searched for in the `searchQuery` state.
   - Iterates over `imageThumbnails`, extracting appropriate `imageUrl` and passing it as a prop.

5. **Color Extraction:**

   - Extracts individual color codes from the `imageUrl` object, such as "vibrant," "lightVibrant," etc., within the `PaletteItem` component.

6. **Duplicates Handling:**

   - Ensures that duplicate colors are not added to the state variable.
   - Collects all dominant colors obtained from the `imageUrl` object.

7. **ColorGrid:**
   - Receives the dominant colors stored in the `dominantColors` state variable.
   - Renders a masonry grid of `ColorCard` components with `HEX` color codes.

<hr />

### Installing & Getting started

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

Go to the directory and install all the dependencies using this command

```shell
yarn && yarn start
```

<hr />

### Highlights

- Built everything from scratch with modular CSS code. Styled Components is my preference as it has huge benefits compared to other component libraries for building React applications.

  - **Single Source of truth** and isolated CSS enclosed within the Component. **No naming collision issues** or **specificity wars**.
  - **Component Based** just like React. We can create tiny but useful sub-components like `Aside`, `FullWidthWrapper` components.
  - A neat **mental model** that fits in our head, helps us **understand exactly what our pages will look like**, without needing to do a bunch of manual testing.
  - We could design our application with isolated components which results in **better Stacking Contexts** and **avoid z-index wars**.
  - All the **power of CSS** in addition to the **power of JavaScirpt** is quite fascinating.

- The **CSS Reset** is equipped with a minimal set of rules that **focuses mainly on accessibility**.
- Follows **fluid design principles**, to fulfil **responsiveness**, covering all range of devices.

<hr />

#### Live URL

- Application live URL: https://hue-sync.netlify.app/

<hr />
