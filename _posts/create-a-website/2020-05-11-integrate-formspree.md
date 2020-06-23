---
title: "Contact Us Page Using FormsPree"
author: "Varun Bisht"
description: "Integrate Contact Us Page Using FormsPree"
keywords: ""
category: "create a website"
permalink: "/create-a-website/contact-mail"
image: "/assets/img/create-a-website/contact-mail/contact.jpg"
featureImage: "/assets/img/create-a-website/contact-mail/contact.jpg"
imgText: "Image by Gerd Altmann from Pixabay"
---
# Contact Us Page Using FormsPree

In this tutorial, We will create contact Us page through which user can mail you.

FormsPree lets you insert mail functionality in your website.

So lets Integrate it -

1. Sign Up on FormsPree
2. Create Form
3. Integrate Form in your website
4. Mail inbox

### 1. Sign Up

- Step 1 - Go to [FormsPree](https://formspree.io "FormsPree")
- Step 2 - Click on Sign Up
- Step 3 - Enter your email address and password for sign up.
<div class="imgCont">
  <img alt="FormsPree Register Page" title="FormsPree Register Page" src="/assets/img/create-a-website/contact-mail/formspree_register_page.png"/>
</div>
- Step 4 - Click on Register.
- Step 5 - Now go to your email inbox and verify your email address.
- Step 6 - After verfiication, you get this screen.
<div class="imgCont">
  <img alt="FormsPree Inbox" title="FormsPree Inbox" src="/assets/img/create-a-website/contact-mail/formspree_inbox.png"/>
</div>

### CREATE FORM

- Step 1 - Click on + icon and enter form name and email address in which you want mails to and then click create form button.
<div class="imgCont">
  <img alt="FormsPree Create Form" title="FormsPree Create Form" src="/assets/img/create-a-website/contact-mail/formspree_create_form.png"/>
</div>
- Step 2 - Click on Form Name, Now go to Settings tab and enter your domain name in Restrict to Domain textbox and save changes.

   In my case, it is - https://vbisht7038.github.io
<div class="imgCont">
  <img alt="FormsPree Form Setting" title="FormsPree Form Setting" src="/assets/img/create-a-website/contact-mail/formspree-settings.png"/>
</div>

### INTEGRATE FORM IN YOUR WEBSITE
- Step 1 - Now go to Integration tab and copy the code from **HTML** tab.
You can copy from **HTML with file uploads** tab, if you also want file upload option.

- Step 2 - Place this code in yout Html file and design it.

After designing, HTML code for **Contact Us** is -

{% highlight html %}{% raw %}
<section id="contactus">
  <h2>FEEL FREE TO CONTACT</h2>
  <div class="container-fluid">
    <div class="row">
        <form autocomplete="off" action="https://formspree.io/mvowkjdn" method="POST">
          <div class="row upper-half" >
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" id="name-cont">
          <input type="text" id="name" name="name" placeholder="NAME" required>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" id="email-cont">
          <input type="email" id="email" name="_replyto" placeholder="EMAIL" required>
          </div>
          </div>
          <div id="message-cont">
          <textarea id="message" rows="7" name="message" placeholder="MESSAGE" required></textarea>
          </div>
          <div id="submit-cont">
            <input type="submit" value="Send Mail">
          </div>
        </form>
  </div>
  </div>
</section>
{% endraw %}{% endhighlight %}

I have updated this code in index.html and added css in style.css

We have designed our contact page and now its time to push this code to Github repository so that our users can mail us.

You know the steps, but I will show again
<div class="imgCont">
  <img alt="Push Contact Us Feature" title="Push Contact Us Feature" src="/assets/img/create-a-website/contact-mail/push_contact_us_feature.png"/>
</div>

### MAIL INBOX

You can check mails in the Submission tab of your Form.

<div class="imgCont">
  <img alt="FormsPree Submission Tab" title="FormsPree Submission Tab" src="/assets/img/create-a-website/contact-mail/formspree_submission_tab.png"/>
</div>

<a href="https://github.com/vbisht7038/vbisht7038.github.io.git">Click to get the full Implementation of this tutorial on Github</a>

### Further Study Material
1. For FormsPree, you can check other functionalies on your formspree account- https://formspree.io/

In the next tutorial, we will focus on how to create blogs for our website.
