# Blueimp file upload with Wistia API

> The app uses wraps Blueimp's file upload plugin and Wistia's upload API with an AngularJS component to create a simple interface for uploading and viewing your videos.

> Blueimp's file uploader: https://github.com/blueimp/jQuery-File-Upload

> Wistia upload API: http://wistia.com/doc/upload-api

## Table of Contents

1. [Setup](#Setup)
2. [Requirements](#requirements)
3. [Usage](#Usage)
4. [Testing](#Testing)

## Setup

Clone the repository and install node modules
```
git clone https://github.com/ #TBD
npm install
```
From the root directory, run node to start the server
```
npm run start
```
Go to http://localhost:3000 in your browser

## Requirements

- Node.js
- Express
- AngularJS
- Blueimp File Upload Plugin
- Jquery
- Bootstrap
- Karma
- Jasmine

## Usage

1. Click the upload button
2. Pick a file
3. The widget uploads the file to Wistia, showing progress in a progress bar
4. Once the file completes uploading, it shows as an embedded Wistia video player
5. Click play and enjoy the show

## Testing

To test run the following npm command:
```
npm run test
```
You should see the results in your terminal