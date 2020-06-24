---
title: "SignUp Form(Subscribe) Using MailChimp"
author: "Varun Bisht"
description: "Integrate SignUp Form(Subscribe) Using MailChimp"
keywords: "mailchimp signup form,mailchimp create embedded form,mailchimp websites,how to setup mailchimp"
category: "create a website"
permalink: "/create-a-website/signUp-mailchimp"
image: "/assets/img/create-a-website/signUp-mailchimp/subscribe.jpg"
featureImage: "/assets/img/create-a-website/signUp-mailchimp/subscribe.jpg"
imgText: "Image by Biljana Jovanovic from Pixabay"
---
# SignUp Form(Subscribe) Using MailChimp

In this Tutorial, we will talk about how we will integrate Sign Up Form on our website.

This feature lets users Subscribe for latest updates. We are integrating this using MailChimp.

## What is MailChimp

MailChimp is all-in-one integrated marketing platform for small business.
Its easy to use and free for starting.
It is an email marketing technique and helps in expanding your reach.

Whenever you add a new post, it will be available to the subscriber through RSS feed.
You can also target your audience by segmenting them.

### What we will do-
1. Sign up on MailChimp.
2. Design Sign Up Form Code
3. Integrate Code on Your website

### So lets start -

### 1. Sign Up
- Step 1 - Go to [MailChimp](https://mailchimp.com "MailChimp")
- Step 2 - Click On Sing Up Free
<div class="imgCont">
  <img alt="MailChimp Homepage" title="MailChimp Homepage" src="/assets/img/create-a-website/signUp-mailchimp/mailchimp-homepage.png" />
</div>
- Step 3 - Fill the form and click Sign Up
<div class="imgCont">
  <img alt="MailChimp SignUp Form" title="MailChimp SignUp Form" src="/assets/img/create-a-website/signUp-mailchimp/mailchimp-signup-form.png" />
</div>
- Step 4 - Go to Email box and verfiy your email address.
- Step 5 - After verification and confirming you are human. You will see below screen. Choose Free Plan and Click Complete button.
<div class="imgCont">
  <img alt="MailChimp Plans" title="MailChimp Plans" src="/assets/img/create-a-website/signUp-mailchimp/mailchimp-plans.png" />
</div>
- Step 6 - Now set up your account and Continue.
<div class="imgCont">
  <img alt="MailChimp SetUp Account" title="MailChimp SetUp Account" src="/assets/img/create-a-website/signUp-mailchimp/mailchimp-setup-account.png" />
</div>
- Step 7 - Now Tell Something about your business and enter website URL and Continue
<div class="imgCont">
  <img alt="MailChimp Tell Me Business" title="MailChimp Tell Me Business" src="/assets/img/create-a-website/signUp-mailchimp/mailchimp-tellme-business.png" />
</div>
- Step 8 - Now Enter your address details and phone number.
<div class="imgCont">
  <img alt="MailChimp Add Address" title="MailChimp Add Address" src="/assets/img/create-a-website/signUp-mailchimp/mailchimp-add-address.png" />
</div>
- Step 9 - Now Select suitable option and Continue.
<div class="imgCont">
  <img alt="MailChimp Contacts" title="MailChimp Contacts" src="/assets/img/create-a-website/signUp-mailchimp/mailchimp-contacts.png" />
</div>
- Step 10 - Choose option based on your purpose and continue.
<div class="imgCont">
  <img alt="MailChimp Offer" title="MailChimp Offer" src="/assets/img/create-a-website/signUp-mailchimp/mailchimp-offer.png" />
</div>
- Step 11 - Subsctibe to the options and Click on Lets Go.
<div class="imgCont">
  <img alt="MailChimp Subscribe Option" title="MailChimp Subscribe Option" src="/assets/img/create-a-website/signUp-mailchimp/mailchimp-subscribe-option.png" />
	</div>
You have successfully able to sign up

### 2. Design Sign Up Form Code

- Step 1 - Now Go to create option on the top-left corner. Select SignUpForm Option.
<div class="imgCont">
  <img alt="Mailchimp Create Signup Form" title="Mailchimp Create Signup Form" src="/assets/img/create-a-website/signUp-mailchimp/mailchimp-create-signup-form.png" />
</div>
- Step 2 - Select the form type and Click on Begin.
<div class="imgCont">
  <img alt="Mailchimp Signup Form Type" title="Mailchimp Signup Form Type" src="/assets/img/create-a-website/signUp-mailchimp/mailchimp-signup-form-type.png" />
</div>
- Step 3 - Now there are different designs of Form. You can choose whichever suits your website design.

   I will go with Horizontal design.

   You can change the form title. After Changing, copy code from screen
{% highlight html %}{% raw %}
<!-- Begin Mailchimp Signup Form -->
<link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css">
<style type="text/css">
	#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; width:100%;}
	/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
	   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
</style>
<div id="mc_embed_signup">
<form action="https://github.us10.list-manage.com/subscribe/post?u=8e538f972fa09484ba232492f&amp;id=5b5863d2f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
	<label for="mce-EMAIL">Subscribe for more recipes</label>
	<input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>
    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_8e538f972fa09484ba232492f_5b5863d2f0" tabindex="-1" value=""></div>
    <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
    </div>
</form>
</div>
<!--End mc_embed_signup-->
{% endraw %}{% endhighlight %}

### 3. Integrate Code on our website
- Step 1 - Create signUp.md and paste code in it.
- Step 2 - Now you can include signUp.md file in your posts or in your post layout file.
I am including it in 2020-06-12-butterChicken.markdown file
{% highlight html %}{% raw %}
![Butter Chicken](/assets/img/non-veg/butterChicken.jpg "Butter Chicken")
{% include signUp.md %}
# Butter Chicken Recipe
{% endraw %}{% endhighlight %}

Now open your blog and you will see the magic. You will see a subscribe option below image and that's it.
<div class="imgCont">
  <img alt="MailChimp SignUp Design" title="MailChimp SignUp Design" src="/assets/img/create-a-website/signUp-mailchimp/mailchimp-signup-design.png" />
</div>

Now save your changes to Github Account.
<div class="imgCont">
  <img alt="MailChimp Save Changes" title="MailChimp Save Changes" src="/assets/img/create-a-website/signUp-mailchimp/mailchimp-save-changes.png" />
</div>


Now any users can subscribe for updates and you can expand your audience.

You can see your subscribed users under **Audience section on MailChimp portal**.

There are many other features and customization available-
- But one you may wish to add is to confirm the email address of the subscriber.
For that, you need to enable double opt-in option.
[How to enable double opt-in option](https://mailchimp.com/help/set-signup-preferences "How to enable double opt-in option")
- You can also share post to your audience

<a href="https://github.com/vbisht7038/vbisht7038.github.io.git">Click to get the full Implementation of this tutorial on Github</a>

### Further Study Material

1. [For MailChimp](https://mailchimp.com "MailChimp")
2. Explore MailChimp Portal

**In the next tutorial**, we will talk about how you can share post to your audience(will automate process).
