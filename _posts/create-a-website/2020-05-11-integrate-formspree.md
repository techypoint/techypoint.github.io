---
title: "Contact Page Using FormsPree"
author: "Varun Bisht"
description: "Integrate Contact Us Page Using FormsPree"
keywords: ""
category: "create a webiste"
permalink: "/create-a-webiste/contact-mail"
image: "/assets/img/create-a-webiste/contact-mail/"
---
# Contact Page Using FormsPree

In this tutorial, We will create contact page through which user can mail you.

FormsPree lets you insert mail functionality in your own website.

So lets Integrate it -

1. Sing Up on FormsPree
2. create form
3. Integrate Forms in your website
4. Mail inbox

### 1. Sign Up

- Step 1. Go to https://formspree.io
- Step 2. Click on Sign Up
- Step 3. Enter your email address and password for sign up.
file:///home/varun/Pictures/formspree_register_page.png
- Step 4. Click on Register.
- Step 5. Now go to your email inbox and verify your email address.
- Step 6. After verfiication, you get this screen.
file:///home/varun/Pictures/formspree_inbox.png

### CREATE FORM

- Step 1. Click on + icon and enter form name and email address in which you want mails to and then create form button.
file:///home/varun/Pictures/formspree_create_form.png
- Step 2 - Now go to Settings tab and enter your domain name in Restrict to Domain and save changes.
In my case, it is - https://vbisht7038.github.io

### INTEGRATE FORM IN YOUR WEBSITE
- Step 1. Now go to Integration tab and cooy the code from **HTML** tab.
You can copy from **HTML with file uploads** tab, if you want file upload option.

- Step 2. Place this code in yout Html file and design it.

After designing, HTML code for **contact Us** is -

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

You know the steps, but i will show again
file:///home/varun/Pictures/push_contact_us_feature.png

### MAIL INBOX

you can check mails in the Submission tab of your form.
Sharing the screen shot -
file:///home/varun/Pictures/formspree_submission_tab.png


You can find the update code from here - github url

Further Study Material
1. For FormsPree, you can check other functionalies on your formspree account- https://formspree.io/

In the next tutorial, we will focus on how to create blogs for our website.
