# Safari Sticky Notes Extension

A lightweight Safari Web Extension that lets you create quick sticky notes directly inside your browser window.

The extension is designed for fast, distraction-free note-taking while browsing. Notes appear as floating sticky-note cards on the side of the current webpage, with randomly assigned colors for easy visual distinction.

## Features

* 📝 Create sticky notes directly from Safari
* 🎨 Automatically assign random colors to notes
* ✍️ Type and edit note content directly
* ❌ Close individual notes using the cross (`×`) button
* 💾 Preserve note content using browser storage
* 🔄 Notes remain available after refreshing the webpage
* 🌐 Works across supported webpages
* 🪶 Lightweight and requires no external backend
* 🔐 Notes are stored locally in the browser

## How It Works

When the extension is activated from Safari's toolbar:

1. The extension injects the notes interface into the current webpage.
2. A new sticky note appears on the side of the browser window.
3. The note receives a random background color.
4. You can immediately start typing inside the note.
5. Clicking the `×` button removes the note from the page.
6. Note data is stored locally so that it can remain available when the page is refreshed.

## Project Structure

```text
onsite-sticky-notes/
│
├── manifest.json          # Extension configuration
│
├── popup.html             # Extension popup interface
├── popup.css              # Popup styling
├── popup.js               # Popup functionality
│
└── README.md
```

> The exact files may differ depending on the implementation. The important parts are the `manifest.json`, content scripts, popup files, stylesheets, and any background/service-worker script used by the extension.

## Technologies Used

* **HTML5** — Extension interface
* **CSS3** — Sticky-note UI and styling
* **JavaScript** — Extension logic and note management
* **WebExtension APIs** — Browser extension functionality
* **Safari** — Target browser
* **Browser Storage API** — Local note persistence

## Installation for Development

This project can be tested as a Safari Web Extension without creating an Xcode project.

### 1. Open Safari Settings

Open:

**Safari → Settings → Advanced**

Enable the option to show the **Develop** menu in the menu bar.

### 2. Allow Unsigned Extensions

From Safari's menu bar, open:

**Develop → Allow Unsigned Extensions**

This allows locally developed extensions to be tested without going through the App Store or creating a signed Xcode application.

### 3. Load the Extension

Use Safari's Web Extension development option to load the extension's project directory.

Select the folder containing:

```text
manifest.json
```

Safari will temporarily load the extension for testing.

## Testing

After loading the extension:

1. Open a webpage in Safari.
2. Click the extension icon in the Safari toolbar.
3. Create a sticky note.
4. Enter some text.
5. Create additional notes.
6. Verify that different notes receive different colors.
7. Close a note using the `×` button.
8. Refresh the webpage.
9. Verify that stored information behaves as expected.

## Debugging

If something isn't working, Safari provides several debugging tools.

Open:

**Develop → Show Web Inspector**

You can inspect:

* HTML elements
* CSS
* JavaScript errors
* Console messages
* Network requests
* Extension-related errors

For extension background scripts, use Safari's Web Extension background-page inspection option available through the **Develop** menu.

### Checking JavaScript Errors

Open the Web Inspector's **Console** tab.

Look for errors such as:

```text
ReferenceError
TypeError
SyntaxError
Permission denied
Cannot read properties of undefined
```

These errors can help identify problems with the extension's JavaScript.

## Permissions

The extension should request only the permissions it actually needs.

For example, if the extension only needs to inject notes into webpages and store them locally, avoid requesting unnecessary permissions.


```

The exact permissions and manifest configuration should match the implementation.

## Data Storage

Notes should be stored locally using the browser's extension storage mechanism.

For example:

```javascript
browser.storage.local
```

or, depending on the WebExtension API implementation:

```javascript
chrome.storage.local
```

This means the notes do not require a separate server or database.

## Privacy

The extension is intended to operate locally.

No note content should be sent to an external server unless this functionality is explicitly added in the future.

The extension should not collect:

* Browsing history
* Personal information
* Website credentials
* Passwords
* Unnecessary webpage data

## Limitations

Safari may restrict extensions on certain webpages, including browser-internal pages and other protected contexts.

For example, an extension may not be able to inject content into:

```text
about:*
file://*
Safari internal pages
Safari extension pages
```

Behavior can also vary depending on Safari's extension permissions and website access settings.

## Development Workflow

A typical development workflow is:

```text
1. Edit HTML/CSS/JavaScript
        ↓
2. Save changes
        ↓
3. Reload the extension
        ↓
4. Open Safari Web Inspector
        ↓
5. Test functionality
        ↓
6. Check console for errors
        ↓
7. Fix issues
        ↓
8. Repeat
```

## Future Improvements

Potential future features include:

* 📌 Drag-and-drop notes
* 📐 Resizeable notes
* 🎨 Custom note colors
* 📂 Multiple note categories
* 🔍 Search notes
* 📌 Pin important notes
* ⏰ Reminders
* 📅 Note timestamps
* 🗑️ Restore deleted notes
* 🌐 Domain-specific notes
* 📤 Export notes
* 📥 Import notes
* 🌙 Dark-mode support
* ⌨️ Keyboard shortcuts
* 🔒 Optional note locking

## Troubleshooting

### Extension doesn't appear

Make sure:

* Safari's Develop menu is enabled.
* Unsigned extensions are allowed.
* The extension contains a valid `manifest.json`.
* The extension was loaded successfully.
* Safari has been restarted if necessary.

### Clicking the extension does nothing

Check:

1. Safari's Web Inspector.
2. The extension popup console.
3. The webpage console.
4. JavaScript errors.
5. Whether the extension has permission to access the current webpage.

### Notes don't appear

Check that the content script is correctly registered in `manifest.json`.

For example:

```json
"content_scripts": [
  {
    "matches": ["<all_urls>"],
    "js": ["content.js"],
    "css": ["content.css"]
  }
]
```

Also make sure that the JavaScript and CSS filenames exactly match the files in the extension directory.

### Notes disappear after refreshing

Check that the notes are actually being saved to extension storage.

The application should save note data whenever the content changes and restore the saved data when the extension loads.

## Contributing

If you want to improve the extension:

1. Clone or download the project.
2. Make your changes.
3. Test the extension in Safari.
4. Check the browser console for errors.
5. Verify that existing functionality still works.
6. Commit your changes.
7. Open a pull request.

## License

This project can be released under the license chosen by the author.

If no license has been selected yet, the project should not be assumed to have an open-source license.

---

## Author

**Dhruv Singh**

GitHub: `@devdhruvsingh`

---

## Project Status

🚧 **Currently in development**

The extension is being actively developed and tested as a Safari Web Extension.
