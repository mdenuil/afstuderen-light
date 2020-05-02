package com.brabochamp.afstuderenlight

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.cloud.netflix.eureka.EnableEurekaClient

@SpringBootApplication
@EnableEurekaClient
class AfstuderenlightApplication

fun main(args: Array<String>) {
    runApplication<AfstuderenlightApplication>(*args)
}
