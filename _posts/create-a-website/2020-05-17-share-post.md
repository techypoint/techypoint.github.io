---
title: "Share Post Using MailChimp"
author: "Varun Bisht"
description: "Share post by sending it straight to audience inboxes Using MailChimp"
keywords: "mailchimp blog post,embed rss feed in email,rss automation mailchimp,share blog updates mailchimp"
category: "create a website"
permalink: "/create-a-website/share-post"
image: "/assets/img/create-a-website/share-post/share-post.jpg"
featureImage: "/assets/img/create-a-website/share-post/share-post.jpg"
imgText: "Photo by Torsten Dettlaff from Pexels"

---
# Share Post Using MailChimp

In this Tutorial, we will teach you how you can share blog updates automatically by sending straight to contacts inboxes.

## PREREQUISITE

1. RSS

   RSS stands for **Really Simple Syndication** is a web feed that allows users to fetch latest updates.
It is basically a xml file which contains website information.

   In our case, it is blog info like
   - post date-time
   - author
   - content
   - link of the post.

   Below is a screenshot of RSS feed
<div class="imgCont">
  <img alt="Foody Blog RSS Feed" title="Foody Blog RSS Feed" src="/assets/img/create-a-website/share-post/foodyblog_rss_feed.png" />
</div>


### What we will do-

1. We will create RSS feed in our website.
2. Change title and subtitle of RSS Feed.
3. Set up MailChimp to automatically fetch blog info and send mails to contacts. It includes many steps which we will show below.


### So lets start -

### 1. Create RSS Feed
- Step 1 - Check whether you already have RSS Feed.

   Open- [http://localhost:4000/feed.xml](http://localhost:4000/feed.xml "http://localhost:4000/feed.xml"), If this file exists then you have done your first step.

   If it doesn't exist, then create it by using Jekyll RSS plugin.

To use RSS plugin-
   - Add this line to Gemfile located in root directory
   {% highlight html %}{% raw %}gem 'jekyll-feed'{% endraw %}{% endhighlight %}
   - In _config.yml, add{% highlight html %}{% raw %}plugins:
   - jekyll-feed{% endraw %}{% endhighlight %}
That's it to create feed.xml. Now check your feed.xml at [http://localhost:4000/feed.xml](http://localhost:4000/feed.xml "http://localhost:4000/feed.xml")
### 2. Change title and subtitle of RSS Feed
- Go to _config file, change
{% highlight html %}{% raw %}
title: Foody Blog
email: contact.techylane@gmail.com
description: >- # this means to ignore newlines until "baseurl:
  Foody blogs offers you a vast veriety of recipes which you can cook at home.
{% endraw %}{% endhighlight %}
Save these changes to Github
### 3. Set up MailChimp
- Login to [MailChimp](https://mailchimp.com "MailChimp")
- Go to Create option and select Email option.
<div class="imgCont">
  <img alt="MailChimp Email Option" title="MailChimp Email Option" src="/assets/img/create-a-website/share-post/mailchimp_email_option.png" />
</div>
- Go to Automated tab and select Share blog updates option
<div class="imgCont">
  <img alt="MailChimp Share Blog Updates" title="MailChimp Share Blog Updates" src="/assets/img/create-a-website/share-post/mailchimp_share_blog_updates.png" />
</div>
- Enter Campaign Name and select your audience to which you want to send updates and then click Begin
<div class="imgCont">
  <img alt="MailChimp Audience Selection" title="MailChimp Audience Selection" src="/assets/img/create-a-website/share-post/mailchimp_audience_selection.png" />
</div>
- In this screen, enter your live feed.xml URL and choose other options also.
After that, click on Next
<div class="imgCont">
  <img alt="MailChimp RSS Feed Setup" title="MailChimp RSS Feed Setup" src="/assets/img/create-a-website/share-post/mailchimp_rss_feed_setup.png" />
</div>
- In this screen, I will go with Entire audience option. You can choose which fits you best. After that, click on Next
<div class="imgCont">
  <img alt="MailChimp Recipients Setup" title="MailChimp Recipients Setup" src="/assets/img/create-a-website/share-post/mailchimp_recipients_setup.png" />
</div>
- This screen is all about email subject lines, whether you want to share on social media and tracking options. All options are self explanatory. After filling options, click on Next
<div class="imgCont">
  <img alt="MailChimp Campaign Info Setup" title="MailChimp Campaign Info Setup" src="/assets/img/create-a-website/share-post/mailchimp_campaign_info_setup.png" />
</div>
- This screen is to create template for your Email. Basically, how to show your RSS feed data in Email.
In Layout, I will go with 1 column template
<div class="imgCont">
  <img alt="MailChimp Template" title="MailChimp Template" src="/assets/img/create-a-website/share-post/mailchimp_template.png" />
</div>
- In this, you need to customize template design.
Drag and Drop RSS items from blocks and delete previous block. Customize your design and you can see preview and send test mail options also.

   After Customization, click on Next.
<div class="imgCont">
  <img alt="MailChimp Template Design" title="MailChimp Template Design" src="/assets/img/create-a-website/share-post/mailchimp_template_design.png" />
</div>
- You are all set to send updates. Click on start RSS and its done.
<div class="imgCont">
  <img alt="MailChimp RSS Done" title="MailChimp RSS Done" src="/assets/img/create-a-website/share-post/mailchimp_rss_done.png" />
</div>

Now Whenever you create a post, it will automatically send to your selected audience.

You can analyze information like
- total opens mail
- total clicks on mail
- forwarded mail
- and many more through **Campaign Dashboard on MailChimp portal**.

Now you have successfully created a blog with almost all necessary features.

We will target next on **how to rank high in search results i.e SEO**.

<a href="https://github.com/vbisht7038/vbisht7038.github.io.git">Click to get the full Implementation of this tutorial on Github</a>

### Further Study Material
1. [For MailChimp](https://mailchimp.com "MailChimp")
2. Explore MailChimp Portal

**In the next tutorial**, we will talk about the most important part i.e SEO and how to integrate SEO best practices.
