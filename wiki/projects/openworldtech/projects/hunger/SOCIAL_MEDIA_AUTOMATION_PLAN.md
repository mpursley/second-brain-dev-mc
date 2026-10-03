# Hunger App: Daily Social Media Automation Plan

## 🎯 Objective
Automate the daily creation of high-quality, realistic short-form videos (TikTok, YouTube Shorts, Reels) based on the "Hunger" manifesto, while keeping a "human-in-the-loop" to verify and approve the content before it goes live. Ensure the system runs autonomously in the cloud, independent of a local laptop.

## 🏗️ Architecture & Tools
Since the automation needs to run "online" (cloud-based) and requires manual approval, we will shift away from a local agent loop and build a robust cloud pipeline.

* **Execution Environment:** **GitHub Actions** (or Firebase Cloud Functions). We will use a daily cron job (e.g., 8:00 AM) to trigger a Node.js or Python script. This is free and runs in the cloud automatically.
* **Content Source:** The `Hunger. (example 600 word manifesto).txt` file, along with a directory of reference stock images to lock in the aesthetic.
* **Generative AI:** Google GenAI SDK (Gemini Omni 1.1 Flash / Veo) for both the base image generation and the image-to-video cinematic animation.
* **Review & Publishing:** **Buffer API**. Instead of posting directly to social media, the script will push the generated video and caption into Buffer as a **Draft**. 

## 🔄 The Daily Workflow
1. **Trigger:** GitHub Action wakes up daily at a scheduled time.
2. **Content Extraction:** The script randomly selects a powerful quote or segment from the manifesto.
3. **Image Generation (Nano Banana):** The script calls the Gemini API to generate a base image, using your stock footage as a style reference (ensuring a raw, realistic, unpolished aesthetic).
4. **Video Generation (Gemini Omni Flash):** The base image is passed into the Gemini Omni video model to generate a 5-second cinematic `.mp4` clip (e.g., adding subtle slow-motion or camera panning).
5. **Draft Creation:** The script uses the Buffer API to upload the `.mp4` and the manifesto quote as the caption, saving it as a Draft in your Buffer account.
6. **Human Verification:** You receive a notification. You can open the Buffer app on your phone or web, review the video and text, and simply hit "Approve" or "Schedule" to publish it to TikTok, YouTube, Facebook, and Instagram simultaneously.

## 🗺️ Development Milestones

### Phase 1: Local Generation Pipeline
* Set up a Python or Node.js script locally.
* Integrate the Google GenAI SDK.
* Write the logic to parse the manifesto.
* Test Image-to-Video generation using Gemini Omni Flash to ensure the quality and style match the brand.

### Phase 2: Buffer Integration
* Create a Buffer Developer app to get API keys.
* Add logic to the script to upload the `.mp4` and caption to the Buffer API, specifically flagging it as a `draft` rather than a scheduled post.

### Phase 3: Cloud Deployment
* Move the script to a GitHub repository.
* Set up a `.github/workflows/daily_post.yml` file with a cron schedule.
* Store API keys (Gemini, Buffer) securely in GitHub Secrets.
* Test the end-to-end automated cloud run.
