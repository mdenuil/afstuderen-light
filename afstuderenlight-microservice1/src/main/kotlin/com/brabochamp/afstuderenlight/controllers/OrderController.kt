package com.brabochamp.afstuderenlight.controllers

import com.brabochamp.afstuderenlight.models.Order
import com.brabochamp.afstuderenlight.services.OrderService
import org.springframework.http.HttpStatus
import org.springframework.http.MediaType
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@CrossOrigin(origins = ["*"], allowedHeaders = ["*"])
@RestController
@RequestMapping(value = ["/orders"])
class OrderController (
    val orderService: OrderService
){
    @GetMapping(produces = [MediaType.APPLICATION_JSON_VALUE])
    fun getOrders(): ResponseEntity<List<Order>> {
        val orders = orderService.getOrders()
        return ResponseEntity(orders, HttpStatus.OK)
    }
}