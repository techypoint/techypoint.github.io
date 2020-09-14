---
title: "Docker Networking"
author: "Varun Bisht"
description: "Website basics terms and concepts-hosting, domain name, Git and SEO"
keywords: "web hosting,hosting meaning,domain name meaning,Git,SEO"
category: "docker"
permalink: "/docker/networking"
date: 2020-08-18 11:00:00 am
image: "/assets/img/docker/docker-networking.png"
featureImage: "/assets/img/docker/docker-networking.png"
---
Networking allows docker containers to communicate with each other.

Docker daemon creates three network by default for you on installation.
1. Bridge
2. Host
3. None

## 1. To view docker networks
**command-** sudo docker network ls
{% highlight html %}{% raw %}
varun@varun-ThinkPad-L490:~/my-pro-projects/docker-tutorial-data$ sudo docker network ls
NETWORK ID          NAME                DRIVER              SCOPE
ad5e000dcace        bridge              bridge              local
a6bc016d1d99        host                host                local
c630fc777cd6        none                null                local
{% endraw %}{% endhighlight %}

## 2. To describe network details

**command-** sudo docker network inspect network-name

For Eg- sudo docker network inspect host
{% highlight html %}{% raw %}
varun@varun-ThinkPad-L490:~/my-pro-projects/docker-tutorial-data$ sudo docker network inspect bridge
[
    {
        "Name": "bridge",
        "Id": "ddaa990045a4fa5504a47fe44c9d2eebb0423e781e94f3033b6ae0166d4b4957",
        "Created": "2020-08-23T13:49:49.635769709+05:30",
        "Scope": "local",
        "Driver": "bridge",
        "EnableIPv6": false,
        "IPAM": {
            "Driver": "default",
            "Options": null,
            "Config": [
                {
                    "Subnet": "172.17.0.0/16",
                    "Gateway": "172.17.0.1"
                }
            ]
        },
        "Internal": false,
        "Attachable": false,
        "Ingress": false,
        "ConfigFrom": {
            "Network": ""
        },
        "ConfigOnly": false,
        "Containers": {},
        "Options": {
            "com.docker.network.bridge.default_bridge": "true",
            "com.docker.network.bridge.enable_icc": "true",
            "com.docker.network.bridge.enable_ip_masquerade": "true",
            "com.docker.network.bridge.host_binding_ipv4": "0.0.0.0",
            "com.docker.network.bridge.name": "docker0",
            "com.docker.network.driver.mtu": "1500"
        },
        "Labels": {}
    }
]
{% endraw %}{% endhighlight %}

This json object contains informaton like subnet, Gateway, config options and all containers attached to this network.

# Different Docker Networks

## 1. Bridge Network

