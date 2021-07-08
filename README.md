# Melodics Platform and Services Engineering Code Challenge

### Preface

The purpose of this code challenge is to provide topics of conversation for you and your technical interviewer(s).

You should use it as an opportunity to demonstrate your opinions about how software engineering should be done.

For this reason, the task is deliberately loosely specified. Please state assumptions you have made, note corners you cut, and consider how you would have done things if you had enough time to do it "properly".

You should spend as much time as you need to, to show enough of what you know for you and your technical interviewer to have an in-depth conversation.


### The tools

Feel free to use whatever tools and technologies you are most comfortable with, noting that there are bonus points for familiarity with tools we're planning to use in the medium to long term, and a smaller amount of bonus points for tools that are conceptually similar. In general though, use what you are most comfortable with - it's much more important that you can show what you know and your opinions about software engineering than it is to know the tools we have chosen.

The shortlist of tools and techniques we plan to use on an ongoing basis on the Platform and Services team:

* Web
    * React Hooks
    * Apollo
    * Typescript
    * CSS Modules

* API Services
    * Microservices (predominantly logical microservices, rather than physical at our current scale)
    * Laravel, with PHP7.4+ and PHP Static Analyzer
    * Typescript & Node
    * CQRS and Event Driven Architecture
    * AWS SNS, SQS, S3

* Data Engineering
    * AWS Lambda
    * AWS S3
    * AWS SNS
    * AWS SQS
    * AWS Kinesis
    * Typescript
    * Athena

* Infrastructure & Devops
    * Terraform
    * AWS SecretsManager
    * AWS ECS
    * AWS RDS Aurora
    * AWS SAM utilizing CloudFormation
    * Buildkite
    * Docker
    * Docker compose
    * Various AWS services, project dependent

* API Testing
    * GWTE structured, BDD style testing
    * PHPUnit
    * ts-jest


### The scenario

You are working on an application that, at a high level, already has the same features as Melodics.

Your imaginary users have asked for help structuring their practice in a way that keeps things fresh and interesting.

They want to feel challenged, but not overwhelmed.
- *"I don't want to keep playing the tracks I've already mastered, but the first time I try a new track it takes a lot of effort to start feeling like I'm really getting it."*

They want variety in their practice routine.
- *"I get bored of hearing the same song over and over while I'm trying to get good enough to master it."*

Your imaginary product team have pitched the idea of a `Practice Playlist` to a sample of users, and have gotten a lot of positive feedback.

A `Practice Playlist` would allow users to manage a collection of lessons they're currently working on mastering.
A user's `Practice Playlist` would help them to move quickly between lessons they're actively trying to master, as they're practicing.

Your Data & Insights, and Content teams are interested to know the reasons why Lessons are removed from user's `Practice Playlist`s, and if there is a correlation between engagement with the Practice Playlists feature and retention.

Users told us that they want to be able to share their `Practice Playlist` on social media, and your Marketing team would like visibility on how often that happens.

### The task

Consider what the Engineering team would need to do to deliver this feature.

Choose some part of that work that aligns with your current skill set well, that can be demonstrated through code committed to a git repository.

Create a private git repository that includes this README.md file.

Describe the scope of what you intend to deliver, and the skills and knowledge you intend to demonstrate, in a file called SCOPE.md. Commit this to the repository.

Implement all, or some of what you intended to deliver, preferably making atomic commits along the way.

Describe limitations or issues with your implementation, as well as shortcuts you took and why, in a file called DISCUSSION.md. Commit this to the repository.

Send an invitation with Read access to the repository you created to your technical interviewer(s).
