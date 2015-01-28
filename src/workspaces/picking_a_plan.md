# Picking a Plan

The [Plans and Pricing Page](https://c9.io/web/site/pricing) has the basics for the available plans but here, we'll break down the details of workspaces.

## Workspace Choices
With Cloud9, you write code, run commands, and build applications in workspaces (virtual machines) hosted on Google Cloud. You're free to resize workspaces at any time so don't fret about their initial sizing. Following are the different types of workspaces and their properties:

### Micro Workspace
- 512MB RAM
- 1GB Disk space
- 1 CPU
- Private

### Small Workspace
- 512MB RAM
- 5GB Disk space
- 1 CPU
- Private

### Medium Workspace
- 1GB RAM
- 10GB Disk space
- 1 CPU
- Private

### Large Workspace
- 2GB RAM
- 20GB Disk space
- 1 CPU
- Private

### SSH Workspace
- Resources determined by user
- Private

### Community Workspaces
- 512MB RAM
- 1GB Disk space
- 1 CPU
- Publicly readable
- Archived after a week of inactivity (restored unchanged when you open it again)

Given the resources from your plan, you may make as many private workspaces as you'd like. For example, if you're signed up for the large plan with 80gb of storage, you could use that to have 4 different large workspaces, each with 20gb of storage. With those 4 workspaces, you would have no resources left to make further private workspaces although you could still make more community workspaces.

## Reaching the Limits

When a workspace reaches its RAM limit, you will be notified and processes may be killed to stay within the limit.

When the storage limit within a workspace is reached, the terminal will display a message to let you know. Any downloads will be stopped.

## All plans

The following features are provided with the free plan and all paid plans.

- __Unlimited Community Workspaces__ - Each community workspace is readable by anyone, like a public GitHub repository.
- __Team collaboration__ - You can invite coworkers, classmates, and anyone with an email address or Cloud9 account to work with you, real-time, giving read/write privileges to whomever you choose. Collaboration takes place live so you can see one another manipulating code real-time.
- __VMs hosted on Google Cloud__ - Each VM/workspace is allotted resources according to your chosing. Those resources are important because each workspace is running on a VM hosted on Google Cloud.
- __Sudo Shell Access/Terminal__ - Sudo access allows you to install your own programs or languages, giving them nearly the same amount of access they might have on a local machine.
- __SSD Performance__ - VM's are hosted on SSD's to speed up processes and development.
- __Running on Docker__ - Workspaces are powered by Docker Ubuntu containers that give you full freedom over your environment, including sudo rights.