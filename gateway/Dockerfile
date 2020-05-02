FROM maven:3.6-jdk-12 AS build
COPY src /usr/src/app/src
COPY pom.xml /usr/src/app
RUN mvn -f /usr/src/app/pom.xml clean package

FROM adoptopenjdk/openjdk12:jre
COPY --from=build /usr/src/app/target/afstuderenlight-0.0.1-SNAPSHOT.jar /usr/app/afstuderenlight-0.0.1-SNAPSHOT.jar

# Start command
ENTRYPOINT [ "java", "-jar", "/usr/app/afstuderenlight-0.0.1-SNAPSHOT.jar" ]