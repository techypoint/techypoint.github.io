---
title: "Use Custom Domain For Github Pages"
author: "Varun Bisht"
description: "Use Custom Domain For Github Pages and Enable HTTPS"
keywords: "github pages custom domain ip,github pages custom domain https,github pages custom domain godaddy,use your own domain name github pages,github pages custom domain name,github pages cname file"
category: "create a website"
date: 2020-06-28 17:30:00 pm
permalink: "/create-a-website/custom-domain-for-github-pages"
image: "/assets/img/create-a-website/custom-domain-for-github-pages/custom_domain.jpg"
featureImage: "/assets/img/create-a-website/custom-domain-for-github-pages/custom_domain.jpg"
imgText: "By Santeri Viinamäki"
---
# Add Custom Domain To Github Pages

If you don't like your domain which ends with github.io. Then you can purchase a domain from domain providers and add it in Github Pages.
Custom domain basically adds to your brand value and later you can easily switch to other web hosting providers.

### What we will do -
1. Buy a domain from domain providers
2. Integrate this domain for Github Pages
3. Create A and CNAME record in your DNS Provider DNS Setting

### So lets start -

### 1. Buy domain from domain provider.
You can buy domain from any domain provider.
[How to buy Domain From GoDaddy](https://www.youtube.com/watch?v=ONyEEfNxHcQ "How to buy Domain From GoDaddy")

### 2. Integrate this domain for Github Pages
- After Buying Domain, Login to Github Account
- Go to your repository
<div class="imgCont">
  <img alt="Github Repository Option" title="Github Repository Option" src="/assets/img/create-a-website/custom-domain-for-github-pages/repository_option.png" />
</div>
- Go to Repository Setting
<div class="imgCont">
  <img alt="Github Repository Setting Option" title="Github Repository Setting Option" src="/assets/img/create-a-website/custom-domain-for-github-pages/repository_setting_option.png" />
</div>
- In this screen, Go to Github Pages and Enter domain in Custom Domain textbox and Click On Save.

   This will create a CNAME file in the root of your repository branch.

   **Note**- Tick Enforce HTTPS checkbox.

   **Note**- In Next tutorial, fetch or pull code from Github as Github created a CNAME file.
<div class="imgCont">
  <img alt="Github Custom Domain Option" title="Github Custom Domain Option" src="/assets/img/create-a-website/custom-domain-for-github-pages/github_custom_domain.png" />
</div>
### 3. Create A and CNAME record in your DNS Provider DNS Setting
Now Go to your DNS Provider Domain Setting, add CNAME and A record
- To create an A record, point your apex domain to the IP addresses for GitHub Pages.

   These are the IP address of Github Pages at the time of creating this post.You can check latest IPs from the link provided in **Further Study Material**.
   - 185.199.108.153
   - 185.199.109.153
   - 185.199.110.153
   - 185.199.111.153
- To create a CNAME record, point www to the site hosted at username.gitub.io.

Below is the screenshot of GoDaddy Domain Setting-
<div class="imgCont">
  <img alt="GoDaddy Domain Setting" title="GoDaddy Domain Setting" src="/assets/img/create-a-website/custom-domain-for-github-pages/DomainSettings.png" />
</div>

Sometimes, these changes takes times to reflect so dont worry.

After these stpes, Search website using custom domain and it works perfectly.

In Further tutorials, We are using github.io domain but you can use your custom domain.

### Further Study Material
1. Buy Domain- Youtube
2. To Integrate Custom Domain - [managing a custom-domain for your github pages site](https://help.github.com/en/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site "managing-a-custom-domain-for-your-github-pages-site")

**In the next tutorial**, we will focus on how users can contact you.
