# Mobile Development Setup Project

## Description

This document outlines the process of setting up a new mobile application using the Expo framework, as part of the "Introduction to Mobile Development" project. It covers the initial scaffolding, a basic modification, and the process for resetting the native build configurations.

## Project Scaffolding and First App

This section details the steps followed to create the initial application using the Expo Router template and make the first modification.

1.  **Navigate to the Project Directory:**
    First, navigate to the parent directory where the application will be created.
    ```bash
    cd prodev-mobile-setup
    ```

2.  **Initialize the Expo Project:**
    The project is initialized using the `create-expo-app` command. The `.` specifies that the project should be created in the current directory.
    ```bash
    # Note: This command requires the current directory to be empty.
    npx create-expo-app@latest .
    ```
    This command scaffolds a new Expo application, creating the necessary file structure (including `app/(tabs)/index.tsx`) and installing dependencies.

3.  **Modify the Home Screen:**
    As per the project requirements, the home screen text was updated.
    -   **File:** `app/(tabs)/index.tsx`
    -   **Change:** The default `Welcome!` text was changed to `** First App Created**`.

4.  **Run the Application:**
    The Expo development server is started to test the application on a device.
    ```bash
    npx expo start
    ```
    The QR code provided by the server can be scanned using the Expo Go app on an Android or iOS device.

## Resetting the Project

The project includes a script to reset the native build configurations, which is useful for resolving stubborn build errors or applying certain configuration changes.

**Command:**
```bash
npm run reset-project
```

### Observations from the `reset-project` command

When you run `npx expo prebuild --clean`, the following happens:

1.  **Deletion of Native Directories:** The command first finds and completely deletes the `android` and `ios` directories if they exist. This removes all previously generated native code and build artifacts.

2.  **Re-generation of Native Directories:** After cleaning, Expo re-creates the `android` and `ios` directories from scratch. It uses your `app.json` (or `app.config.js`) and `package.json` to generate fresh, clean native project files.

3.  **Syncing Dependencies:** It ensures that all native modules required by your installed packages are correctly linked in the new native projects.

**Why is this useful?**
*   It resolves stubborn native build errors that persist after other troubleshooting steps.
*   It's the correct way to apply certain changes from `app.json` or to integrate new libraries that require native configuration.
*   It provides a clean slate, ensuring your native builds are not affected by stale or conflicting files.
