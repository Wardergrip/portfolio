# Project Images Setup Guide

## How to Add Your Project Images

To complete your projects showcase, you'll need to add the following images to the `public/assets/` folder:

### Required Images:
- `project1.jpg` - Static image for Project 1 (Space Adventure Game)
- `project1.gif` - Animated GIF for Project 1 hover effect
- `project2.jpg` - Static image for Project 2 (RPG Battle System)
- `project2.gif` - Animated GIF for Project 2 hover effect
- `project3.jpg` - Static image for Project 3 (Multiplayer Racing Game)
- `project3.gif` - Animated GIF for Project 3 hover effect
- `project4.jpg` - Static image for Project 4 (Procedural Dungeon Generator)
- `project4.gif` - Animated GIF for Project 4 hover effect
- `project5.jpg` - Static image for Project 5 (VR Puzzle Game)
- `project5.gif` - Animated GIF for Project 5 hover effect
- `project6.jpg` - Static image for Project 6 (Mobile Tower Defense)
- `project6.gif` - Animated GIF for Project 6 hover effect

### Image Specifications:
- **Static Images (.jpg)**: Should be 400x300 pixels or similar aspect ratio
- **GIF Images (.gif)**: Should be the same dimensions as static images
- **Format**: JPG for static images, GIF for animations
- **File Size**: Keep GIFs under 2MB for good loading performance

### How It Works:
1. The static image (.jpg) is shown by default
2. When you hover over a project card, the static image fades out and the GIF fades in
3. When you stop hovering, it fades back to the static image

### Customizing Projects:
To modify the project information, edit the HTML in `public/index.html` around lines 70-175. You can:
- Change project titles
- Update descriptions
- Modify tags (C#, C++, Unity, etc.)
- Add or remove projects
- Change the grid layout (currently 3 columns on desktop, 2 on tablet, 1 on mobile)

### Tag Colors Available:
- Blue: C#
- Green: Unity
- Red: C++
- Yellow: SDL2
- Purple: Academic
- Indigo: Professional
- Orange: Networking
- Teal: Algorithms
- Pink: VR
- Gray: Mobile

Simply replace the placeholder images with your actual project screenshots and GIFs!
