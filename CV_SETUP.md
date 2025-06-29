# CV Setup Guide

## 📄 **Adding Your CV to the Portfolio**

### **Step 1: Prepare Your CV**
1. Create or update your CV in PDF format
2. Name it: `Seif_Rahmouni_CV.pdf`
3. Make sure it's professional and up-to-date

### **Step 2: Add CV File**
1. Place your CV file in: `public/documents/Seif_Rahmouni_CV.pdf`
2. The file path should be: `public/documents/Seif_Rahmouni_CV.pdf`

### **Step 3: Test the CV Section**
1. Start your development server: `npm run dev`
2. Navigate to the CV section on your portfolio
3. Test both "View CV" and "Download PDF" buttons

## 🎯 **CV Section Features**

### **What's Included:**
- ✅ **Professional CV preview card** with summary
- ✅ **View CV button** - Opens PDF in a modal
- ✅ **Download PDF button** - Downloads the CV file
- ✅ **Responsive design** - Works on all devices
- ✅ **Smooth animations** - Professional transitions
- ✅ **Navigation integration** - Added to header menu

### **CV Preview Shows:**
- Professional summary
- Key highlights and achievements
- Experience overview
- Education details
- Skills summary

## 📁 **File Structure**
```
public/
  documents/
    Seif_Rahmouni_CV.pdf  ← Your CV file goes here
```

## 🔧 **Customization Options**

### **Update CV Information:**
Edit `components/CV.tsx` to update:
- Professional summary
- Key highlights
- Last updated date
- CV sections preview

### **Change CV File:**
1. Replace `public/documents/Seif_Rahmouni_CV.pdf` with your new CV
2. Update the filename in the component if needed

## 🚀 **Deployment**
- The CV file will be automatically included in your Vercel deployment
- Users can view and download your CV from the live site
- The PDF viewer works in all modern browsers

## 💡 **Tips for Professional CV**
- Keep it concise (1-2 pages)
- Include relevant keywords for your industry
- Highlight achievements with metrics when possible
- Use a clean, professional format
- Update regularly with new experiences 