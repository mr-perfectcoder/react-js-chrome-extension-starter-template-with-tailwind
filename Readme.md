# ReactJS Chrome Extension Starter Template with Tailwind CSS

This project is a starter template for creating a Chrome extension using ReactJS and Tailwind CSS. It includes the basic setup and configuration to get you started quickly.

## Features

- **ReactJS**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Chrome Extension**: Easily build and deploy a Chrome extension.
- **Webpack**: Module bundler to handle assets.
- **Babel**: JavaScript compiler to use the latest features.

## Getting Started

Follow these instructions to set up and run the project on your local machine for development and testing purposes.

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/react-chrome-extension-tailwind.git
   cd react-chrome-extension-tailwind

2. **Install dependencies**
Install the necessary dependencies by running the following command:
    ```bash
        npm install
        # or
        yarn install

3. **Development**
To start developing, you can use the watch script to automatically rebuild the project when files change.
    ```bash
        npm run watch
        # or
        yarn watch
        
This will bundle the extension using webpack with the development configuration.

4. **Building for Production**
To create a production build, use the build script:
        ```bash
            npm run build
            # or
            yarn build
        
    This will bundle the extension using webpack with the production configuration.
    
    
### Load Your Extension in Chrome
- Open Chrome and navigate to chrome://extensions/.
- Enable "Developer mode" by toggling the switch in the top right.
- Click on the "Load unpacked" button and select the dist directory from your project.

### Contributing
If you have suggestions for improving this template, feel free to create an issue or a pull request.

### License
This project is licensed under the MIT License.
