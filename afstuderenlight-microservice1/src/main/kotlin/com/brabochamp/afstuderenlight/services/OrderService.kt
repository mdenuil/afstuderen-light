package com.brabochamp.afstuderenlight.services

import com.brabochamp.afstuderenlight.models.Order
import com.brabochamp.afstuderenlight.repositories.OrdersRepository
import org.springframework.stereotype.Service

@Service
class OrderService (
    val ordersRepository: OrdersRepository
) {
    fun getOrders(): List<Order> {
        return ordersRepository.findAll().toList()
    }
}