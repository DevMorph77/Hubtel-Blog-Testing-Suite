# Hubtel Blog Testing Suite
![Hubtel Blog Logo](images/images.png)

## Overview

The Hubtel Blog Testing Suite is a collection of automated tests designed to validate key functionalities of the Hubtel blog. Utilizing the Playwright framework, this suite ensures that critical components of the blog, including navigation links, articles, and app download links, are working as intended. This project is also integrated with GitHub Actions for continuous testing and reporting.

## Features

- **Navigation Link Testing**: Verifies that all navigation links at the top of the blog redirect to the correct pages.
- **Press Releases Validation**: Ensures that each press release article contains necessary components such as images, titles, dates, and reading durations.
- **Main News Article Presence**: Checks for the visibility of the main news article on the blog homepage.
- **Download Links Testing**: Confirms that download links for the Hubtel app are functional and lead to the correct destinations.

## Technologies Used

- [Playwright](https://playwright.dev/) - A Node.js library for automating browser actions.
- JavaScript - The programming language used to implement the test scripts.
- GitHub Actions - For automating the testing process on code changes.

## Installation

To set up and run this testing suite, ensure you have [Node.js](https://nodejs.org/) installed. Follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/hubtel-blog-testing-suite.git
   cd hubtel-blog-testing-suite
   ```

2. Install the necessary dependencies:

   ```bash
   npm install
   ```

## Usage

To execute the test suite locally, run the following command:

```bash
npx playwright test
```

### Continuous Integration

This project is set up with GitHub Actions to automatically run the Playwright tests on every push and pull request to the `main` or `master` branches. The workflow includes:

- **Node.js Setup**: Automatically installs Node.js and the project dependencies.
- **Playwright Browsers Installation**: Ensures the necessary browsers are installed for testing.
- **Automated Testing**: Runs the Playwright tests and uploads the results for easy access.
- **Artifact Management**: Test reports are stored for 30 days to track testing outcomes over time.

## Test Scripts Overview

### 1. Test Navigation Links

- **Description**: This test checks the visibility and functionality of navigation links on the Hubtel blog.
- **Test Steps**:
  - Navigate to the Hubtel blog homepage.
  - Verify each link (e.g., News, Press Releases, Customer Stories, Product Updates, Guides, Inside Hubtel) is visible and clickable.
  - Confirm that clicking each link displays the corresponding heading on the new page.

### 2. Validate Press Release Articles

- **Description**: This test ensures that each press release article contains an image, title, date, and reading duration.
- **Test Steps**:
  - Navigate to the Hubtel blog's press releases page.
  - Loop through each article to validate:
    - Presence of an image.
    - Title is present and not empty.
    - Date is present and not empty.
    - Reading duration is present and not empty.

### 3. Check Main News Article Presence

- **Description**: This test verifies the visibility of the main news article on the Hubtel blog homepage.
- **Test Steps**:
  - Navigate to the Hubtel blog homepage.
  - Check for the visibility of the main news article container.

### 4. Test App Download Links

- **Description**: This test confirms that the app download links for iOS and Huawei are functional.
- **Test Steps**:
  - Navigate to the press releases section.
  - Test each download link to ensure it redirects correctly and responds with a successful status.

## Contributing

Contributions are welcome! If you would like to improve this project, please fork the repository and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- Special thanks to the [Playwright](https://playwright.dev/) team for providing a powerful and flexible automation framework.

