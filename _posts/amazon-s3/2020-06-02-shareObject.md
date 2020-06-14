---
title: "Amazon S3 Sharing Object URL"
author: "Varun Bisht"
description: "Share Amazon S3 Object URL - PreSigned URL and Public URL."
keywords: "s3 pre signed url,aws s3 get object url java,s3 signed url,amazon s3 get url of uploaded file,s3 bucket url access denied,aws s3 public url"
category: "amazon s3"
permalink: "/AmazonS3/object-url"
image: "/assets/img/amazon-s3/object-url/sharing-Object-Url.jpg"
featureImage: "/assets/img/amazon-s3/object-url/sharing-Object-Url.jpg"
---
## Objective
This tutorial describes how to share Amazon S3 Object URL - PreSigned URL and Public URL.

There are two ways to share URL -

1. By Generating **PreSigned URL** (for public and private objects).
2. By Sharing **public URL** (for public objects).  

## 1. By Generating PreSigned URL

<p>PreSigned URL is the URL created by the owner of the object from its security credentials to grant others time limited access.</p>
The PreSigned URL comprises of **Security Credentials + Bucket Name + object key + Expiration time and date + HTTP Method (GET to download the object and PUT to upload an object).**

**Code to generate PreSigned URL -**

{% highlight html %}{% raw %}
public static void generatePreSignedURL(AmazonS3 amazonS3,String bucketName,String objectKey){

    Calendar calendar= Calendar.getInstance();
    calendar.add(Calendar.DAY_OF_MONTH,5); // expiration time - 5 days

    GeneratePresignedUrlRequest generatePresignedUrlRequest =
        new GeneratePresignedUrlRequest(bucketName,objectKey)
            .withMethod(HttpMethod.GET)
            .withExpiration(calendar.getTime());

    URL url = amazonS3.generatePresignedUrl(generatePresignedUrlRequest);
    LOG.info("URL- " + url.toString());
  }
{% endraw %}{% endhighlight %}

Now we use amazonS3 client we created in this [tutorial]({% post_url amazon-s3/2020-05-30-setUpJavaProject %}).

We created a GeneratePresignedUrlRequest by passing object key, HttpMethod and expiration time.

**Note - This link will expire after 5 days (value set in expiration).**

## 2. Public URL
For this URL to work, you need to give **public permission to object**.<a href="https://docs.aws.amazon.com/AmazonS3/latest/user-guide/set-object-permissions.html"> Check this link for how to set object permsission.</a>

**Code to generate Public URL -**

{% highlight html %}{% raw %}
// it creates URL for public objects
public static void generatePublicURL(AmazonS3 amazonS3,String bucketName,String objectKey){
  URL url=amazonS3.getUrl(bucketName,objectKey);
  LOG.info("URL- " + url.toString());
}
{% endraw %}{% endhighlight %}

We simply call getUrl() on amazon S3 client.

You are successfully able to share object URL.

<a href="https://github.com/techypoint/amazon-s3.git">Click to get the full Implementation of this tutorial on Github</a>
