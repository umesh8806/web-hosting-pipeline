# 🚀 Static Website CI/CD Pipeline using AWS

This project demonstrates a complete **CI/CD pipeline for deploying a static website** using AWS services.

---

## 📌 Architecture

```
GitHub → CodePipeline → CodeBuild → S3 → Live Website
```

---

## 🧠 Overview

Instead of manually uploading files to a server, this project automates deployment:

* Code changes pushed to GitHub
* Pipeline automatically triggers
* CodeBuild processes files
* Files deployed to S3
* Website updates instantly

---

## 🛠️ Technologies Used

* **AWS CodePipeline** – CI/CD orchestration
* **AWS CodeBuild** – Build/processing stage
* **Amazon S3** – Static website hosting
* **GitHub** – Source code repository

---

## 📁 Project Structure

```
/
├── index.html
├── style.css
├── script.js
```

---

## ⚙️ Pipeline Stages

### 1. Source Stage (GitHub)

* Connected via GitHub App
* Triggers pipeline on every push to `main` branch

---

### 2. Build Stage (CodeBuild)

* Uses inline buildspec
* No actual build required (static site)
* Passes files as artifacts

```yaml
version: 0.2

phases:
  build:
    commands:
      - echo "Passing files from pipeline"

artifacts:
  files:
    - '**/*'
```

---

### 3. Deploy Stage (S3)

* Uploads files to S3 bucket
* Extracts files before deployment
* Website becomes instantly live

---

## 🌐 Live Website

Once deployed, your website is available at:

```
http://<your-bucket-name>.s3-website-<region>.amazonaws.com
```

Example:

```
http://my-static-site-umesh-001.s3-website-ap-south-1.amazonaws.com
```

---

## 🔁 Auto Deployment

Pipeline is configured with GitHub webhook:

* Push code → Pipeline triggers automatically
* No manual deployment required

---

## 🔐 S3 Bucket Policy (Public Access)

To make the website accessible:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::<your-bucket-name>/*"
    }
  ]
}
```

---

## ⚠️ Common Issues & Fixes

### ❌ Pipeline not triggering

* Ensure webhook is enabled
* Verify branch = `main`
* Check GitHub connection

---

### ❌ Website shows old content

* Clear browser cache
* Use: `Ctrl + Shift + R`

---

### ❌ 403 Forbidden

* Check S3 bucket policy
* Disable "Block Public Access"

---

### ❌ Build stage skipped

* Ensure pipeline saved after adding build stage
* Trigger new execution

---

## 🎯 Key Learning Outcomes

* Understanding CI/CD pipelines
* Artifact flow between stages
* AWS service integration
* Static website hosting
* Automation using GitHub triggers

---

## 🚀 Future Improvements

* Add **CloudFront CDN**
* Enable **HTTPS with ACM**
* Use **custom domain**
* Add **cache invalidation automation**

---

## 👨‍💻 Author

**Umesh Bhamare**
Final Year B.Tech Computer Engineering Student

---

## ⭐ If you found this useful

Give this repo a star ⭐ and try extending it with React or backend services.
