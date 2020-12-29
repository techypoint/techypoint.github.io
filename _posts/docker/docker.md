https://www.youtube.com/watch?v=el7768BNUPw
https://www.youtube.com/watch?v=-YnMr1lj4Z8
https://lwn.net/Articles/531114/

https://hackernoon.com/the-curious-case-of-pid-namespaces-1ce86b6bc900

https://en.wikipedia.org/wiki/Cgroups
https://www.youtube.com/watch?v=j_UUnlVC2Ss&list=PL2We04F3Y_409TsxnyIZe8_bzTGPJ4EaH&index=5

https://www.youtube.com/watch?v=zJ6WbK9zFpI

http://alexander.holbreich.org/docker-components-explained/

https://iximiuz.com/en/posts/journey-from-containerization-to-orchestration-and-beyond/#container-runtimes
https://medium.com/faun/docker-containerd-standalone-runtimes-heres-what-you-should-know-b834ef155426
https://stackoverflow.com/questions/58817768/how-does-containerd-shim-create-daemonless-containers
https://prefetch.net/blog/2018/02/19/how-the-docker-container-creation-process-works-from-docker-run-to-runc/

https://nickjanetakis.com/blog/understanding-how-the-docker-daemon-and-docker-cli-work-together
https://wiki.aquasec.com/display/containers/Docker+Architecture

https://thenewstack.io/docker-station-part-one-essential-docker-concepts-tools-terminology/#:~:text=So%3A%20containers%20are%20lightweight%20and,like%20%E2%80%94%20brand%2Dnew%20containers.


https://iximiuz.com/en/posts/implementing-container-runtime-shim/
http://alexander.holbreich.org/docker-components-explained/
https://mkdev.me/en/posts/the-tool-that-really-runs-your-containers-deep-dive-into-runc-and-oci-specifications

https://iximiuz.com/en/posts/implementing-container-runtime-shim/

kubernetes
https://kubernetes.io/blog/2017/11/containerd-container-runtime-options-kubernetes/
sudo ls -lah /proc/pid/ns
sudo ls -lah /proc/$$/ns  - for current process
pstree -p
ps auxf

Docker
commands
sudo docker images -a -q
sudo docker rmi $(sudo docker images -a -q)

root       908  0.1  0.3 1415136 49188 ?       Ssl  12:34   0:43 /usr/bin/containerd
root       561  0.0  0.0 108812  5568 ?        Sl   20:56   0:00  \_ containerd-shim -namespace moby -workdir /var/lib/containerd/io.containerd.runtime
root       582  0.3  0.0   2292   680 ?        Ss   20:56   0:00      \_ sleep 6000
root    



topics -

docker install
difference between docker and vm
docker image vs container
docker entrypoint vs cmd
