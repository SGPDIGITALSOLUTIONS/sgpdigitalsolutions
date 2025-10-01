# SGP PowerPoint Auto-Generator - Quick Start Guide

## 🎯 What This Does
Automatically generates a complete PowerPoint presentation with SGP Digital Solutions' cyberpunk neobrutalism design theme - no manual formatting required!

## ⚡ Quick Setup (Windows)

### 1. Install Python Package
```bash
pip install python-pptx
```

### 2. Run the Generator
```bash
python auto_ppt_generator.py
```

### 3. Open Your Presentation
- File generated: `SGP_Automation_Presentation.pptx`
- Ready to present immediately!

## 🎨 What You Get

### ✅ Fully Branded Slides:
- **Black backgrounds** with **SGP Green (#00ff88)** accents
- **Terminal-style typography** (JetBrains Mono headers)
- **Consistent slide numbering** and **brand footers**
- **Professional 16:9 format** ready for any screen

### ✅ Complete Content:
- **12 slides** covering the full automation presentation
- **Multiple layouts**: Title, Content, Quote, Split-screen
- **Interactive elements** and **call-to-action prompts**
- **SGP branding** on every slide

## 🔧 Customization Options

### Change Content:
Edit the `slides_data` array in `auto_ppt_generator.py`:
```python
{
    "type": "content",
    "title": "Your Custom Title",
    "content": "Your custom content here"
}
```

### Add New Slide Types:
- `"title"` - Hero title with subtitle
- `"content"` - Standard content slide
- `"quote"` - Centered quote with SGP styling
- `"split"` - Two-column comparison layout

### Modify SGP Colors:
```python
self.colors = {
    'sgp_green': RGBColor(0, 255, 136),  # Your signature green
    'terminal_black': RGBColor(0, 0, 0), # Background
    'terminal_white': RGBColor(255, 255, 255), # Text
    # Add more colors as needed...
}
```

## 🎯 Pro Tips

### 1. Font Installation:
For best results, install these fonts:
- **JetBrains Mono** (headers)
- **Space Grotesk** (body text)

### 2. After Generation:
- Open in PowerPoint 2016+ for full compatibility
- Review and add any custom animations
- Test on your presentation setup
- Export as PDF for universal compatibility

### 3. Batch Generation:
Modify the script to generate multiple presentations:
```python
# Create different versions
create_automation_presentation()
create_custom_presentation(your_content)
create_workshop_presentation(workshop_data)
```

## 🚀 Advanced Usage

### Custom Presentation from JSON:
```python
# Load content from external file
with open('presentation_content.json', 'r') as f:
    custom_slides = json.load(f)

generator = SGPPresentationGenerator()
# Process custom_slides...
```

### Batch Export:
```python
# Generate multiple formats
generator.save_presentation("SGP_Presentation.pptx")
# Add PDF export, image export, etc.
```

## 🎨 SGP Design Standards Applied

### Color Usage:
- **Terminal Black**: All backgrounds
- **SGP Green**: Primary accents, CTAs, quotes
- **Terminal White**: Body text, secondary elements
- **Terminal Cyan**: Subtitles, highlights

### Typography Hierarchy:
- **H1**: 48pt JetBrains Mono, UPPERCASE, White
- **H2**: 36pt JetBrains Mono, UPPERCASE, SGP Green
- **Body**: 20pt Space Grotesk, White
- **Footer**: 12pt JetBrains Mono, SGP Green

### Layout Principles:
- **Centered alignment** for maximum impact
- **Generous whitespace** around all elements
- **Consistent spacing** using 16px grid
- **Terminal-style elements** throughout

## 🔥 Benefits of Auto-Generation

### ⏱️ Time Saving:
- **Manual creation**: 2-3 hours
- **Auto-generation**: 30 seconds

### 🎯 Brand Consistency:
- Perfect SGP color matching
- Consistent typography
- Professional spacing
- Terminal aesthetic maintained

### 🔄 Easy Updates:
- Change content in the script
- Re-run for updated presentation
- Multiple versions from same template
- Version control friendly

## 📞 Support

Need modifications or have questions about the auto-generator?

**Contact SGP Digital Solutions:**
- Email: stephen@sgpdigitalsolutions.com
- Website: sgpdigitalsolutions.com

---

*Generated with SGP Digital Solutions' PowerPoint Auto-Generator*
*Cyberpunk Neobrutalism Design System Applied* 