---
title: "Amazon S3 Storage Classes"
description: "What is AWS Storage Classes, classes Types, Factors making Storage Classes different and Comparison graph of AWS S3 Storage class."
keywords: "Amazon S3 Storage Classes,s3 intelligent-tiering,s3 rrs,s3 glacier,s3 one zone ia,s3 standard,s3 standard-ia,s3 glacier deep archive,aws s3 compare,Comparison graph of AWS S3 Storage class"
category: "amazon s3"
date: 2020-06-03 08:00:00
permalink: "/AmazonS3/storage-classes"
image: "/assets/img/amazon-s3/storage-classes/storage-classes.jpg"
---
## AWS Storage Classes
Storage Classes in AWS lets you store objects in a cost effecient manner.
Every Object belong to a Storage class.

## Types of Storage Classes in AWS
1. **S3 Standard** - Frequently accessed data
2. **S3 Standard-IA** - Long-lived, infrequently accessed data
3. **S3 Intelligent-Tiering** - Long-lived data with changing or unknown access pattern
4. **S3 One Zone-IA** - Long-lived, infrequently accessed, non-critical data
5. **S3 Glacier** - Long-term data archiving with retrieval times ranging from minutes to hours
6. **S3 Glacier Deep Archive** - Archiving rarely accessed data with a default retrieval time of 12 hours
7. **Reduced Redundancy Storage (RRS)** - Frequently accessed, non-critical data

**Note - RSS not recommended**

## Factors considering while selecting Storage Classes
1. **Access of data** - how frequently you want to access data
2. **Durability**
3. **Availability**
4. **Min Storage duration**
5. **Cost**
and many more

### There are  many examples for which you need to change Storage Class of objects.
Eg - Suppose you are storing reports in AWS which are used by the clients.
<p>For 10-15 days,it is accessed frequently by the clients, so you need S3 Standard Storage Class.</p>
<p>After 1 month, the reports are not accessed frequently, so you can move these reports to S3 Standard-IA Storage Classes.</p>
<p>After 2 months, the reports are accessed rarely, so you can move these reports to S3 Glacier Deep Archive Storage Classes.</p>

By doing this, you can use your money effectively.

Transition of objects from one storage class to another can be set by making rules at bucket level. This feature can be done in
[**Life Cycle Management**]({% post_url amazon-s3/2020-06-03-lifecycleManagement %}).

## Comparison graph of AWS S3 Storage class
<div class="table">
<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-31ua{background-color:#ffcc67;border-color:inherit;text-align:left;vertical-align:top}
.tg .tg-ik58{background-color:#ffcb2f;border-color:inherit;text-align:left;vertical-align:top}
.tg .tg-i1q2{background-color:#34cdf9;border-color:inherit;text-align:left;vertical-align:top}
.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}
</style>
<table class="tg">
<thead>
  <tr>
    <th class="tg-ik58"><span style="font-weight:bold">Storage class</span></th>
    <th class="tg-ik58"><span style="font-weight:bold">Designed for</span></th>
    <th class="tg-31ua"><span style="font-weight:bold">Durability (designed for)</span></th>
    <th class="tg-ik58"><span style="font-weight:bold">Availability (designed for)</span></th>
    <th class="tg-ik58"><span style="font-weight:bold">Availability Zones</span></th>
    <th class="tg-ik58"><span style="font-weight:bold">Min storage duration</span></th>
    <th class="tg-ik58"><span style="font-weight:bold">Min billable object size</span></th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-i1q2">S3 Standard</td>
    <td class="tg-0pky">Frequently accessed data</td>
    <td class="tg-0pky">99.999999999%</td>
    <td class="tg-0pky">99.99%</td>
    <td class="tg-0pky">&gt;= 3</td>
    <td class="tg-0pky">None</td>
    <td class="tg-0pky">None</td>
  </tr>
  <tr>
    <td class="tg-i1q2">S3 Standard-IA</td>
    <td class="tg-0pky">Long-lived, infrequently accessed data</td>
    <td class="tg-0pky">99.999999999%</td>
    <td class="tg-0pky">99.9%</td>
    <td class="tg-0pky">&gt;= 3</td>
    <td class="tg-0pky">30 days</td>
    <td class="tg-0pky">128 KB</td>
  </tr>
  <tr>
    <td class="tg-i1q2">S3 Intelligent-Tiering</td>
    <td class="tg-0pky">Long-lived data with changing or unknown access patterns</td>
    <td class="tg-0pky">99.999999999%</td>
    <td class="tg-0pky">99.9%</td>
    <td class="tg-0pky">&gt;= 3</td>
    <td class="tg-0pky">30 days</td>
    <td class="tg-0pky">None</td>
  </tr>
  <tr>
    <td class="tg-i1q2">S3 One Zone-IA</td>
    <td class="tg-0pky">Long-lived, infrequently accessed, non-critical data</td>
    <td class="tg-0pky">99.999999999%</td>
    <td class="tg-0pky">99.5%</td>
    <td class="tg-0pky">1</td>
    <td class="tg-0pky">30 days</td>
    <td class="tg-0pky">128 KB</td>
  </tr>
  <tr>
    <td class="tg-i1q2">S3 Glacier</td>
    <td class="tg-0pky">Long-term data archiving with retrieval times ranging from minutes to hours</td>
    <td class="tg-0pky">99.999999999%</td>
    <td class="tg-0pky">99.99%</td>
    <td class="tg-0pky">&gt;= 3</td>
    <td class="tg-0pky">90 days</td>
    <td class="tg-0pky">40 KB</td>
  </tr>
  <tr>
    <td class="tg-i1q2">S3 Glacier Deep Archive</td>
    <td class="tg-0pky">Archiving rarely accessed data with a default retrieval time of 12 hours</td>
    <td class="tg-0pky">99.999999999%</td>
    <td class="tg-0pky">99.99%</td>
    <td class="tg-0pky">&gt;= 3</td>
    <td class="tg-0pky">180 days</td>
    <td class="tg-0pky">40 KB</td>
  </tr>
  <tr>
    <td class="tg-i1q2">RRS (Not recommended)</td>
    <td class="tg-0pky">Frequently accessed, non-critical data</td>
    <td class="tg-0pky">99.99%</td>
    <td class="tg-0pky">99.99%</td>
    <td class="tg-0pky">&gt;= 3</td>
    <td class="tg-0pky">None</td>
    <td class="tg-0pky">None</td>
  </tr>
</tbody>
</table>
</div>

You are successfully able to understand Object Storage Classes.
