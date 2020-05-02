package com.brabochamp.afstuderenlight.repositories

import com.brabochamp.afstuderenlight.models.Order
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

@Repository
interface OrdersRepository : CrudRepository<Order, Long> {
}