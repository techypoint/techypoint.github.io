---
title: "Comment Box Using Disqus"
author: "Varun Bisht"
description: "Integrate Comment Box On Blog Post Using Disqus"
blogDesc: "In this tutorial, we will create comment box using Disqus so that others can share its views."
keywords: "disqus jekyll,disqus blog,disqus integration,disqus comments,add comments to jekyll blog"
category: "create a website"
permalink: "/create-a-website/comment-disqus"
date: 2020-06-28 18:40:00 pm
trending: true
image: "/assets/img/create-a-website/comment-disqus/comment.jpg"
featureImage: "/assets/img/create-a-website/comment-disqus/comment.jpg"
imgText: "Image by Werner Moser from Pixabay"
---
# Comment Box Using Disqus

In this tutorial, we will create comment box using Disqus so that others can share its views.

### What we will do-
1. Sign Up On Disqus.
2. Integrate code in our website.

### 1. Sign Up
- Step 1 - Go to [Disqus](https://disqus.com "Disqus")
- Step 2 - Click on Get Started
<div class="imgCont">
  <img class="object-fit" alt="Disqus Homepage" title="Disqus Homepage" src="/assets/img/create-a-website/comment-disqus/disqus-homepage.png" />
</div>
- Step 3 - Enter following details or can choose other options. After that click Sign Up.
<div class="imgCont">
  <img class="object-fit" alt="Disqus Sign Up" title="Disqus Sign Up" src="/assets/img/create-a-website/comment-disqus/disqus-signUp.png" />
</div>
- Step 4 - Then choose I want to install Disqus on my site.
<div class="imgCont">
  <img class="object-fit" alt="Disqus Install Option" title="Disqus Install Option" src="/assets/img/create-a-website/comment-disqus/disqus-install-option.png" />
</div>
- Step 5 - Enter website name and category and then click on create site button.
<div class="imgCont">
  <img class="object-fit" alt="Disqus create site page" title="Disqus create site page" src="/assets/img/create-a-website/comment-disqus/disqus-create-site.png" />
</div>
- Step 6 - In this screen, Select a basic plan and click on Subscibe now.
<div class="imgCont">
  <img class="object-fit" alt="Disqus Plan Option" title="Disqus Plan Option" src="/assets/img/create-a-website/comment-disqus/disqus-plan-option.png" />
</div>
- Step 7 - Now Select On Install Universal Code option.
<div class="imgCont">
  <img class="object-fit" alt="Disqus Platform option" title="Disqus Platform option" src="/assets/img/create-a-website/comment-disqus/disqus-platform.png" />
</div>
- Step 8 - In this screen, we will see how to Integrate code in our website and video instruction is also available.

### 2. Integrate Code

- Step 1 - Copy code from screen, code similar to below code
{% highlight html %}{% raw %}
<div id="disqus_thread"></div>
<script>

/**
*  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
*  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
/*
var disqus_config = function () {
this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
};
*/
(function() { // DON'T EDIT BELOW THIS LINE
var d = document, s = d.createElement('script');
s.src = 'https://https-vbisht7038-github-io.disqus.com/embed.js';
s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
{% endraw %}{% endhighlight %}

- Step 2 - Now create comment-disqus.md in _include folder and paste above code in it and add css code for designing.
{% highlight html %}{% raw %}
#disqus_thread {
  margin-top: 50px;
}
{% endraw %}{% endhighlight %}
- Step 3 - Now replace below lines for page identification so that Disqus can easily identify comment box is located on which page.
{% highlight html %}{% raw %}
this.page.url = "{{ page.url || prepend: site.url}}";
this.page.identifier = "{{ page.url }}";
{% endraw %}{% endhighlight %}
- Step 4 - Now you have markdown file, you need to just include it in your post.md file
{% highlight html %}{% raw %}
<div id="center" class="col-xs-12 col-sm-9 col-md-8 col-lg-8 col-xl-8">
  <div id=post-cont>
  {{ content }}
  </div>
  <!-- comment box -->
  {% include comment-disqus.md %}
  <!-- comment box -->
</div>
{% endraw %}{% endhighlight %}
- Step 5 - Go to your blog, you will see a comment box but with a message to verify your email address.
<div class="imgCont">
  <img class="object-fit" alt="Disqus Email Verification" title="Disqus Email Verification" src="/assets/img/create-a-website/comment-disqus/disqus-email-verification.png" />
</div>

Verify your email address and you are all done.
<div class="imgCont">
  <img class="object-fit" alt="Disqus Comment box" title="Disqus Comment box" src="/assets/img/create-a-website/comment-disqus/disqus-comment-done.png" />
</div>

Now save your changes to Github account.
<div class="imgCont">
  <img class="object-fit" alt="Disqus Save Changes" title="Disqus Save Changes" src="/assets/img/create-a-website/comment-disqus/disqus-save-changes.png" />
</div>

**On Disqus portal**,
- you can change look and feel of comment box.
- you can see the latest comments and deletes them
- and much more.

<a href="https://github.com/vbisht7038/vbisht7038.github.io.git">Click to get the full Implementation of this tutorial on Github</a>

### Further Study Material
1. For [Disqus](https://disqus.com "Disqus")
2. Explore Disqus Portal

**In the next tutorial**, we will talk about how to integrate Sign Up Form Using MailChimp.
