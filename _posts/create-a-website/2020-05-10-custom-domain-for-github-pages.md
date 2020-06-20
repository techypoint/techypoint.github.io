---
title: "Design Home Page "
author: "Varun Bisht"
description: "Design cool Home Page for the webiste."
keywords: ""
category: "create a webiste"
permalink: "/create-a-webiste/custom-domain-for-github-pages"
image: "/assets/img/create-a-webiste/custom-domain-for-github-pages/"
---
# Add Custom Domain To Github Pages

If you dont like your domain to ends with github.io. Then you can purchase a domain from domain providers and add it in Github Pages.
Custom domain basically adds to your brand value and later you can easily switch to other web hosting providers.

What we will do -
1. create a domain from domain providers.
2. Integrate this domain for Github Pages
3. Create A and CNAME record in your DNS Provider.

So lets start-
1. Buy domain from domain provider.
Link for How to buy Domain From GoDaddy - https://www.youtube.com/watch?v=ONyEEfNxHcQ
2. After Buying Domain, Login to Github Account
- Go to your repository
<div class="imgCont">
  <img alt="MailChimp Homepage" title="MailChimp Homepage" src="/assets/img/create-a-website/custom-domain-for-github-pages/repository_option.png" />
</div>
- Go to repository setting
<div class="imgCont">
  <img alt="MailChimp Homepage" title="MailChimp Homepage" src="/assets/img/create-a-website/custom-domain-for-github-pages/repository_setting_option.png" />
</div>
- In this screen, Go to Github Pages and Enter domain in Custom Domain textbox and click On Save.
This will create a CNAME file in the root of your repository branch.
**Note**- Tick Enforce HTTPS checkbox
<div class="imgCont">
  <img alt="MailChimp Homepage" title="MailChimp Homepage" src="/assets/img/create-a-website/custom-domain-for-github-pages/github_custom_domain.png" />
</div>
3. Now Go to your DNS Provider Domain Setting, add CNAME and A record
- To create an A record, point your apex domain to the IP addresses for GitHub Pages.
These are the IP address of Github Pages at the time of creating this post.You can check latest IPs from the link provided in Further Study Material.
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
- To create a CNAME record, point www to the site hosted at username.gitub.io.
<div class="imgCont">
  <img alt="MailChimp Homepage" title="MailChimp Homepage" src="/assets/img/create-a-website/custom-domain-for-github-pages/DomainSettings.png" />
</div>

Sometimes, it takes these changes to reflect so dont worry.

After these stpes, search webiste using custom domanin.

Further Study Material
1. Buy Domain- Youtube
2. To Integrate Custom Domain - https://help.github.com/en/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site

In the next tutorial, we will focus on how users can contact you.
