# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



### Các tem sử dụng của material 
  Container,          // Component bọc ngoài giới hạn width tối đa và căn giữa nội dung
  Box,                // Div với các utility props của Material-UI
  Typography,         // Component để hiển thị text với các variant khác nhau
  RadioGroup,         // Wrapper cho nhóm Radio buttons
  Radio,              // Input Type Radio
  FormControlLabel,   // Label wrapper cho input controls
  Button,             // Component button
  IconButton,         // Button dạng icon
  Paper               // Container với box-shadow và background màu trắng

    // Layout & Spacing
    "py-4"          // padding-top và padding-bottom: 1rem
    "mb-4"          // margin-bottom: 1rem
    "p-4"           // padding: 1rem
    "mt-4"          // margin-top: 1rem
    "gap-4"         // khoảng cách giữa các grid/flex items: 1rem

    // Grid System
    "grid"          // display: grid
    "grid-cols-1"   // một cột trên mobile
    "md:grid-cols-12" // 12 cột từ breakpoint md trở lên
    "md:col-span-3"   // chiếm 3 cột
    "md:col-span-9"   // chiếm 9 cột

    // Flexbox
    "flex"          // display: flex
    "items-center"  // align-items: center
    "justify-between" // justify-content: space-between
    "justify-end"     // justify-content: flex-end

    // Colors
    "text-emerald-600"  // text color
    "bg-emerald-500"    // background color
    "hover:bg-emerald-600" // background color khi hover

    // Typography
    "font-medium"    // font-weight: 500
    "text-gray-600"  // text color gray