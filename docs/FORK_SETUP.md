# Setting Up Your Forked Plugin

This guide helps you set up a forked Figma plugin to publish under your own account.

## Why This Is Needed

When you fork a Figma plugin repository, the `manifest.json` contains the original plugin's ID. This ID is tied to the original developer's account, so you cannot publish updates to it. You need to create your own plugin entry in Figma.

## Step-by-Step Setup

### 1. Create Your Plugin in Figma

1. Open Figma Desktop app
2. Navigate to: **Plugins** → **Development** → **New Plugin...**
3. Select:
   - **Figma design**
   - **Run once**
4. Name your plugin (e.g., "Design Lint - Enhanced" or your own name)
5. Save the plugin anywhere (temporary location is fine)
6. **Copy the generated Plugin ID** - you'll need this!

### 2. Update manifest.json

Replace the content with your information:

```json
{
  "name": "Your Plugin Name",
  "id": "YOUR_PLUGIN_ID_FROM_STEP_1",
  "api": "1.0.0",
  "main": "dist/code.js",
  "ui": "dist/ui.html",
  "editorType": ["figma"],
  "networkAccess": {
    "allowedDomains": ["none"]
  }
}
```

### 3. Import Your Development Plugin

1. In Figma: **Plugins** → **Development** → **Import plugin from manifest...**
2. Navigate to your forked repository
3. Select the updated `manifest.json`
4. Your plugin is now linked to your account!

### 4. Build and Test

```bash
# Install dependencies
npm install --legacy-peer-deps

# Build the plugin
npm run build

# Test in Figma
# Right-click in Figma → Plugins → Development → Your Plugin Name
```

### 5. Prepare for Publishing

Before publishing, ensure you:

1. **Update Plugin Metadata**:
   - Create a unique icon
   - Write your own description
   - Add screenshots of your version

2. **Differentiate Your Plugin**:
   - Add new features
   - Improve existing functionality
   - Fix bugs from the original
   - Update the UI/UX

3. **Give Proper Attribution**:
   - Mention it's based on the original Design Lint
   - Link to the original if appropriate
   - Respect the original license

### 6. Publish Your Plugin

1. Go to [Figma Plugin Publish](https://www.figma.com/plugin-docs/publish-plugins/)
2. Select your plugin
3. Fill in all required fields:
   - Description
   - Icon (128x128px)
   - Cover art (1920x960px)
   - Screenshots
   - Tags
4. Submit for review

## Automated Deployment Setup

If using GitHub Actions for automated deployment:

1. Get your Team ID from Figma
2. Update GitHub secrets:
   - `FIGMA_PLUGIN_ID`: Your new plugin ID
   - `FIGMA_TEAM_ID`: Your team ID
   - `FIGMA_EMAIL`: Your Figma email
   - `FIGMA_PASSWORD`: Your Figma password
   - `FIGMA_TOTP_SECRET`: Your 2FA secret

See [AUTOMATED_DEPLOYMENT.md](./AUTOMATED_DEPLOYMENT.md) for details.

## Legal Considerations

- Check the original plugin's license
- Provide attribution where required
- Don't violate any trademarks
- Make substantial improvements/changes

## Troubleshooting

### "Plugin already exists" Error

- Make sure you're using YOUR plugin ID, not the original
- Clear Figma's plugin cache and restart

### Can't Import Manifest

- Ensure manifest.json is valid JSON
- Check that the ID is correct
- Try restarting Figma

### Plugin Not Showing in Development

- Check console for errors (Plugins → Development → Show Console)
- Verify build output exists in `dist/`
- Ensure all file paths in manifest.json are correct
