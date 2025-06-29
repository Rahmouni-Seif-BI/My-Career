# Flag Images Setup Guide

## 🏁 **Adding Flag Images to Your Portfolio**

### **Step 1: Prepare Flag Images**
You need to provide flag images for the three countries. The images should be:
- **Format**: PNG or JPG
- **Size**: Recommended 40x30 pixels (or similar aspect ratio)
- **Quality**: High quality, clear flag designs
- **Transparent background**: Preferred for better integration

### **Step 2: Add Flag Images**
Place your flag images in the `public/flags/` directory with these exact names:

```
public/
  flags/
    morocco.png      ← Morocco flag
    cote-divoire.png ← Côte d'Ivoire flag  
    tunisia.png      ← Tunisia flag
```

### **Step 3: Flag Image Requirements**

#### **File Names (exact):**
- `morocco.png` - Flag of Morocco
- `cote-divoire.png` - Flag of Côte d'Ivoire
- `tunisia.png` - Flag of Tunisia

#### **Recommended Specifications:**
- **Dimensions**: 40x30 pixels (or 2:1.5 aspect ratio)
- **Format**: PNG with transparent background
- **File size**: Under 10KB each for fast loading
- **Quality**: High resolution, clear colors

### **Step 4: Test the Flags**
1. Start your development server: `npm run dev`
2. Navigate to the CV section
3. Verify that all three flags display correctly
4. Check both the Key Highlights and Experience sections

## 🎯 **Where Flags Appear**

### **Key Highlights Section:**
- Shows flags next to "International clients"
- Larger size (20x15 pixels)

### **Experience Section Preview:**
- Shows flags in the experience description
- Smaller size (16x12 pixels)

## 🔧 **Customization Options**

### **Change Flag Sizes:**
Edit the `width` and `height` props in `components/CV.tsx`:
```jsx
<Image 
  src="/flags/morocco.png" 
  alt="Morocco Flag" 
  width={20}  // Change this
  height={15} // Change this
  className="rounded-sm"
/>
```

### **Add More Countries:**
1. Add new flag image to `public/flags/`
2. Add new Image component in the CV component
3. Update the text accordingly

## 🚀 **Deployment**
- Flag images will be automatically included in your Vercel deployment
- Images are optimized by Next.js for fast loading
- Works on all devices and browsers

## 💡 **Tips for Flag Images**
- Use official flag designs
- Ensure good contrast and visibility
- Keep file sizes small for fast loading
- Test on different screen sizes
- Consider using SVG format for better scaling 