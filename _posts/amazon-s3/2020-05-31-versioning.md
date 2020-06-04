---
title: "Amazon S3 Versioning"
description: "what is Amazon S3 versioning and how to enable versioning in a bucket."
keywords: "amazon s3 introduction,aws s3 what is versioning,enable versioning s3,aws s3 enable versioning"
category: "amazon s3"
permalink: "/AmazonS3/versioning"
image: "/assets/img/amazon-s3/versioning/Versioning.jpg"
---
## What is Amazon S3 Versioning

Versioning in aws s3 means to keep **variants of the same object.**
Versioning can be helpful in maintaining different states of objects.
If versioning is enabled for bucket, Amazon S3 automatically creates **version id** for the object.

Eg -
In the bucket, you have two object with the same key but with different version id

Object 1  - object 1 key + version id(1)

Object 2  - object 1 key + version id(2)

Version enabled buckets can be recovered from accidental deletion or overwrite.

**Note - you need to explicitly enable version for the bucket.**

## Enable Versioning In a Bucket

- Step 1 - Login in to your Amazon S3 account.
- Step 2 - Search s3 on search bar and select S3
<div class="imgCont">
  <img alt="AWS Management Console Panel" title="AWS Management Console Panel" src="/assets/img/amazon-s3/versioning/aws_console_panel.png" />
</div>
- Step 3 - Click on bucket name
<div class="imgCont">
  <img alt="Amazon S3 Bucket list" title="Amazon S3 Bucket list" src="/assets/img/amazon-s3/versioning/amazon-s3-bucket-list.png" />
</div>
- Step 4 - Go to Properties and Enable Versioning.
<div class="imgCont">
  <img alt="AWS Management Console Panel" title="AWS Management Console Panel" src="/assets/img/amazon-s3/versioning/bucket_properties.png" />
</div>

Now you are successfully able to enable versioning of a bucket.
