package com.brabochamp.afstuderenlight

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer

@EnableEurekaServer
@SpringBootApplication
class AfstuderenlightApplication

fun main(args: Array<String>) {
    runApplication<AfstuderenlightApplication>(*args)
}
