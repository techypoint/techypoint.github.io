---
title: "Share Post Using MailChimp"
author: "Varun Bisht"
description: "Share post by sending it straight to their inboxes Using MailChimp"
keywords: ""
category: "create a website"
permalink: "/create-a-website/share-post"
image: "/assets/img/create-a-website/share-post/share-post.jpg"
featureImage: "/assets/img/create-a-website/share-post/share-post.jpg"
imgText: "Photo by Torsten Dettlaff from Pexels"

---
# Share Post Using MailChimp

In this Tutorial, we will teach you how you can share blog updates automatically by sending straight to contacts inboxes.

**PREQUISITE**

1. RSS
RSS stands for Really Simple Syndication is a web feed that allows users to fetch latest updates.
It is basically a xml file which contains information. In our case, it is blog info like post date-time, author, content and link of the post.
Below is a screenshot of RSS feed.
<div class="imgCont">
  <img alt="Foody Blog RSS Feed" title="Foody Blog RSS Feed" src="/assets/img/create-a-website/share-post/foodyblog_rss_feed.png" />
</div>


**How does it work**
1. We will create RSS feed in our website.
2. Change title and subtitle of RSS Feed.
3. Set up MailChimp to automatically fetch blog info and send mails to contacts.It includes many steps which we will show below.


So lets start-
-Step 1. check whether you already have RSS Feed.
Open- http://localhost:4000/feed.xml, If this files exists then you have done your first step.
If it doesn't exist, then create it by using Jekyll Rss plugin.
To use RSS plugin-
- Add this line to Gemfile located in root directory
{% highlight html %}{% raw %}
gem 'jekyll-feed'
{% endraw %}{% endhighlight %}
- In _config.yml, add
{% highlight html %}{% raw %}
plugins:
  - jekyll-feed
{% endraw %}{% endhighlight %}
You have successfully created feed.xml
- Step2.
Go to _config file, change
{% highlight html %}{% raw %}
title: Foody Blog
email: contact.techylane@gmail.com
description: >- # this means to ignore newlines until "baseurl:
  Foody blogs offers you a vast veriety of recipes which you can cook at home.
{% endraw %}{% endhighlight %}
Save your changes to Github
-Step 3.
- Login to MailChimp
- Go to create option and select Email option.
<div class="imgCont">
  <img alt="MailChimp Email Option" title="MailChimp Email Option" src="/assets/img/create-a-website/share-post/mailchimp_email_option.png" />
</div>
- Go to Automated tab and select Share blog updates option
<div class="imgCont">
  <img alt="MailChimp Share Blog Updates" title="MailChimp Share Blog Updates" src="/assets/img/create-a-website/share-post/mailchimp_share_blog_updates.png" />
</div>
- Enter Campaign Name and select your audience to which you want to send updates and then Click Begin
<div class="imgCont">
  <img alt="MailChimp Audience Selection" title="MailChimp Audience Selection" src="/assets/img/create-a-website/share-post/mailchimp_audience_selection.png" />
</div>
- In this screen, enter your live feed.xml URL and choose other options also.
After that, Click on Next
<div class="imgCont">
  <img alt="MailChimp RSS Feed Setup" title="MailChimp RSS Feed Setup" src="/assets/img/create-a-website/share-post/mailchimp_rss_feed_setup.png" />
</div>
- In this screen, i will go with Entire audience option. You can choose which fits you best.
After that, Click on Next
<div class="imgCont">
  <img alt="MailChimp Recipients Setup" title="MailChimp Recipients Setup" src="/assets/img/create-a-website/share-post/mailchimp_recipients_setup.png" />
</div>
- This screen is all about email subject lines, whether to want to share on social media and tracking options.
All options are self explanatory. After filling options, Click on Next
<div class="imgCont">
  <img alt="MailChimp Campaign Info Setup" title="MailChimp Campaign Info Setup" src="/assets/img/create-a-website/share-post/mailchimp_campaign_info_setup.png" />
</div>
- This tab is to create template for your Email. Basically, how to show your RSS feed data in Email.
In Layout, i will go with 1 column template
<div class="imgCont">
  <img alt="MailChimp Template" title="MailChimp Template" src="/assets/img/create-a-website/share-post/mailchimp_template.png" />
</div>
- In this, You need to customize template design.
Choose RSS items from blocks and delete previous block. Customize your design and you can see preview and send test mail.
After Customization, Click on Next.
<div class="imgCont">
  <img alt="MailChimp Template Design" title="MailChimp Template Design" src="/assets/img/create-a-website/share-post/mailchimp_template_design.png" />
</div>
- You are all set to send updates. Click on start RSS and its done.
<div class="imgCont">
  <img alt="MailChimp RSS Done" title="MailChimp RSS Done" src="/assets/img/create-a-website/share-post/mailchimp_rss_done.png" />
</div>

Now Whenever ypu create a post, it will automatically send to your audience.

You can analyze information like
- total opens
- total clicks
- forwarded
- and many more through Campaign Dashboard

Now you have successfully create a blog with almost all necessary features.
We will target next on how to rank high in Search Results.

### Further Study Material
1. For MailChimp - https://mailchimp.com
2. Explore MailChimp Portal

In the Next Tutorial, we will talk about the most important part i.e SEO and how to integrate SEO best practices.
