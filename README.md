# 💼 Amit K Pandey — Cloud & DevOps Portfolio

[![Live Demo](https://img.shields.io/badge/Demo-Live_Website-blue?style=for-the-badge&logo=googlechrome&logoColor=white)](https://amit5197.github.io/amit-portfolio/)
[![GitHub stars](https://img.shields.io/github/stars/Amit5197/amit-portfolio?style=for-the-badge)](https://github.com/Amit5197/amit-portfolio/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/Amit5197/amit-portfolio?style=for-the-badge)](https://github.com/Amit5197/amit-portfolio/network/members)
[![Security Scan](https://img.shields.io/badge/Security-Trivy_Passed-brightgreen?style=for-the-badge&logo=shield)](https://github.com/Amit5197/amit-portfolio/actions)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

A modern, responsive personal portfolio website showcasing my professional background, enterprise cloud certifications, hands-on projects, and technical skills across **AWS, Azure, GCP, Kubernetes, Terraform, and GitOps CI/CD**.

---

## 🌐 Live Website

🔗 **[amit5197.github.io/amit-portfolio](https://amit5197.github.io/amit-portfolio/)**

---

## 📖 Overview

Designed and built as the digital resume and project portfolio for **Amit K Pandey** (Lead CloudOps & DevOps Engineer). 

### ✨ Key Features
- **Responsive Web UI:** Clean, dark-accented mobile-first interface built with semantic HTML5, CSS3, and modern JavaScript.
- **GitOps Deployment:** 100% automated static site delivery via GitHub Actions on every merge to `main`.
- **Shift-Left Security:** Automated secret detection and vulnerability auditing prior to production deployments.
- **Verified Credentials:** Showcase of multi-cloud certifications across AWS, Microsoft Azure, and Oracle Cloud (OCI).

---

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Hosting:** GitHub Pages
- **Automation / CI/CD:** GitHub Actions
- **DevSecOps Tooling:** Aqua Security Trivy, GitGuardian/Secret Linting, Dependabot
- **Version Control:** Git, GitHub

---

## 📂 Project Structure

```text
amit-portfolio/
├── .github/
│   └── workflows/
│       ├── deploy.yml          # Continuous Deployment to GitHub Pages
│       └── security-scan.yml   # DevSecOps pipeline (Trivy & Secret auditing)
├── images/
│   ├── profile.png             # Author profile image
│   └── screenshot.png          # Portfolio preview image
├── index.html                  # Core portfolio landing page
├── style.css                   # Global styles & responsive layout
├── script.js                   # Smooth scrolling & DOM interactions
├── resume.pdf                  # Downloadable curriculum vitae
├── .gitignore                  # Git tracking exclusion list
├── README.md                   # Repository documentation
└── LICENSE                     # MIT Open Source License
```

---

## ⚙️ Local Development

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Amit5197/amit-portfolio.git](https://github.com/Amit5197/amit-portfolio.git)
   cd amit-portfolio

## Navigate into the project

```bash
cd amit-portfolio
```

# 🚀 Deployment using GitHub Pages

## Step 1

Push your project to GitHub.

---

## Step 2

Open

```
Repository
   ↓
Settings
   ↓
Pages
```

---

## Step 3

Under

```
Build and Deployment
```

Choose

```
Source

GitHub Actions
```

---

# ⚡ GitHub Actions Workflow

Create the following file:

```
.github/workflows/deploy.yml
```

```yaml
name: Deploy Portfolio

on:
  push:
    branches:
      - main

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4

      - name: Configure Pages
        uses: actions/configure-pages@v5

      - name: Upload Artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: .

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

Commit the workflow.

GitHub automatically deploys your website whenever you push to the `main` branch.

---

# 📋 GitHub Repository Setup

After creating the repository:

- Enable GitHub Pages
- Enable GitHub Actions
- Add a README
- Add a LICENSE
- Add a `.gitignore`
- Configure branch protection (optional)
- Enable Dependabot alerts
- Enable Code Scanning (optional)
- Enable Secret Scanning (if available)

---

# 🔒 Security Best Practices

✔ Never upload:

- Passwords
- API Keys
- Secret Tokens
- Private Certificates
- Environment Files (`.env`)

Use `.gitignore`:

```
node_modules/
.env
.DS_Store
dist/
```

For static websites, sensitive information should never be embedded in the source code.

---

# 📸 Screenshot

Place a screenshot inside:

```
assets/images/screenshot.png
```

Display it with:

```markdown
![Portfolio Screenshot](assets/images/screenshot.png)
```

---

# 📈 Future Improvements

- Dark Mode
- Blog Section
- Resume Download
- Project Filters
- Animations
- Theme Switcher
- Contact Form Backend
- SEO Optimization
- Performance Improvements

---

🤝 Contributing
Contributions and recommendations are welcome.

Fork the repository.

Create your feature branch: git checkout -b feature/new-enhancement

Commit your changes: git commit -m "feat: add new enhancement"

Push to the branch: git push origin feature/new-enhancement

Open a Pull Request.

---

👨‍💻 Author
Amit K Pandey

Lead CloudOps & DevOps Engineer

GitHub: @Amit5197

LinkedIn: amitpandey5197

Email: Bhai.amit7@gmail.com

Phone: +91 7000074442

📄 License
Distributed under the MIT License.
