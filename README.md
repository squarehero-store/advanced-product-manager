# SquareHero Product Manager

A powerful product management plugin for Squarespace websites, providing advanced bulk editing, category management, and enhanced product organization capabilities.

## 🚀 Quick Start

### Installation

1. **Download the files:**
   - Download `squarehero-product-manager.js`
   - Download `sh-product-manager.css`

2. **Upload to Squarespace:**
   - Go to your Squarespace admin panel
   - Navigate to **Settings** → **Advanced** → **Code Injection**
   - Upload both files to your site files or use the CDN links below

3. **Add to your site:**
   ```html
   <!-- In the Header section -->
   <link rel="stylesheet" type="text/css" href="/s/sh-product-manager.css" />
   
   <!-- In the Footer section -->
   <script src="/s/squarehero-product-manager.js"></script>
   ```

### CDN Installation (Recommended)

Add these lines to your Squarespace Code Injection:

```html
<!-- Header Code Injection -->
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/yourusername/squarehero-product-manager/dist/sh-product-manager.css" />

<!-- Footer Code Injection -->
<script src="https://cdn.jsdelivr.net/gh/yourusername/squarehero-product-manager/dist/squarehero-product-manager.js"></script>
```

## ✨ Features

### Advanced Product Management
- **Bulk Price Updates** - Update pricing across multiple products simultaneously
- **Bulk Category Assignment** - Organize products efficiently with batch category operations
- **Advanced Search & Filtering** - Find products quickly with powerful search capabilities
- **Product Visibility Control** - Manage product visibility states in bulk

### Enhanced UI/UX
- **Modern Interface** - Clean, intuitive design that matches Squarespace aesthetics
- **Responsive Design** - Works seamlessly across desktop and mobile devices
- **Real-time Updates** - See changes immediately without page refresh
- **Progress Tracking** - Visual indicators for bulk operations

### Category Management
- **Create New Categories** - Add product categories directly from the interface
- **Category Tree View** - Hierarchical category organization
- **Bulk Category Operations** - Assign/unassign categories for multiple products

### Product Variants
- **Variant Management** - Handle product options and variants efficiently
- **Bulk Variant Updates** - Update variant properties across multiple products
- **SKU Management** - Organize and update product SKUs

## 🛠️ Usage

1. **Access the Manager:**
   - Visit your Squarespace admin → Commerce → Products
   - The SquareHero Product Manager will load automatically

2. **Bulk Operations:**
   - Select multiple products using checkboxes
   - Choose your desired operation from the bulk actions panel
   - Configure settings and apply changes

3. **Category Management:**
   - Use the category filters to organize products
   - Create new categories on-the-fly
   - Assign/unassign categories in bulk

## 📋 Requirements

- **Squarespace Commerce Plan** (Business plan or higher)
- **Product Collection** - At least one product collection configured
- **Admin Access** - Ability to add custom code to your site

## 🔧 Configuration

The plugin automatically detects your Squarespace configuration. No manual setup required beyond installation.

### Optional Customization

You can customize the appearance by adding CSS to your site's Custom CSS:

```css
/* Customize the primary color */
.sh-product-manager {
    --primary-color: #your-brand-color;
}

/* Adjust table row height */
.product-table-row {
    height: 60px;
}
```

## 🐛 Troubleshooting

### Common Issues

1. **Plugin not loading:**
   - Verify files are uploaded correctly
   - Check browser console for JavaScript errors
   - Ensure you're on a Commerce-enabled Squarespace plan

2. **Bulk operations failing:**
   - Check your internet connection
   - Verify you have proper permissions
   - Try refreshing the page and trying again

3. **Categories not creating:**
   - Ensure you have admin permissions
   - Check that your product collection is properly configured
   - Verify Squarespace API access

### Getting Help

1. Check the browser console for error messages
2. Verify your Squarespace plan supports commerce features
3. Ensure all files are uploaded and linked correctly

## 🔄 Updates

This plugin is actively maintained. To update:

1. Download the latest files from this repository
2. Replace the existing files in your Squarespace site
3. Clear your browser cache

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

While this is primarily a commercial plugin, we welcome feedback and bug reports through GitHub issues.

## 📞 Support

For technical support and feature requests, please use the GitHub Issues section of this repository.

---

**Built with ❤️ by SquareHero**  
*Enhancing Squarespace capabilities for professional e-commerce*