This network creates a software bridge that allows communication between the containers that are attached to it.
By default, container uses **bridge network**.
On installation, docker daemon automatically creates ethernet interface **docker0**. This is the link through which you can connect to docker host. You can check it by **ifconfig** command on docker host.
{% highlight html %}{% raw %}
varun@varun-ThinkPad-L490:~/my-pro-projects/docker-tutorial-data$ ifconfig
docker0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 172.17.0.1  netmask 255.255.0.0  broadcast 172.17.255.255
        inet6 fe80::42:53ff:feb4:1b2f  prefixlen 64  scopeid 0x20<link>
        ether 02:42:53:b4:1b:2f  txqueuelen 0  (Ethernet)
        RX packets 32063  bytes 1890588 (1.8 MB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 45853  bytes 131827114 (131.8 MB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
{% endraw %}{% endhighlight %}
Containers attached to this bridge network can communicate only through ips and does not resolve each other through name.
<div class="imgCont">
  <img class="object-fit" alt="Github Repository Option" title="Github Repository Option" src="/assets/img/docker/bridge-network.png" />
</div>
In the figure, you can see that container 1 to 4 are connected to each other through bridge **docker0**.
But there are sometimes you need to run few containers in the one network and few containers in other network. For Eg-
You want to group backend services and front end services separately. We can achieve this using **user defined networks** which we will learn later in this tutorial and will also discuss difference between the two.

## 2. None Network

Containers created with this network doesnot support any network interface and are completely isolated.
<div class="imgCont">
  <img class="object-fit" alt="Github Repository Option" title="Github Repository Option" src="/assets/img/docker/none-network.png" />
</div>

## 3. Host Network

Containers using this network does not get isolated from the docker host network instead they share the host's network namespace i.e. container's applicaion is accessible through docker host ip.

<div class="imgCont">
  <img class="object-fit" alt="Github Repository Option" title="Github Repository Option" src="/assets/img/docker/host-network.png" />
</div>

But it also creates a restriction as you are not able to run two containers appplication on the same port because only both applicaions can use the same port.


### Specify which network to use

**command-** sudo docker run --net network-name image-name

For Eg- sudo docker run --net host my-app

## User Defined Bridge Network

You can create custom bridge network as it has more benefits than default bridge networks.
This network isolates containers in it from other networks container. You can see this in figure below-
<div class="imgCont">
  <img class="object-fit" alt="Github Repository Option" title="Github Repository Option" src="/assets/img/docker/user-defined-bridge-network.png" />
</div>

## Create User Defined network
**command**- sudo docker network create network-name

{% highlight html %}{% raw %}
varun@varun-ThinkPad-L490:~/my-pro-projects/docker-tutorial-data$ sudo docker network create network1
[sudo] password for varun:
78b777429241ab32bd75d71c585767718e9dad61d366b614fe88bb8ba2bcc1be
varun@varun-ThinkPad-L490:~/my-pro-projects/docker-tutorial-data$ sudo docker network ls
NETWORK ID          NAME                DRIVER              SCOPE
ddaa990045a4        bridge              bridge              local
a6bc016d1d99        host                host                local
78b777429241        network1            bridge              local
c630fc777cd6        none                null                local
{% endraw %}{% endhighlight %}

When you run above command it create a bridge network for you. It also creates a network interface on the docker host which you can see using **ifconfig**
{% highlight html %}{% raw %}
varun@varun-ThinkPad-L490:~/my-pro-projects/docker-tutorial-data$ ifconfig
br-78b777429241: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 172.18.0.1  netmask 255.255.0.0  broadcast 172.18.255.255
        inet6 fe80::42:c8ff:fe82:436c  prefixlen 64  scopeid 0x20<link>
        ether 02:42:c8:82:43:6c  txqueuelen 0  (Ethernet)
        RX packets 972  bytes 79754 (79.7 KB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 194  bytes 69469 (69.4 KB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
{% endraw %}{% endhighlight %}

You can inspect this network and it also has its configuration like Subnet, Gateway and containers attached to it.
{% highlight html %}{% raw %}
varun@varun-ThinkPad-L490:~/my-pro-projects/docker-tutorial-data$ sudo docker network inspect network1
[
    {
        "Name": "network1",
        "Id": "78b777429241ab32bd75d71c585767718e9dad61d366b614fe88bb8ba2bcc1be",
        "Created": "2020-08-23T17:36:50.551913282+05:30",
        "Scope": "local",
        "Driver": "bridge",
        "EnableIPv6": false,
        "IPAM": {
            "Driver": "default",
            "Options": {},
            "Config": [
                {
                    "Subnet": "172.18.0.0/16",
                    "Gateway": "172.18.0.1"
                }
            ]
        },
        "Internal": false,
        "Attachable": false,
        "Ingress": false,
        "ConfigFrom": {
            "Network": ""
        },
        "ConfigOnly": false,
        "Containers": {
            "014e9738dca00acb8fd5fb16de0e95895c1b706030203720222e1bc87af8e6f3": {
                "Name": "pedantic_tesla",
                "EndpointID": "fd49d8249b967df5274de09767ff06a453a796f819db7026c79e291ba340d705",
                "MacAddress": "02:42:ac:12:00:02",
                "IPv4Address": "172.18.0.2/16",
                "IPv6Address": ""
            }
        },
        "Options": {},
        "Labels": {}
    }
]
{% endraw %}{% endhighlight %}
You can check containers info attached to it in **Containers** key.

## Remove Network
**command-** sudo docker network rm network-name

For Eg- sudo docker network rm network1

## Connect User Defined Bridge Network to Running container
**command-** sudo docker network connect network-name container-id

For Eg- sudo docker network connect network1 92eeab618f5d

## Disconnect User Defined Bridge Network to Running container
**command-** sudo docker network disconnect network-name container-id

For Eg- sudo docker network disconnect network1 92eeab618f5d

## Default Bridge Vs User Defned Bridge

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-lto5{background-color:#f8a102;border-color:inherit;text-align:left;vertical-align:top}
.tg .tg-qssw{background-color:#f8a102;text-align:left;vertical-align:top}
.tg .tg-i49k{background-color:#ffce93;text-align:left;vertical-align:top}
.tg .tg-xkfo{background-color:#9698ed;border-color:inherit;text-align:left;vertical-align:top}
.tg .tg-pidv{background-color:#ffce93;border-color:inherit;text-align:left;vertical-align:top}
.tg .tg-mo2v{background-color:#9698ed;text-align:left;vertical-align:top}
</style>
<table class="tg">
<thead>
  <tr>
    <th class="tg-xkfo"></th>
    <th class="tg-pidv"><span style="font-weight:bold">Default Bridge Network</span></th>
    <th class="tg-lto5"><span style="font-weight:bold">User Defined Bridge Network</span></th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-xkfo"><span style="font-weight:bold">DNS Resolution</span></td>
    <td class="tg-pidv">Containers can resolve each other only by ip address</td>
    <td class="tg-lto5">Container can resolve each other by name</td>
  </tr>
  <tr>
    <td class="tg-xkfo"><span style="font-weight:bold">Isolation</span></td>
    <td class="tg-pidv">Containers by default uses this network and any other unrelated <br>containers can connect</td>
    <td class="tg-lto5">Only containers belonging to this network can communicate</td>
  </tr>
  <tr>
    <td class="tg-mo2v"><span style="font-weight:bold">Attach/Detach</span></td>
    <td class="tg-i49k">To attach/detach, you need to stop container</td>
    <td class="tg-qssw">Container can be attach or detach from the network anytime during <br>its lifetime</td>
  </tr>
</tbody>
</table>
