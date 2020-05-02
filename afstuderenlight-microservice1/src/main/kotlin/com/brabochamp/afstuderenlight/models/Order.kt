package com.brabochamp.afstuderenlight.models

import com.fasterxml.jackson.annotation.JsonIgnoreProperties
import javax.persistence.*

@Entity
@Table(name = "orders")
class Order (
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_id")
    val orderId: Long = 0,

    @OneToMany(mappedBy = "order")
    @JsonIgnoreProperties("order")
    val orderLines: MutableList<OrderLine> = mutableListOf()
)