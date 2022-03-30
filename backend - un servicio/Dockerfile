FROM openjdk:8-jdk-alpine
MAINTAINER baeldung.com
COPY target/springboot2-0.0.1-SNAPSHOT.war management_system.war
ENTRYPOINT [ "java", "-jar", "/management_system.war" ]